import { chromium } from 'playwright';
const base=process.env.TCA_BASE_URL||'http://127.0.0.1:4173/';
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1280,height:900}});
const pageErrors=[];page.on('pageerror',e=>pageErrors.push(String(e)));
await page.goto(base,{waitUntil:'networkidle'});
await page.waitForFunction(()=>typeof window.showPage==='function'&&typeof window.openTrack==='function'&&typeof window.openCodeLab==='function'&&typeof window.runCode==='function');
const core=await page.evaluate(()=>({
  storageKey: typeof KEY!=='undefined'?KEY:null,
  schema: typeof db!=='undefined'?db.schema:null,
  lang:document.documentElement.lang,
  dir:document.documentElement.dir
}));
if(core.storageKey!=='trilingual_code_academy_state_v1') throw new Error('storage key mismatch: '+core.storageKey);
if(Number(core.schema)<13) throw new Error('schema < 13: '+core.schema);
if(!String(core.lang).startsWith('fa')||core.dir!=='rtl') throw new Error('fa/rtl root mismatch');
for(const t of ['en','de','code']){
  await page.evaluate(t=>openTrack(t),t);
  const count=await page.locator('#trackLessons .lesson').count();
  if(count<1) throw new Error('track '+t+' has no rendered lessons');
}
await page.evaluate(()=>showPage('plan'));
if(!(await page.locator('#plan.page.active').count())) throw new Error('planner route failed');
await page.evaluate(()=>openCodeLab('code-01'));
await page.locator('#codeEditor').fill('<h1>Acceptance</h1><script>console.log("TCA_BROWSER_OK")<\/script>');
await page.evaluate(()=>runCode());
await page.waitForFunction(()=>document.getElementById('labConsole')?.textContent.includes('TCA_BROWSER_OK'),null,{timeout:5000});
const rt=await page.evaluate(()=>typeof syntheticRoundTripV08==='function'?syntheticRoundTripV08():null);
if(rt && rt.pass!==true) throw new Error('backup roundtrip failed');
const before=await page.evaluate(()=>{localStorage.setItem('__tca_ci_persist','yes');return localStorage.getItem('__tca_ci_persist')});
if(before!=='yes') throw new Error('localStorage write failed');
await page.reload({waitUntil:'networkidle'});
const after=await page.evaluate(()=>localStorage.getItem('__tca_ci_persist'));
if(after!=='yes') throw new Error('localStorage persistence failed');
await page.evaluate(()=>localStorage.removeItem('__tca_ci_persist'));
if(pageErrors.length) throw new Error('page errors: '+pageErrors.join(' | '));
console.log('BROWSER_SMOKE_PASS',core,rt?{backupRoundTrip:rt.pass}:{});
await browser.close();
