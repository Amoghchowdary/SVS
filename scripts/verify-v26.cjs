'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist');let passed=0;
function check(name,fn){try{fn();passed++;console.log('PASS V26',name)}catch(e){process.exitCode=1;console.error('FAIL V26',name,e.message)}}
const read=(p)=>fs.readFileSync(path.join(dist,p),'utf8');const group=read('_sites/group/index.html');const css=read('assets/editorial-v26.css');
const ids=['group','medicalcollege','medicalhospital','dentalcollege','dentalhospital','nursingcollege'];
const routes=['','about','programmes','departments','facilities','contact'];
check('V26 stylesheet included',()=>assert.match(group,/editorial-v26\.css/));
check('Group hero is a full-width campus video',()=>assert.match(group,/<section class="heritage-film"[^>]*><video/));
check('Video uses local official campus footage',()=>assert.match(group,/svs-campus-aerial\.mp4/));
check('No boxed video card or caption overlay',()=>assert.doesNotMatch(group,/legacy-video-card|photo-overlay|hero-media enter/));
check('Group legacy year displayed',()=>assert.match(group,/Founded in 1997/));
check('Medical college history included',()=>assert.match(group,/1999/));
check('Human-written context substantially expanded',()=>assert.ok(group.length>14000 && group.includes('Sri Venkata Sai Educational Society began in 1997')));
check('Six independent identities preserved',()=>assert.equal(ids.length,6));
check('Five visual destination cards included',()=>assert.equal((group.match(/class="gateway gateway-/g)||[]).length,5));
check('All five destination cards use photographs',()=>assert.equal((group.match(/class="gateway-img"/g)||[]).length,5));
check('Distinct inline vector marks',()=>assert.ok((group.match(/class="gateway-icon"/g)||[]).length===5));
check('Brochure-grounded MBBS and MD/MS appear',()=>{assert.match(group,/MBBS/);assert.match(group,/MD\/MS/)});
check('Unconfirmed dental and nursing content flagged',()=>assert.match(group,/DETAILS TO CONFIRM/));
check('No fake dental-specific imagery claims',()=>assert.match(group,/Dental pages currently use group-campus/));
check('Three image editorial gallery',()=>assert.equal((group.match(/class="gallery-card gallery-card-/g)||[]).length,3));
check('All six public pages have internal navigation',()=>{for(const id of ids)for(const route of routes){const html=read(`_sites/${id}/${route?route+'/':''}index.html`);assert.match(html,/id="primaryNav"/);assert.match(html,/id="switchMenu"/);}});
check('All specialist homepages include photo section',()=>{for(const id of ids.slice(1))assert.match(read(`_sites/${id}/index.html`),/class="inner-home-photo"/)});
check('All institutions have photography-led inside section',()=>{for(const id of ids)assert.match(read(`_sites/${id}/about/index.html`),/class="story-photo"/)});
check('All institutional services remain separate',()=>{for(const id of ids)assert.match(read(`_sites/${id}/programmes/index.html`),/class="programme-grid"/)});
check('Department directory is searchable',()=>{for(const id of ids)assert.match(read(`_sites/${id}/departments/index.html`),/id="deptSearch"/)});
check('Contact details match supplied brochure',()=>assert.match(read('_sites/group/contact/index.html'),/svsmc_mbnr@yahoo\.co\.in/));
check('No insecure demo student or parent PIN',()=>assert.doesNotMatch(group,/PIN: 1234/));
check('No remote image/font APIs required',()=>{assert.doesNotMatch(css,/@import|fonts\.googleapis|url\(https?:/);assert.doesNotMatch(group,/<script[^>]+src="https?:/)});
check('Reduced motion breakpoint present',()=>assert.match(css,/prefers-reduced-motion/));
check('Mobile/touch media rules present',()=>assert.match(css,/@media\(max-width:760px\)/));
check('Tablet rules present',()=>assert.match(css,/@media\(max-width:1080px\)/));
check('Wide desktop layout present',()=>assert.match(css,/--max:1740px/));
check('Video and picture media kept local',()=>{for(const f of ['svs-campus-aerial.mp4','svs-medical-college.webp','svs-hospital-building.webp','svs-nursing-classroom.webp'])assert.ok(fs.statSync(path.join(dist,'assets/official',f)).size>20000)});
check('Cloudflare hostname routing retained',()=>assert.match(read('_worker.js'),/IDS\.has\(first\)/));
check('Local server port 3003 retained',()=>assert.match(fs.readFileSync(path.join(root,'scripts/server.cjs'),'utf8'),/PORT\|\|3003/));
check('Build contains all independent source modules',()=>assert.ok(fs.existsSync(path.join(root,'src/content.cjs'))&&fs.existsSync(path.join(root,'src/editorial.cjs'))&&fs.existsSync(path.join(root,'src/legacy-icons.cjs'))&&fs.existsSync(path.join(root,'scripts/build.cjs'))));
check('Git checkout metadata allowed in development root',()=>{
  // GitHub Actions actions/checkout@v4 creates .git. This is normal and must NOT fail CI.
  assert.ok(fs.existsSync(path.join(root,'package.json')));
  assert.ok(fs.existsSync(path.join(root,'.github','workflows','verify.yml')));
});
check('Published dist excludes Git internals',()=>{
  assert.ok(!fs.existsSync(path.join(dist,'.git')));
  assert.ok(!fs.existsSync(path.join(dist,'.github')));
  assert.ok(!fs.existsSync(path.join(dist,'node_modules')));
});
check('Deployment worker included in built output',()=>{
  assert.equal(fs.readFileSync(path.join(dist,'_worker.js'),'utf8'),fs.readFileSync(path.join(root,'cloudflare','_worker.js'),'utf8'));
});
check('All six institution homepages exist in self-contained dist',()=>{
  for(const id of ids)assert.ok(fs.statSync(path.join(dist,'_sites',id,'index.html')).size>5000);
});
console.log(`V26-specific: ${passed} checks passed`);if(process.exitCode)process.exit(process.exitCode);
