const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname,'..');
const get = file => fs.readFileSync(path.join(root,file),'utf8');
const app = get('app.js'), css = get('v19.css'), workflow = get('.github/workflows/deploy-pages.yml'), pkg = JSON.parse(get('package.json'));
let passed = 0;
function test(name,fn){try{fn();passed++;console.log('PASS',name)}catch(err){console.error('FAIL',name,err.message);process.exitCode=1}}
test('V21 release identifier',()=>assert.equal(pkg.version,'21.0.0'));
test('Campus film remains full hero background',()=>assert.match(app,/class="v19-home-hero-video" muted autoplay loop playsinline/));
test('Video file exists',()=>assert.ok(fs.statSync(path.join(root,'assets/official/svs-campus-aerial.mp4')).size>1024));
test('Video caption card removed',()=>assert.doesNotMatch(app,/v19-home-caption-card|Where clinical learning takes flight/));
test('Video pause button removed',()=>assert.doesNotMatch(app,/v19VideoToggle|Pause video/));
test('Video controller no obsolete pause button',()=>assert.doesNotMatch(get('v19.js'),/v19VideoToggle/));
test('Desktop responsive rule',()=>assert.match(css,/@media\(min-width:1400px\)/));
test('Tablet responsive rule',()=>assert.match(css,/@media\(min-width:700px\) and \(max-width:1100px\)/));
test('Mobile responsive rule',()=>assert.match(css,/@media\(max-width:699px\)/));
test('Department finder retained',()=>assert.match(app,/id="v17FindDepartment"/));
test('Pages workflow runs on main',()=>assert.match(workflow,/branches: \[main\]/));
test('Pages workflow uploads dist',()=>assert.match(workflow,/path: \.\/dist/));
test('Pages workflow deploys artifact',()=>assert.match(workflow,/actions\/deploy-pages@v4/));
test('Pages deployment permissions',()=>assert.match(workflow,/pages: write[\s\S]*id-token: write/));
test('Safe Windows first push helper exists',()=>assert.ok(fs.existsSync(path.join(root,'PUSH_V21_GITHUB.ps1'))));
test('No Git metadata in deployment output',()=>assert.ok(!fs.existsSync(path.join(root,'dist','.git'))));
console.log(`${passed} V21 release checks passed`);if(process.exitCode)process.exit(process.exitCode);

