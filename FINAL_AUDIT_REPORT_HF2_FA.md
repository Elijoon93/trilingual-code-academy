# گزارش ممیزی نهایی RC2-HF2

**وضعیت:** کنترل‌های داخلی استاتیک PASS؛ نسخه هنوز Final Stable نیست.

- کنترل‌های PASS: 41 / 41

## اصلاحات کلیدی
- تقویم ماهانه جلالی واقعی و اعداد فارسی.
- انتخابگر جلالی Planner و تاریخ هدف Setup؛ بدون Date Picker میلادی فعال.
- تاریخ جلالی Notes / Contract / Rescue.
- Local-date keys به‌جای UTC برای روز مطالعه.
- فارسی‌سازی گسترده UI و تم‌ها.
- Unit Exam حداقل ۳ سؤال ترکیبی برای هر سطح فعال.
- Backup Format 3 / Schema 13 / HF2 و Migration مستقیم نسخه قدیمی.
- حفظ Storage Key و Snapshot ایمنی قبل از Restore.
- حفظ اصلاح Layout HF1.

## کنترل‌های داخلی
- PASS — `html-parse`: BeautifulSoup parsed document
- PASS — `duplicate-static-ids`: duplicates=[]
- PASS — `html-lang-fa`: lang=fa
- PASS — `html-dir-rtl`: dir=rtl
- PASS — `viewport-fit-cover`: width=device-width,initial-scale=1,viewport-fit=cover
- PASS — `visible-gregorian-date-inputs`: count=0
- PASS — `javascript-syntax`: 13/13 scripts PASS
- PASS — `service-worker-syntax`
- PASS — `manifest-json`: valid JSON
- PASS — `manifest-fa-rtl`: fa-IR/rtl
- PASS — `manifest-icons`: icons=2
- PASS — `app-version-hf2`: 1.0.0-rc2-hf2-fa-localization-audit
- PASS — `storage-key-preserved`: stable storage key
- PASS — `schema-13`: non-destructive schema bump
- PASS — `jalali-intl`: Intl Persian calendar present
- PASS — `jalali-calendar-render`: Jalali month/day renderer present
- PASS — `jalali-planner-picker`: planner Jalali picker
- PASS — `jalali-target-picker`: setup target Jalali picker
- PASS — `local-day-keys`: local day overrides
- PASS — `persian-digit-helper`: Persian digit formatter
- PASS — `theme-names-fa`: theme display names Persian
- PASS — `grid-minmax-fix`: HF1 layout hardening retained
- PASS — `roadmap-controlled-overflow`: level rails controlled
- PASS — `lesson-counts`: English 18 / Deutsch 18 / Coding 12
- PASS — `unit-exam-depth-engine`: mixed bank minimum 3 questions gate
- PASS — `lesson-placeholder-gate`: active lesson placeholder audit present
- PASS — `deep-audit-gate`: HF2 blocks release status on internal audit
- PASS — `ui-localization-mapping`
- PASS — `obsolete-dev-card-cleanup`
- PASS — `about-current-hf2`
- PASS — `static-buttons-named`: unnamed=0
- PASS — `focus-visible`
- PASS — `high-contrast-theme`
- PASS — `font-scale`
- PASS — `no-destructive-localstorage-clear`
- PASS — `backup-validation`
- PASS — `manual-placement`
- PASS — `service-worker-core`
- PASS — `package-docs`

## مواردی که هنوز برای Final باید واقعی انجام شوند
- PENDING — `physical-windows-runtime`: must be executed on real Windows browser/PWA
- PENDING — `physical-android-pwa`: must be installed/tested on real Android
- PENDING — `offline-service-worker-device`: requires secure origin/device runtime
- PENDING — `microphone-device-matrix`: browser/device permission dependent
- PENDING — `human-english-content-review`: human linguistic review required
- PENDING — `human-german-content-review`: human linguistic review required
- PENDING — `human-coding-content-review`: human instructional review required
- PENDING — `full-wcag-automated-audit`: axe/WCAG tool run not available in this environment
