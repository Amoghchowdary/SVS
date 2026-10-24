/* SVS V18: specialty discovery loop, editorial image depth, news filters.
   No remote services, no actual appointment scheduling. */
(()=>{'use strict';
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let instances=[],raf=0,last=0,io;
const hold=(inst,ms=4500)=>{inst.holdUntil=performance.now()+ms};
function attachMarquee(shell){
 const viewport=shell.querySelector('.v18-marquee-viewport');
 const first=shell.querySelector('.v18-marquee-set');
 if(!viewport||!first)return;
 const inst={shell,viewport,first,visible:true,holdUntil:0,focus:false,hover:false,interacting:false};
 shell.addEventListener('pointerenter',()=>{inst.hover=true;hold(inst,500)});
 shell.addEventListener('pointerleave',()=>{inst.hover=false;hold(inst,600)});
 shell.addEventListener('focusin',()=>{inst.focus=true});
 shell.addEventListener('focusout',e=>{if(!shell.contains(e.relatedTarget)){inst.focus=false;hold(inst,1800)}});
 viewport.addEventListener('pointerdown',()=>{inst.interacting=true;hold(inst,3500)});
 window.addEventListener('pointerup',()=>{inst.interacting=false},{signal:inst.controller?.signal});
 viewport.addEventListener('wheel',()=>hold(inst,3600),{passive:true});
 viewport.addEventListener('touchstart',()=>hold(inst,4600),{passive:true});
 instances.push(inst);
 io?.observe(shell);
}
function periodOf(inst){const style=getComputedStyle(inst.shell.querySelector('.v18-marquee-track'));const gap=parseFloat(style.columnGap||style.gap)||14;return inst.first.offsetWidth+gap}
function cycle(now){raf=requestAnimationFrame(cycle);const dt=last?Math.min(50,now-last):16;last=now;
 for(const x of instances){if(!x.shell.isConnected||!x.visible||document.hidden||reduced.matches||x.hover||x.focus||x.interacting||now<x.holdUntil)continue;
  const width=periodOf(x);if(!width)continue;
  x.viewport.scrollLeft+=dt*.037; // about 37 pixels per second
  if(x.viewport.scrollLeft>=width)x.viewport.scrollLeft-=width;
  const cards=x.first.querySelectorAll('.v17-specialty');const pos=x.viewport.scrollLeft;
  const idx=Math.min(cards.length-1,Math.max(0,Math.round(pos/(cards[0]?.offsetWidth+14||192))%cards.length));
  cards.forEach((card,i)=>card.classList.toggle('is-spotlight',i===idx));
 }
}
function mount(){io?.disconnect();instances=[];last=0;
 io=new IntersectionObserver(entries=>{for(const e of entries){const x=instances.find(x=>x.shell===e.target);if(x)x.visible=e.isIntersecting}},{rootMargin:'100px',threshold:0});
 document.querySelectorAll('[data-v18-marquee]').forEach(attachMarquee);
 document.querySelectorAll('[data-v18-photo-frame]').forEach(el=>{
  el.onpointermove=e=>{if(reduced.matches||e.pointerType==='touch')return;const rect=el.getBoundingClientRect();const x=(e.clientX-rect.left)/rect.width-.5,y=(e.clientY-rect.top)/rect.height-.5;el.style.setProperty('--rotate-x',(-y*3.0).toFixed(2)+'deg');el.style.setProperty('--rotate-y',(x*3.0).toFixed(2)+'deg')};
  el.onpointerleave=()=>{el.style.setProperty('--rotate-x','0deg');el.style.setProperty('--rotate-y','0deg')};
 });
}
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-v18-marquee-nav]');
 if(button){const shell=button.closest('[data-v18-marquee]');const x=instances.find(x=>x.shell===shell);if(!x)return;const distance=192*(button.dataset.v18MarqueeNav==='next'?1:-1);const period=periodOf(x);
  if(distance<0&&x.viewport.scrollLeft<192)x.viewport.scrollLeft+=period;
  x.viewport.scrollBy({left:distance,behavior:reduced.matches?'instant':'smooth'});hold(x,5000);return;
 }
 const chip=event.target.closest('[data-v18-news-filter]');
 if(chip){const category=chip.dataset.v18NewsFilter;document.querySelectorAll('[data-v18-news-filter]').forEach(c=>{const active=c===chip;c.classList.toggle('active',active);c.setAttribute('aria-pressed',String(active))});let shown=0;document.querySelectorAll('#v18NewsList [data-news-category]').forEach(card=>{const match=category==='All'||card.dataset.newsCategory===category;card.hidden=!match;if(match)shown++});let msg=document.getElementById('v18NoNews');if(!msg&&chip.closest('section')){msg=document.createElement('p');msg.id='v18NoNews';msg.className='v18-empty-news';document.getElementById('v18NewsList')?.append(msg)}if(msg){msg.hidden=shown!==0;msg.textContent='No demo announcements in this category.'}return}
 const anchor=event.target.closest('a[href^="#"]');if(anchor){const target=anchor.getAttribute('href');if(target&&target.startsWith('#')&&!target.startsWith('#/')){const el=document.querySelector(target);if(el){event.preventDefault();el.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'})}}}
});
function boot(){mount();const app=document.getElementById('app');if(app)new MutationObserver(()=>queueMicrotask(mount)).observe(app,{childList:true});if(!raf)raf=requestAnimationFrame(cycle);reduced.addEventListener?.('change',()=>{last=0;mount()})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
