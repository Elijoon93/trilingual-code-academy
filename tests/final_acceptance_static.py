from pathlib import Path
from bs4 import BeautifulSoup
import json,re,hashlib,sys
root=Path(__file__).resolve().parents[1]
html=(root/'index.html').read_text(encoding='utf-8')
soup=BeautifulSoup(html,'html.parser')
checks=[]
def chk(n,o,d=''):
    checks.append((n,bool(o),d))
    print(('PASS' if o else 'FAIL'),n,d)
chk('doctype',html.lstrip().lower().startswith('<!doctype html'))
chk('lang-fa',soup.html and str(soup.html.get('lang','')).startswith('fa'))
chk('dir-rtl',soup.html and soup.html.get('dir')=='rtl')
ids=[x.get('id') for x in soup.find_all(attrs={'id':True})]
dups=sorted({x for x in ids if ids.count(x)>1})
chk('duplicate-static-ids',not dups,str(dups[:10]))
chk('storage-key','trilingual_code_academy_state_v1' in html)
chk('schema-13',('schema:13' in html.replace(' ','').lower()) or ('schema\":13' in html.replace(' ','')))
chk('jalali',('persian' in html.lower() and 'calendar' in html.lower()) or 'جلالی' in html)
chk('no-date-input',len(soup.find_all('input',attrs={'type':lambda v: v and str(v).lower()=='date'}))==0)
chk('no-localstorage-clear',re.search(r'localStorage\.clear\s*\(',html,re.I) is None)
chk('codelab-function','function runCode()' in html and 'function openCodeLab' in html)
chk('no-broken-double-backslash-script-close','<\\\\/script>' not in html)
m=json.loads((root/'manifest.webmanifest').read_text(encoding='utf-8'))
chk('manifest-fa',str(m.get('lang','')).startswith('fa'))
chk('manifest-rtl',m.get('dir')=='rtl')
chk('manifest-icons',len(m.get('icons',[]))>=2)
chk('service-worker',(root/'sw.js').exists())
chk('final-acceptance-page',(root/'final-acceptance.html').exists())
print('INDEX_SHA256',hashlib.sha256((root/'index.html').read_bytes()).hexdigest())
f=[x for x in checks if not x[1]]
print(f'PASS {len(checks)-len(f)}/{len(checks)}')
sys.exit(1 if f else 0)
