/* SVS V17: responsible decorative motion + working specialty finder. */
(()=>{'use strict';
const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
let slide=0,clock=0,observer=null,spotlightTimer=0;
const titles=['Care that puts people first.','Learning from experience.','A connected campus community.'];
function updateSlide(next){const photos=[...document.querySelectorAll('#v17HeroPhotos .v17-hero-img')];if(!photos.length)return;slide=(next+photos.length)%photos.length;photos.forEach((p,i)=>p.classList.toggle('is-current',i===slide));const label=document.getElementById('v17HeroPhotoTitle');if(label)label.textContent=titles[slide];const count=document.getElementById('v17HeroPhotoNum');if(count)count.textContent=String(slide+1).padStart(2,'0')+' / 03';const progress=document.getElementById('v17PhotoProgress');if(progress)progress.style.transform=`scaleX(${(slide+1)/photos.length})`}
function resetSlideClock(){clearInterval(clock);if(!motion.matches&&document.getElementById('v17HeroPhotos'))clock=setInterval(()=>{if(document.visibilityState==='visible')updateSlide(slide+1)},6500)}
function mount(){clearInterval(clock);clearInterval(spotlightTimer);observer?.disconnect();observer=null;const hero=document.getElementById('v17HeroPhotos');if(hero && hero.querySelector('.v17-hero-img')){slide=0;updateSlide(0);resetSlideClock();hero.addEventListener('pointerenter',()=>clearInterval(clock),{once:false});hero.addEventListener('pointerleave',resetSlideClock,{once:false});hero.addEventListener('focusin',()=>clearInterval(clock));hero.addEventListener('focusout',resetSlideClock)}
 const elements=[...document.querySelectorAll('[data-v17-reveal]')];const animate=!motion.matches&&'IntersectionObserver' in window;
 if(animate){document.body.classList.add('v17-motion-ready');observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('v17-visible');observer.unobserve(e.target)}})},{threshold:.05,rootMargin:'0px 0px -8% 0px'});elements.forEach(el=>observer.observe(el))}else{document.body.classList.remove('v17-motion-ready');elements.forEach(el=>el.classList.add('v17-visible'))}
 const cards=[...document.querySelectorAll('.v17-specialty-strip .v17-specialty')];let spot=0;cards.forEach(c=>c.classList.remove('is-spotlight'));if(cards.length&&!motion.matches){cards[0].classList.add('is-spotlight');spotlightTimer=setInterval(()=>{if(document.hidden)return;cards[spot%cards.length]?.classList.remove('is-spotlight');spot=(spot+1)%cards.length;cards[spot]?.classList.add('is-spotlight')},2900)}
}
document.addEventListener('click',e=>{const btn=e.target.closest('[data-v17-slide]');if(btn){updateSlide(slide+(btn.dataset.v17Slide==='next'?1:-1));resetSlideClock()}});
document.addEventListener('submit',e=>{if(e.target.id!=='v17FindDepartment')return;e.preventDefault();const data=new FormData(e.target);const term=String(data.get('specialty')||'').trim();location.hash='#/departments'+(term?'?search='+encodeURIComponent(term):'')});
function bootstrap(){mount();const app=document.getElementById('app');if(app)new MutationObserver(()=>queueMicrotask(mount)).observe(app,{childList:true});motion.addEventListener?.('change',mount)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bootstrap);else bootstrap();
})();
