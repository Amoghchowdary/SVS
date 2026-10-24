'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),out=path.join(root,'dist');
fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
for(const name of ['index.html','app.js','style.css','experience.css','precision.css','v17.css','v17.js','v18.css','v18.js','v19.css','v19.js','assets','client-media']){
 const source=path.join(root,name);if(fs.existsSync(source))fs.cpSync(source,path.join(out,name),{recursive:true});
}
fs.writeFileSync(path.join(out,'.nojekyll'),'');
console.log('SVS V21 static build created at dist/ with GitHub Pages metadata.');
