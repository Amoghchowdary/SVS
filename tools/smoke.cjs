'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const code=fs.readFileSync(path.resolve(__dirname,'../app.js'),'utf8');
const storage=new Map(),events={},wevents={};const classList={add(){},remove(){},toggle(){}};
const elements={app:{innerHTML:''},currentYear:{textContent:''},menuButton:{addEventListener(){},setAttribute(){}},nav:{classList},toast:{textContent:'',classList},departmentResults:{innerHTML:''}};
const doc={body:{classList,dataset:{}},getElementById(id){return elements[id]||(elements[id]={innerHTML:'',textContent:'',style:{},classList,setAttribute(){}})},querySelectorAll(){return []},querySelector(s){if(s==='.footer')return {style:{}};return null},addEventListener(n,fn){events[n]=fn}};
const window={addEventListener(n,fn){wevents[n]=fn},scrollTo(){}};const location={hash:'#/home'};
vm.runInNewContext(code,{document:doc,window,location,localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},setTimeout,clearTimeout,Date,Math,console,Blob,URL,URLSearchParams,confirm:()=>true},{timeout:3000});
let passed=0;for(const route of ['home','hospital','academics','departments','about','news','contact','portal']){location.hash='#/'+route;wevents.hashchange();assert(elements.app.innerHTML.includes('<section'),`Missing ${route} content`);passed++;console.log('PASS',route)}
location.hash='#/home';wevents.hashchange();for(const selector of ['v19-home-hero','v19HeroVideo','v18-marquee-track','v17FindDepartment','v17-care-section','v17-editorial-grid']){assert(elements.app.innerHTML.includes(selector),`Missing homepage ${selector}`);passed++;console.log('PASS',selector)}
location.hash='#/departments';wevents.hashchange();assert.ok((elements.app.innerHTML.match(/class="specialty-svg"/g)||[]).length>=15);passed++;console.log('PASS 15 department icons');
location.hash='#/departments?search=cardio';wevents.hashchange();const resultsHTML=elements.app.innerHTML.split('id="departmentResults"')[1].split('class="image-credit"')[0];assert(resultsHTML.includes('Cardiology'));assert(!resultsHTML.includes('Ophthalmology'));passed++;console.log('PASS department search via URL');
location.hash='#/portal';wevents.hashchange();assert(elements.app.innerHTML.includes('not an actual staff login'));passed++;console.log('PASS staff demo warning');
console.log(`${passed} V21 route/feature smoke checks passed.`);
