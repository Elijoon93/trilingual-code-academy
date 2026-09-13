# TriLingual Code Academy

**English · Deutsch · Coding**

نسخه مخزن دستی بر پایه آخرین سورس واقعی `RC2-HF2` پروژه. این مخزن دیگر برای اجرای برنامه به Loader سه‌تکه Base64 وابسته نیست؛ `index.html` خودِ برنامه کامل است.

## اجرای برنامه
- وب: GitHub Pages از ریشه مخزن
- محلی: `index.html` مستقیماً باز می‌شود؛ برای PWA/Service Worker از یک HTTP server محلی یا GitHub Pages استفاده شود.

## فایل‌های اصلی
- `index.html` — سورس اجرایی کامل RC2-HF2
- `manifest.webmanifest` — PWA manifest
- `sw.js` — Service Worker
- `offline.html` — fallback آفلاین
- `icons/` — آیکون‌های PWA
- `source/` — Snapshot محافظت‌شده سورس اصلی RC2-HF2
- `docs/FINAL_AUDIT_REPORT_HF2_FA.md` — ممیزی قبلی HF2
- `docs/PROJECT_MASTER_CONTEXT_FA.md` — نقشه و مفروضات مادر پروژه
- `REPOSITORY_AUDIT_REPORT.txt` — ممیزی بسته فعلی

## وضعیت نسخه
- Version marker: `1.0.0-rc2-hf2-fa-localization-audit`
- Storage key پایدار: `trilingual_code_academy_state_v1`
- Backup Format 3 / Schema 13
- تقویم جلالی و RTL حفظ شده است.
- اعلام **Final Stable** منوط به تست واقعی Windows/Android/PWA و بازبینی انسانی محتوا است.

## GitHub Desktop
راهنمای خیلی کوتاه داخل `docs/GITHUB_DESKTOP_UPLOAD_FA.txt` قرار دارد.
