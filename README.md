# Google Sheets URL and Meta Data Extractor

This project contains two Google Apps Scripts to fetch the title and description of articles from URLs provided in Google Sheets.

## Scripts

1. **fetchTitles.gs**
   - Extracts titles from URLs in Google Sheets.
   - Usage:
     - Add URLs in column A.
     - Run the `fetchTitles` function.
     - Titles will be populated in column B.

2. **fetchDescriptions.gs**
   - Extracts descriptions from URLs in Google Sheets.
   - Usage:
     - Add URLs in column A.
     - Run the `fetchDescriptions` function.
     - Descriptions will be populated in column B.

## How to Use

1. Open your Google Sheets document.
2. Go to `Extensions > Apps Script`.
3. Create a new project.
4. Copy and paste the desired script (`fetchTitles.gs` or `fetchDescriptions.gs`) into the script editor.
5. Save the script.
6. Go back to your Google Sheets document.
7. Go to `Extensions > Macros > Import` and import the function (`fetchTitles` or `fetchDescriptions`).
8. Run the macro from `Extensions > Macros > fetchTitles` or `fetchDescriptions`.

---

# استخراج عناوین و توضیحات از لینک‌های مقالات در Google Sheets

این پروژه شامل دو اسکریپت Google Apps برای استخراج عنوان و توضیحات مقالات از URLهای ارائه شده در Google Sheets می‌باشد.

## اسکریپت‌ها

1. **fetchTitles.gs**
   - عناوین را از URLهای موجود در Google Sheets استخراج می‌کند.
   - نحوه استفاده:
     - URLها را در ستون A وارد کنید.
     - تابع `fetchTitles` را اجرا کنید.
     - عناوین در ستون B نمایش داده خواهند شد.

2. **fetchDescriptions.gs**
   - توضیحات را از URLهای موجود در Google Sheets استخراج می‌کند.
   - نحوه استفاده:
     - URLها را در ستون A وارد کنید.
     - تابع `fetchDescriptions` را اجرا کنید.
     - توضیحات در ستون B نمایش داده خواهند شد.

## نحوه استفاده

1. سند Google Sheets خود را باز کنید.
2. به مسیر `Extensions > Apps Script` بروید.
3. یک پروژه جدید ایجاد کنید.
4. اسکریپت مورد نظر (`fetchTitles.gs` یا `fetchDescriptions.gs`) را کپی کرده و در ویرایشگر اسکریپت جایگذاری کنید.
5. اسکریپت را ذخیره کنید.
6. به سند Google Sheets خود بازگردید.
7. به مسیر `Extensions > Macros > Import` بروید و تابع (`fetchTitles` یا `fetchDescriptions`) را وارد کنید.
8. ماکرو را از مسیر `Extensions > Macros > fetchTitles` یا `fetchDescriptions` اجرا کنید.
