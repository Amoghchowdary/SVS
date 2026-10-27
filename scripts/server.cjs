const http=require('http'),fs=require('fs'),path=require('path');
const {build}=require('./build.cjs');
const {byId}=require('../src/content.cjs');
const port=Number(process.env.PORT||3003),host=process.env.HOST||'0.0.0.0';
const root=path.resolve(__dirname,'..','dist');
build();
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.mp4':'video/mp4','.txt':'text/plain; charset=utf-8'};
const routes=new Set(['','about','programmes','departments','facilities','contact']);
function siteFor(req,url){const h=String(req.headers.host||'').split(':')[0].toLowerCase();const prefix=h.endsWith('.localhost')?h.slice(0,-'.localhost'.length):h.split('.')[0];const requested=url.searchParams.get('site');return byId[requested]?requested:(byId[prefix]?prefix:'group');}
const server=http.createServer((req,res)=>{
 try{
  if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405);res.end('Method not allowed');return}
  const url=new URL(req.url,'http://localhost');let p=decodeURIComponent(url.pathname);if(p.includes('\0')||p.includes('..')||p.includes('\\')){res.writeHead(400);res.end('Bad path');return}
  const site=siteFor(req,url);
  if(p==='/'||routes.has(p.replace(/^\/+|\/+$/g,''))){const route=p.replace(/^\/+|\/+$/g,'');p=`/_sites/${site}/${route?route+'/':''}index.html`}
  if(p.endsWith('/')&&!p.startsWith('/assets/'))p+='index.html';
  const file=path.resolve(root,'.'+p);if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end('Forbidden');return}
  if(!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Not found');return}
  const stat=fs.statSync(file),ext=path.extname(file).toLowerCase();let start=0,end=stat.size-1,status=200;
  const range=req.headers.range;if(range&&ext==='.mp4'){
   const m=/bytes=(\d*)-(\d*)/.exec(range);if(m){start=m[1]?Number(m[1]):0;end=m[2]?Math.min(Number(m[2]),stat.size-1):stat.size-1;if(start> end||start>=stat.size){res.writeHead(416,{'Content-Range':`bytes */${stat.size}`});res.end();return}status=206;}
  }
  const headers={'Content-Type':types[ext]||'application/octet-stream','Content-Length':end-start+1,'Cache-Control':ext==='.html'?'no-cache':'public,max-age=3600','X-Content-Type-Options':'nosniff'};
  if(ext==='.mp4'){headers['Accept-Ranges']='bytes';if(status===206)headers['Content-Range']=`bytes ${start}-${end}/${stat.size}`;}
  res.writeHead(status,headers);if(req.method==='HEAD'){res.end();return}fs.createReadStream(file,{start,end}).pipe(res);
 }catch(err){console.error(err);res.writeHead(500);res.end('Server error');}
});
server.listen(port,host,()=>console.log(`SVS V26 on port ${port}\nGroup: http://localhost:${port}\nMedical College: http://medicalcollege.localhost:${port}\nMedical Hospital: http://medicalhospital.localhost:${port}\nDental College: http://dentalcollege.localhost:${port}\nDental Hospital: http://dentalhospital.localhost:${port}\nNursing College: http://nursingcollege.localhost:${port}\nFallback: http://localhost:${port}/?site=medicalcollege`));
