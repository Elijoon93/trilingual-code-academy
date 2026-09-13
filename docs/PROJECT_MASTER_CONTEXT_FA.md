# PROJECT MASTER CONTEXT — TriLingual Code Academy

## هدف
Learning OS محلی/آفلاین/موبایل‌محور برای سه مسیر English، Deutsch و Coding، با تقدیم‌نامه «تقدیم به دختر عزیزم».

## معماری آموزشی قفل‌شده
- Explain → Example → Practice → Feedback → Quiz → Review
- Coding: Demo → Edit → Run → Fix → Challenge
- هسته مشترک: Today، Planner، Progress، SRS، Error Book، Notes، Diagnostics
- Coding progression: Digital/Windows → HTML → CSS → JavaScript → Projects → Python later

## تاریخچه نسخه‌ها
- v0.1 Foundation
- v0.2 Dedication / Themes
- v0.3 Diagnostics / Adaptive / Bridge / Projects
- v0.4 Content & Exercise Engine: 48 lessons (EN 18 / DE 18 / Coding 12), 8 exercise types
- v0.5 Guided Mastery / Unit Exam / Calendar / Rescue / Achievements
- v0.6 Deep Curriculum / Audio Lab / Skill Matrix
- v0.7 Manual Placement / Adaptive Intelligence
- v0.8 Mobile/PWA hardening
- v0.9 Acceptance / Quality Closure
- v0.9.1 Device Acceptance / Defect Closure
- v1.0 RC1 Release Gate
- v1.0 RC2 Final-device closure pack
- RC2-HF1 Track layout overflow hardening
- RC2-HF2 Persian localization + deep audit

## الزامات HF2
- `lang=fa`, `dir=rtl`
- تقویم جلالی واقعی و اعداد فارسی
- Local-day keys برای جلوگیری از UTC rollover
- بدون Date Picker میلادی فعال در UI
- Unit Exam حداقل 3 سؤال ترکیبی برای هر سطح فعال
- Backup Format 3 / Schema 13 با مهاجرت غیرمخرب
- Storage key باید ثابت بماند: `trilingual_code_academy_state_v1`
- اصلاحات HF1 در responsive layout باید حفظ شوند.

## اصول داده
- Local-first
- Migration غیرمخرب
- Snapshot قبل از Restore
- عدم استفاده از `localStorage.clear()` برای عملیات عادی

## PWA / انتشار
- GitHub Pages از ریشه مخزن
- Service Worker: `./sw.js`
- Manifest: `./manifest.webmanifest`
- Loader Base64 قدیمی حذف شده؛ سورس واقعی مستقیماً در `index.html` است.

## Release Gate
کنترل استاتیک می‌تواند PASS باشد، اما Final Stable فقط بعد از:
1. Windows runtime acceptance واقعی
2. Android/PWA install + offline acceptance واقعی
3. تست responsive انسانی روی دستگاه واقعی
4. بازبینی انسانی محتوای English/Deutsch/Coding
5. ممیزی accessibility نهایی
اعلام می‌شود.
