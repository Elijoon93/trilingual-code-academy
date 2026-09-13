# TriLingual Code Academy

**English · Deutsch · Coding**

نسخه جاری مخزن: **1.0.0 RC3 — Final Acceptance**.

این مخزن دیگر به Loader سه‌تکه Base64 وابسته نیست؛ `index.html` خودِ برنامه کامل است و Hotfix اجرای Code Lab نیز اعمال شده است.

## اجرای برنامه
- وب: GitHub Pages از ریشه `main`
- PWA: `manifest.webmanifest` + `sw.js`
- Final Acceptance: `final-acceptance.html`

## کنترل کیفیت خودکار
هر Push روی `main` workflow با نام **Final Acceptance** را اجرا می‌کند و این موارد را بررسی می‌کند:
- Static source audit
- JavaScript syntax
- Chromium runtime smoke
- English / Deutsch / Coding routes
- Planner
- Code Lab runtime
- LocalStorage persistence
- Backup round-trip در صورت وجود تابع تشخیصی

## وضعیت نسخه
- Version: `1.0.0-rc3-final-acceptance`
- Storage key: `trilingual_code_academy_state_v1`
- Backup Format: 3
- Schema: 13
- RTL / Persian / Jalali retained

## شرط Final Stable
`1.0.0 Stable` فقط پس از PASS شدن GitHub Actions، صفحه `final-acceptance.html`، Windows smoke و Android/PWA install+offline اعلام می‌شود.

## فایل‌های کلیدی
- `index.html` — سورس اجرایی کامل
- `final-acceptance.html` — تست مرورگر/PWA
- `.github/workflows/final-acceptance.yml` — CI نهایی
- `tests/` — ممیزی استاتیک، syntax و runtime browser smoke
- `FINAL_ACCEPTANCE_V1.md` — Gateهای ارتقا به Stable
- `RC3_FINALIZATION_AUDIT.txt` — گزارش بسته RC3
