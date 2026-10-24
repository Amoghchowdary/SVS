'use strict';
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const mode=process.argv[2]==='preview'?'preview':'dev';const base=path.resolve(__dirname,'..',mode==='preview'?'dist':'.');
if(!fs.existsSync(base)){console.error('dist not found. Run npm run build first.');process.exit(1)}
const types={'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.json':'application/json','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp','.mp4':'video/mp4','.webm':'video/webm','.ico':'image/x-icon'};
let clients=[];
const devSnippet=`\n<script>if(typeof EventSource!=='undefined'){const e=new EventSource('/__reload');e.addEventListener('change',()=>location.reload())}</script>\n`;
function reply(res,status,message){res.writeHead(status,{'Content-Type':'text/plain; charset=utf-8','X-Content-Type-Options':'nosniff'});res.end(message)}
const server=http.createServer((req,res)=>{
 let parsed;try{parsed=new URL(req.url,'http://localhost')}catch{return reply(res,400,'Bad request')}
 if(mode==='dev'&&parsed.pathname==='/__reload'){res.writeHead(200,{'Content-Type':'text/event-stream','Cache-Control':'no-store','Connection':'keep-alive'});res.write(': ready\n\n');clients.push(res);req.on('close',()=>{clients=clients.filter(c=>c!==res)});return}
 let name;try{name=decodeURIComponent(parsed.pathname).replace(/^\/+/, '')}catch{return reply(res,400,'Bad path')}
 if(!name)name='index.html';if(name.split(/[\/]/).some(s=>s==='..')||name.includes('\u0000'))return reply(res,403,'Forbidden');
 const target=path.resolve(base,name);if(target!==base&&!target.startsWith(base+path.sep))return reply(res,403,'Forbidden');
 let f=target;try{if(!fs.statSync(f).isFile())return reply(res,404,'Not found')}catch{return reply(res,404,'Not found')}
 const ext=path.extname(f).toLowerCase();res.setHeader('Content-Type',types[ext]||'application/octet-stream');res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Cache-Control','no-store');res.setHeader('Referrer-Policy','no-referrer');
 if(mode==='dev'&&ext==='.html'){let html=fs.readFileSync(f,'utf8');res.end(html.replace('</body>',devSnippet+'</body>'));return}
 fs.createReadStream(f).pipe(res)
});
let activePort=Number(process.env.PORT)||5173;
server.on('error',e=>{if(e.code==='EADDRINUSE'&&activePort<5185){activePort++;server.listen(activePort,'127.0.0.1')}else{console.error(e);process.exit(1)}});
server.on('listening',()=>console.log(`\nSVS Experience V21 — ${mode==='dev'?'development':'build preview'}\n  Local: http://127.0.0.1:${server.address().port}\n  Press Ctrl+C to stop.\n`));
server.listen(activePort,'127.0.0.1');
if(mode==='dev'){
 let timeout;for(const dir of [base,path.join(base,'assets'),path.join(base,'client-media')]){
  try{fs.watch(dir,(_kind,filename)=>{if(!filename||/^node_modules|^dist|^release|^\.git/.test(filename))return;clearTimeout(timeout);timeout=setTimeout(()=>clients.forEach(r=>{try{r.write('event: change\ndata: reload\n\n')}catch{}}),180)})}catch{}}
}
