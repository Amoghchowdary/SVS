import fs from 'node:fs';
const code=fs.readFileSync(new URL('../dist/_worker.js',import.meta.url),'utf8');
const {default:worker}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
for(const id of ['medicalcollege','medicalhospital','dentalcollege','dentalhospital','nursingcollege']){
 let target='';
 const request=new Request(`https://${id}.yourdomain.in/programmes/`);
 const res=await worker.fetch(request,{ASSETS:{fetch:async r=>{target=typeof r==='string'?r:r.url;return new Response('OK',{status:200})}}});
 if(!target.includes(`/_sites/${id}/programmes/`)||res.status!==200)throw Error('Wrong route '+id+' '+target);
 console.log('PASS Cloudflare host rewrite',id);
}
console.log('PASS Cloudflare host-based routing')
