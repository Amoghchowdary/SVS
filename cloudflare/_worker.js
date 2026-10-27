/* Cloudflare Pages: One project, six host-based static websites.
   Each CNAME/custom-domain must first be associated with this Pages project.
   Env.ASSETS.fetch serves the pre-rendered HTML corresponding to the requesting host. */
const IDS=new Set(['group','medicalcollege','medicalhospital','dentalcollege','dentalhospital','nursingcollege']);
const ROUTES=new Set(['','about','programmes','departments','facilities','contact']);
export default {
  async fetch(request, env) {
    const url=new URL(request.url);
    if(url.pathname.startsWith('/_sites/'))return new Response('Not found',{status:404});
    if(url.pathname.startsWith('/assets/'))return env.ASSETS.fetch(request);
    const host=url.hostname.toLowerCase(),first=host.split('.')[0];
    const preview=url.searchParams.get('site');
    const site=IDS.has(first)?first:(IDS.has(preview)?preview:'group');
    const route=url.pathname.replace(/^\/+|\/+$/g,'');
    if(!ROUTES.has(route))return new Response('Not found',{status:404,headers:{'Content-Type':'text/plain; charset=utf-8'}});
    const target=new URL(request.url);
    target.pathname=`/_sites/${site}/${route?route+'/':''}`;
    target.search='';
    const response=await env.ASSETS.fetch(new Request(target.toString(),request));
    const headers=new Headers(response.headers);
    headers.set('X-SVS-Site',site);
    headers.set('X-Content-Type-Options','nosniff');
    return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
  }
};
