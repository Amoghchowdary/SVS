'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),dist=path.join(root,'dist');
const {sites}=require('../src/content.cjs');
const routes=['','about','programmes','departments','facilities','contact'];
const group=fs.readFileSync(path.join(dist,'index.html'),'utf8');
const found=group.match(/__SVS_BASE_PATH__=("[^"]+")/);
const base=found?JSON.parse(found[1]):'/';
let count=0;
function check(name,callback){try{callback();count++;console.log('PASS V27',name)}catch(e){process.exitCode=1;console.error('FAIL V27',name,e.message)}}
check('GitHub Pages has exactly one static deployment workflow',()=>{
 assert.ok(fs.existsSync(path.join(root,'.github/workflows/deploy-pages.yml')));
 assert.ok(!fs.existsSync(path.join(root,'.github/workflows/deploy-cloudflare.yml')));
 const workflow=fs.readFileSync(path.join(root,'.github/workflows/deploy-pages.yml'),'utf8');
 assert.match(workflow,/upload-pages-artifact@v4/);assert.match(workflow,/deploy-pages@v4/);
 assert.match(workflow,/pages: write/);assert.match(workflow,/id-token: write/);
});
check('No edge worker or host-based production runtime required',()=>{
 assert.ok(!fs.existsSync(path.join(root,'cloudflare')));
 assert.ok(!fs.existsSync(path.join(dist,'_worker.js')));
 assert.ok(!fs.existsSync(path.join(dist,'_sites')));
});
check('Git metadata is accepted in source but excluded from Pages build',()=>{
 assert.ok(!fs.existsSync(path.join(dist,'.git')));
 assert.ok(!fs.existsSync(path.join(dist,'.github')));
 assert.ok(!fs.existsSync(path.join(dist,'node_modules')));
 assert.ok(fs.existsSync(path.join(dist,'.nojekyll')));
});
check('Static base path set for deployment',()=>assert.ok(base==='/'||base==='/SVS/'));
check('All six site front pages are separate',()=>{
 const names=new Set();
 for(const site of sites){
  const file=path.join(dist,site.id==='group'?'':site.id,'index.html');
  const html=fs.readFileSync(file,'utf8');
  names.add(html.match(/<title>([^<]+)<\/title>/)?.[1]);
  assert.match(html,new RegExp(`__SVS_SITE__="${site.id}"`));
 }
 assert.equal(names.size,6);
});
check('Every institution maintains all six navigable routes',()=>{
 for(const site of sites)for(const route of routes){
  const f=path.join(dist,site.id==='group'?'':site.id,route,'index.html');
  assert.ok(fs.statSync(f).size>2500,f);
 }
});
check('All six site switcher destinations resolve',()=>{
 for(const site of sites.slice(1))assert.ok(group.includes(`href="${base}${site.id}/"`),site.id);
});
check('Every internal absolute URL resolves to a built file',()=>{
 for(const site of sites)for(const route of routes){
  const f=path.join(dist,site.id==='group'?'':site.id,route,'index.html');
  const html=fs.readFileSync(f,'utf8');
  const regex=/(?:href|src)="(\/[^"#?]*)/g;
  let m;while((m=regex.exec(html))!==null){
   let url=m[1];assert.ok(url.startsWith(base),`${site.id}/${route} has URL outside base: ${url}`);
   let relative=url.slice(base.length);if(relative==='')relative='index.html';
   if(relative.endsWith('/'))relative+='index.html';
   const target=path.resolve(dist,relative);
   assert.ok(target.startsWith(dist+path.sep)||target===path.join(dist,'index.html'));
   assert.ok(fs.existsSync(target),`Broken ${site.id}/${route}: ${url}`);
  }
 }
});
check('CSS and JavaScript assets resolve under the Pages base',()=>{
 for(const x of ['assets/site.css','assets/site.js','assets/editorial-v27.css','assets/favicon.svg']){
  assert.ok(group.includes(`${base}${x}`));assert.ok(fs.statSync(path.join(dist,x)).size>0);
 }
});
check('Campus hero video is included and addressable',()=>{
 assert.ok(group.includes(`${base}assets/official/svs-campus-aerial.mp4`));
 assert.ok(fs.statSync(path.join(dist,'assets/official/svs-campus-aerial.mp4')).size>100000);
});
check('No unconfigured CNAME published',()=>assert.ok(!fs.existsSync(path.join(dist,'CNAME'))));
console.log(`V27 Github Pages specific: ${count} checks passed`);
if(process.exitCode)process.exit(process.exitCode);
