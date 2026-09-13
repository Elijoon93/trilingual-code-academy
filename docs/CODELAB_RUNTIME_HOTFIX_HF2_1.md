# Code Lab Runtime Hotfix 1

## علت قطعی
در هفت محل از سورس، تگ بسته‌شدن `script` با دو بک‌اسلش ذخیره شده بود:

`<\\/script>`

در زمان اجرای JavaScript این مقدار فقط به `<\/script>` تبدیل می‌شد، نه `</script>`. در نتیجه `iframe.srcdoc` تگ Script را نمی‌بست و HTML کاربر داخل Script بلعیده می‌شد؛ به همین علت پیش‌نمایش سفید می‌ماند.

## اصلاح
همه هفت مورد به Escape صحیح یک‌مرحله‌ای تبدیل شدند. در متن سورس HTML هنوز `</script>` خام ایجاد نمی‌شود، اما در Runtime رشته صحیح `</script>` به iframe تحویل می‌شود.

## Gate
- JavaScript syntax: 13/13 PASS
- Broken double-escaped script closers: 0
- Storage Key: preserved
- Schema: preserved
- No destructive localStorage clear
- Final Stable: فقط بعد از تأیید دیداری اجرای Code Lab در مرورگر واقعی.
