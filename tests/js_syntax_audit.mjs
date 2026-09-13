import fs from 'node:fs';
import vm from 'node:vm';
const html=fs.readFileSync('index.html','utf8');
const rx=/<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
let m,n=0,fail=0;
while((m=rx.exec(html))){
  const attrs=m[1]||'';
  if(/\bsrc\s*=/.test(attrs)||/application\/(ld\+json|json)/i.test(attrs)) continue;
  n++;
  try{new vm.Script(m[2],{filename:`inline-${n}.js`});}
  catch(e){fail++;console.error(`FAIL inline-${n}:`,e.message);}
}
if(n===0){console.error('FAIL no inline scripts');process.exit(1);}
console.log(`Inline JS syntax: ${n-fail}/${n} PASS`);
if(fail)process.exit(1);
