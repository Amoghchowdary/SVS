(()=>{'use strict';
 const ids=['group','medicalcollege','medicalhospital','dentalcollege','dentalhospital','nursingcollege'];
 const pageSite=window.__SVS_SITE__||'group';
 const host=location.hostname.toLowerCase();
 const local=host==='localhost'||host.endsWith('.localhost')||host==='127.0.0.1';
 const base=window.__SVS_BASE_PATH__||'/';
 function siteUrl(id){
  if(!ids.includes(id))id='group';
  if(local){const h=id==='group'?'localhost':`${id}.localhost`;return `${location.protocol}//${h}:${location.port||'3003'}/`;}
  return `${base}${id==='group'?'':id+'/'}`;
 }
 document.querySelectorAll('a[data-site]').forEach(a=>{a.href=siteUrl(a.dataset.site);});
 const fallbackSite=new URLSearchParams(location.search).get('site');
 if(host==='localhost'&&ids.includes(fallbackSite)&&fallbackSite!=='group'){document.querySelectorAll('a[href^="/"]:not([data-site])').forEach(a=>{const u=new URL(a.getAttribute('href'),location.href);u.searchParams.set('site',fallbackSite);a.href=u.pathname+u.search;});}
 const menu=document.getElementById('switchMenu'),btn=document.getElementById('switchBtn');
 btn?.addEventListener('click',()=>{const opened=menu.hidden;menu.hidden=!opened;btn.setAttribute('aria-expanded',String(opened));});
 document.addEventListener('click',e=>{if(menu&&!menu.hidden&&!e.target.closest('#switchMenu,#switchBtn')){menu.hidden=true;btn.setAttribute('aria-expanded','false');}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu){menu.hidden=true;btn?.setAttribute('aria-expanded','false');}});
 const mobile=document.getElementById('mobileToggle'),nav=document.getElementById('primaryNav');
 mobile?.addEventListener('click',()=>{const opened=!nav.classList.contains('open');nav.classList.toggle('open',opened);mobile.setAttribute('aria-expanded',String(opened));mobile.textContent=opened?'✕':'☰';});
 const search=document.getElementById('deptSearch'),items=[...document.querySelectorAll('#deptGrid .department')],empty=document.querySelector('.search-empty');
 search?.addEventListener('input',()=>{const q=search.value.trim().toLocaleLowerCase();let shown=0;items.forEach(a=>{const match=a.dataset.search.includes(q);a.hidden=!match;if(match)shown++;});if(empty)empty.hidden=shown!==0;});
 const video=document.querySelector('.heritage-film video, .hero-media video');if(video){const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');if(reduce.matches)video.pause();else video.play().catch(()=>{});reduce.addEventListener?.('change',()=>reduce.matches?video.pause():video.play().catch(()=>{}));}
})();
