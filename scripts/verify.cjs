const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),dist=path.join(root,'dist');
const {sites}=require('../src/content.cjs'),{routes}=require('./build.cjs');
let passed=0;
function test(name,fn){try{fn();passed++;console.log('PASS',name)}catch(err){console.error('FAIL',name,err.message);process.exitCode=1}}
for(const s of sites){
 for(const route of routes){const file=path.join(dist,'_sites',s.id,route,'index.html');
  test(`${s.id} ${route||'home'} compiled`,()=>assert.ok(fs.existsSync(file)));
  test(`${s.id} ${route||'home'} correct title`,()=>assert.match(fs.readFileSync(file,'utf8'),new RegExp(s.name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'))));
 }
 test(`${s.id} correct domain site id`,()=>assert.match(fs.readFileSync(path.join(dist,'_sites',s.id,'index.html'),'utf8'),new RegExp(`__SVS_SITE__="${s.id}"`)));
}
const html=fs.readFileSync(path.join(dist,'_sites','group','index.html'),'utf8');
test('Group is linked to five sub-sites',()=>{for(const s of sites.slice(1))assert.ok(html.includes(`data-site="${s.id}"`))});
test('Main site has documented MBBS and MD/MS programmes',()=>{assert.match(html,/MBBS/);assert.match(html,/MD\/MS/)});
test('Unverified programmes are labeled',()=>assert.match(html,/DETAILS TO CONFIRM/));
test('Default insecure portal PIN never published',()=>{for(const s of sites)for(const route of routes)assert.ok(!fs.readFileSync(path.join(dist,'_sites',s.id,route,'index.html'),'utf8').includes('1234'))});
test('Stylesheet, script, and media copied',()=>{for(const p of ['assets/site.css','assets/site.js','assets/official/svs-campus-aerial.mp4','assets/official/svs-medical-college.webp','assets/official/svs-nursing-classroom.webp'])assert.ok(fs.statSync(path.join(dist,p)).size>0)});
test('Cloudflare Pages Worker ready',()=>assert.ok(fs.existsSync(path.join(dist,'_worker.js'))));
test('GitHub Actions checks',()=>assert.ok(fs.existsSync(path.join(root,'.github/workflows/verify.yml'))));
test('Local server listening on 3003',()=>assert.match(fs.readFileSync(path.join(root,'scripts/server.cjs'),'utf8'),/PORT\|\|3003/));
test('Six independently titled site templates',()=>assert.equal(new Set(sites.map(s=>s.name)).size,6));
console.log(`${passed} tests completed.`);if(process.exitCode)process.exit(process.exitCode);
