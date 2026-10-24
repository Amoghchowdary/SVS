/* SVS Experience V21 — verified institutional-media placement and brochure-based editorial panels.
   Gallery images: sourced from the user's SVS folders. No personal student records included. */
(()=>{'use strict';
const im=(file)=>`assets/official/${file}`;
const media={
 college:im('svs-medical-college.webp'), lab:im('svs-microscope-lab.webp'), biochemistry:im('svs-biochemistry-lab.webp'),
 nursingPractical:im('svs-nursing-practical.webp'), nursingClass:im('svs-nursing-classroom.webp'), nursingLife:im('svs-nursing-campus-life.webp'),
 hospital:im('svs-hospital-building.webp'), care:im('svs-hospital-clinicians.webp'), outreach:im('svs-hospital-community.webp'),
 hospitalCampus:im('svs-hospital-campus.webp'), nursingBuilding:im('svs-nursing-building.webp')
};
function mediaTile(src,label,copy,wide=false){return `<article class="v19-media-tile ${wide?'is-wide':''}" data-v19-reveal><div class="v19-media-photo"><img src="${src}" alt="${label}" loading="lazy" decoding="async"></div><div class="v19-media-text"><span>${label}</span><p>${copy}</p></div></article>`}
function stats(){return `<section class="v19-fact-band" aria-label="About the institution"><div class="shell v19-fact-grid">
 <div><strong>1997</strong><span>Sri Venkata Sai Educational Society established</span></div>
 <div><strong>1999</strong><span>SVS Medical College founded</span></div>
 <div><strong>MBBS</strong><span>Undergraduate medical education</span></div>
 <div><strong>MD / MS</strong><span>Postgraduate medical education</span></div>
 </div><p class="v19-source-note shell">Institutional milestones and programmes are described in the SVS College Information Brochure, Version 1.2. Current intake and regulatory details should be confirmed before publication.</p></section>`}
function homeGallery(){return `<section class="v19-story-section v19-light"><div class="shell"><div class="v19-heading" data-v19-reveal><span>REAL PEOPLE · REAL PLACES</span><h2>A closer look at <em>SVS.</em></h2><p>Explore selected photographs from the college, hospital and nursing education environments supplied by SVS.</p></div><div class="v19-media-grid">
 ${mediaTile(media.college,'SVS Medical College','The college entrance and campus at Yenugonda, Mahabubnagar.',true)}
 ${mediaTile(media.care,'Clinical learning','Medical teams supporting patient-centred hospital care and teaching.')}
 ${mediaTile(media.lab,'Laboratory learning','Students engaged in microscope-based teaching and practice.')}
 ${mediaTile(media.nursingPractical,'Nursing clinical practice','An instructor demonstrates practical care to nursing students.')}
 </div></div></section>`}
function hospitalFacts(){return `<section class="v19-story-section v19-light"><div class="shell"><div class="v19-heading" data-v19-reveal><span>SVS MEDICAL COLLEGE & TEACHING HOSPITAL</span><h2>Clinical experience. <em>Human care.</em></h2><p>Hospital infrastructure and training facilities described in the supplied institutional brochure.</p></div><div class="v19-feature-grid">
 <div class="v19-feature-photo"><img src="${media.hospital}" alt="SVS Hospital main entrance" loading="lazy"><span>SVS HOSPITAL / MAHABUBNAGAR</span></div>
 <div class="v19-feature-list">
 <article><span>01 / EMERGENCY</span><h3>Emergency and critical care</h3><p>The brochure describes a 24-hour emergency/casualty wing and dedicated intensive care facilities.</p></article>
 <article><span>02 / DIAGNOSTICS</span><h3>Modern medical diagnostics</h3><p>Listed facilities include MRI and CT imaging, ultrasound, cardiac diagnostics, laboratory services and blood bank support.</p></article>
 <article><span>03 / TRAINING</span><h3>Bedside teaching and clinical practice</h3><p>The teaching hospital supports supervised clinical learning, community-based care and interdisciplinary medical education.</p></article>
 </div></div><div class="v19-media-grid v19-three">
 ${mediaTile(media.hospitalCampus,'Hospital campus','SVS clinical teaching environment and campus life.')}
 ${mediaTile(media.outreach,'Community-facing care','Healthcare professionals and people in a clinical consultation setting.')}
 ${mediaTile(media.care,'Clinical teams','Medical practitioners supporting supervised clinical activity.')}
 </div><p class="v19-source-note">Facilities are described in the supplied brochure; operational status, capacities, certifications and availability require institutional verification.</p></div></section>`}
function academicFacts(){return `<section class="v19-story-section v19-light"><div class="shell"><div class="v19-heading" data-v19-reveal><span>MEDICAL EDUCATION / CAMPUS</span><h2>Learning in <em>practice.</em></h2><p>The brochure describes competency-based medical education, laboratory learning, a medical library, and practical simulation facilities.</p></div><div class="v19-media-grid">
 ${mediaTile(media.lab,'Microscope teaching','Medical students participate in hands-on histology and scientific learning.',true)}
 ${mediaTile(media.biochemistry,'Teaching laboratory','Bench-top equipment and practical scientific learning resources.')}
 ${mediaTile(media.nursingPractical,'Nursing practicals','Instructor-led hands-on practical training in a teaching setting.')}
 ${mediaTile(media.nursingClass,'Classroom learning','Nursing students participate in classroom instruction.')}
 ${mediaTile(media.nursingLife,'Campus community','Nursing students moving through the institution’s campus.')}
 </div><div class="v19-info-cards"><article><small>COMPETENCY-BASED LEARNING</small><h3>MBBS and postgraduate education</h3><p>SVS describes an MBBS programme and MD/MS postgraduate programmes across clinical, pre-clinical and para-clinical disciplines.</p></article><article><small>FACILITIES</small><h3>Skills, simulation and a medical library</h3><p>The brochure describes clinical skills training, practical laboratories, lecture theatres and a central library supporting independent study.</p></article><article><small>COMMUNITY</small><h3>Learning beyond the classroom</h3><p>Clinical postings, community-oriented learning and residential campus facilities connect medical education to daily practice.</p></article></div><p class="v19-source-note">Nursing photographs were supplied in the Nursing-Web folder; specific nursing programmes and admissions must be verified separately.</p></div></section>`}
function aboutFacts(){return `<section class="v19-story-section v19-light"><div class="shell"><div class="v19-heading" data-v19-reveal><span>OUR ROOTS</span><h2>Built to serve. <em>Made to teach.</em></h2><p>Sri Venkata Sai Educational Society was established in 1997 with a stated mission to advance medical education and accessible healthcare in Mahabubnagar. SVS Medical College was established in 1999.</p></div><div class="v19-feature-grid">
 <div class="v19-feature-photo"><img src="${media.college}" alt="SVS Medical College main entrance" loading="lazy"><span>SVS MEDICAL COLLEGE / EST. 1999</span></div>
 <div class="v19-feature-list"><article><span>MISSION</span><h3>Education with integrity</h3><p>Academic rigor, professional ethics, and continuous learning are recurrent themes in messages from the society leadership.</p></article><article><span>CLINICAL PURPOSE</span><h3>Learning connected to patient care</h3><p>Medical college teaching and hospital practice are united in the institution’s stated educational philosophy.</p></article><article><span>COMMUNITY</span><h3>Serving Mahabubnagar</h3><p>The educational society describes access to healthcare and educational opportunity as central to its mission.</p></article></div>
 </div><div class="v19-heading v19-leadership"><span>LEADERSHIP RECORDED IN THE BROCHURE</span><h2>People behind <em>SVS.</em></h2></div><div class="v19-info-cards v19-four">
 <article><small>SVS EDUCATIONAL SOCIETY</small><h3>Prof. A. Kanakaraj</h3><p>Chairman, SVS Educational Society</p></article>
 <article><small>SVS EDUCATIONAL SOCIETY</small><h3>Dr. K. Krishna Reddy</h3><p>Secretary, SVS Educational Society</p></article>
 <article><small>GROUP OF INSTITUTIONS</small><h3>Dr. K. J. Reddy</h3><p>Managing Director, SVS Group of Institutions</p></article>
 <article><small>SVS MEDICAL COLLEGE</small><h3>Dr. Krishna Prakash Joshi</h3><p>Principal, SVS Medical College & Hospital</p></article>
 </div><p class="v19-source-note">Leadership names and designations reflect the supplied brochure and must be checked for current accuracy.</p></div></section>`}
function welfare(){return `<section class="v19-story-section v19-light"><div class="shell"><div class="v19-heading"><span>STUDENTS & FAMILIES</span><h2>Supported to <em>succeed.</em></h2><p>The institutional brochure outlines student support, mentorship and campus welfare structures.</p></div><div class="v19-info-cards"><article><small>GUIDANCE</small><h3>Mentor–mentee framework</h3><p>Academic and personal guidance are described as an integral part of the student journey.</p></article><article><small>WELL-BEING</small><h3>Student welfare and mental health</h3><p>The brochure describes student welfare and wellness committees and accessible support systems.</p></article><article><small>SAFETY</small><h3>Anti-ragging and grievance support</h3><p>Institutional committees provide formal routes for reporting and addressing concerns.</p></article></div><p class="v19-source-note">For updated committee contacts and policies, please consult SVS directly. This website does not provide a secure student portal.</p></div></section>`}
function newsGallery(){return `<section class="v19-story-section v19-light"><div class="shell"><div class="v19-heading"><span>VISUAL STORIES FROM SVS</span><h2>Life beyond <em>headlines.</em></h2><p>These are authentic images supplied by SVS, not dated news reports or fictional events.</p></div><div class="v19-media-grid v19-three">
 ${mediaTile(media.nursingLife,'On campus','Students moving through the college campus.')}
 ${mediaTile(media.lab,'Science in action','Laboratory teaching for medical learners.')}
 ${mediaTile(media.hospital,'Hospital life','A view of the hospital entrance at SVS.')}
 </div></div></section>`}
function enrich(){
 const app=document.querySelector('#app .route-enter');if(!app||app.dataset.v19Injected)return;
 app.dataset.v19Injected='yes'; const route=document.body.dataset.route;
 const parse=html=>{const t=document.createElement('template');t.innerHTML=html.trim();return t.content};
 const insertBefore=(sel,html)=>{const el=app.querySelector(sel);if(el)el.before(parse(html));else app.append(parse(html))};
 if(route==='home'){
  insertBefore('.v17-specialties-section',stats());
  insertBefore('.v17-end-cta',homeGallery());
 }else if(route==='hospital'){
  insertBefore('.v18-bottom-cta',hospitalFacts());
 }else if(route==='academics'){
  insertBefore('.v18-bottom-cta',academicFacts());
  insertBefore('.v18-bottom-cta',welfare());
 }else if(route==='about'){
  insertBefore('.v18-bottom-cta',aboutFacts());
 }else if(route==='news'){
  insertBefore('.v18-news-feature',newsGallery());
 }
 initVideo();
}
let heroObserver;
function initVideo(){
 heroObserver?.disconnect();
 const video=document.getElementById('v19HeroVideo');if(!video)return;
 const prefersReduce=window.matchMedia('(prefers-reduced-motion: reduce)');
 const sync=visible=>{if(prefersReduce.matches||document.hidden||!visible){video.pause()}else video.play().catch(()=>{})};
 heroObserver=new IntersectionObserver(entries=>sync(entries[0].isIntersecting),{threshold:.08});
 heroObserver.observe(video);
 // No on-page playback button: the campus film loops silently in the hero.
}

function boot(){const app=document.getElementById('app');if(!app)return;const obs=new MutationObserver(enrich);obs.observe(app,{childList:true,subtree:false});enrich()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
