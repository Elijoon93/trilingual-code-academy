# TriLingual Code Academy

**English · Deutsch · Coding**

## v1.0.0 Stable Web Release

نسخه جاری مخزن **1.0.0 Stable** است. سورس اجرایی مستقیم در `index.html` قرار دارد و Loader سه‌تکه Base64 حذف شده است. Hotfix اجرای Code Lab، تقویم جلالی، رابط RTL، Schema 13 و Backup Format 3 در نسخه پایدار حفظ شده‌اند.

## وضعیت Release
- GitHub Actions `Final Acceptance`: **PASS**
- Static source audit: **PASS**
- JavaScript syntax: **PASS**
- Chromium runtime smoke: **PASS**
- English / Deutsch / Coding routes: **PASS**
- Planner: **PASS**
- Code Lab runtime + console bridge: **PASS**
- LocalStorage persistence: **PASS**
- GitHub Pages deployment: **PASS**

تأیید فیزیکی Windows و Android/PWA همچنان به‌عنوان **Device Certification** جداگانه قابل ثبت است و هیچ PASS دستگاهی به‌صورت ساختگی ایجاد نشده است. این موضوع مانع انتشار پایدار وب نیست.

## اجرای برنامه
- Web/PWA: `https://elijoon93.github.io/trilingual-code-academy/`
- Release acceptance: `final-acceptance.html`

## فایل‌های کلیدی
- `index.html` — برنامه پایدار v1.0.0
- `source/TriLingual_Code_Academy_v1.0.0_Stable.html` — Snapshot سورس Stable
- `manifest.webmanifest` — PWA manifest
- `sw.js` — Service Worker Stable cache
- `.github/workflows/final-acceptance.yml` — CI Release Gate
- `tests/` — static / syntax / Chromium smoke
- `RELEASE.json` — metadata نسخه پایدار
- `RELEASE_NOTES_v1.0.0.md` — یادداشت انتشار

## داده کاربر
Storage key بدون تغییر باقی مانده است: `trilingual_code_academy_state_v1`. بنابراین ارتقا به v1.0.0 داده‌های قبلی کاربر را پاک نمی‌کند.
