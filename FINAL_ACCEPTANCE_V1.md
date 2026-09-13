# FINAL ACCEPTANCE — v1.0 Stable

## وضعیت این بسته
این مخزن همه Hotfixهای شناخته‌شده تا Code Lab Hotfix 1 را به همراه ممیزی خودکار و GitHub Actions دارد.

## مسیر نهایی‌سازی
1. هر Push روی `main` workflow با نام `Final Acceptance` را اجرا می‌کند.
2. Static audit باید PASS شود.
3. JavaScript syntax audit باید PASS شود.
4. Chromium runtime smoke باید PASS شود؛ این تست English / Deutsch / Coding / Planner / Code Lab / LocalStorage و Backup round-trip را بررسی می‌کند.
5. صفحه `final-acceptance.html` روی GitHub Pages نباید FAIL نشان دهد.
6. Windows smoke واقعی و Android/PWA install + standalone + offline باید PASS شوند.

## شرط اعلام Final Stable
- GitHub Actions: PASS
- `final-acceptance.html`: بدون FAIL
- Windows smoke: PASS
- Android install + standalone + offline: PASS

تا قبل از عبور این چهار Gate، نسخه `1.0.0-rc3-final-acceptance` است. بعد از آن می‌توان Release را به `1.0.0 Stable` ارتقا داد.
