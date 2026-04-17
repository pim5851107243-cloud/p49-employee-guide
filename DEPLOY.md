# Deploy Guide · P49 Employee Guide

เอกสารย่อสำหรับขึ้นเว็บให้เร็วที่สุด · ใช้เวลา ~10 นาที

---

## ขั้นที่ 1 · เตรียมไฟล์ก่อน launch (5 นาที)

เปิดไฟล์ `assets/js/site.js` · แก้ 3 จุด:

```javascript
window.P49_CONFIG = {
  showMockupBanner: false,   // ← เปลี่ยนจาก true เป็น false
  ga4Id: "G-XXXXXXXXXX",     // ← ใส่ GA4 Measurement ID (ได้จาก analytics.google.com)
  clarityId: "abc123xyz"     // ← ใส่ Clarity Project ID (ได้จาก clarity.microsoft.com)
};
```

**ไม่ต้องแตะไฟล์ HTML 9 ไฟล์** · แก้ `site.js` ไฟล์เดียวมีผลทั้งเว็บ

---

## ขั้นที่ 2 · อัปโหลดขึ้น GitHub (3 นาที)

### วิธี A · ผ่าน Web UI (ง่ายสุด สำหรับคนไม่ใช้ git)

1. เข้า github.com · Login
2. กด **+** มุมขวาบน → **New repository**
3. Repository name: `p49-employee-guide`
4. เลือก **Public**
5. กด **Create repository**
6. หน้าใหม่จะมีปุ่ม **uploading an existing file** · กด
7. ลากโฟลเดอร์ `p49-guide/` ทั้งโฟลเดอร์ (ทุกไฟล์ทุกโฟลเดอร์ย่อย) มาวาง
8. Commit message: `Initial release`
9. กด **Commit changes**

### วิธี B · ผ่าน Git CLI

```bash
cd p49-guide
git init
git add .
git commit -m "Initial release"
git branch -M main
git remote add origin https://github.com/<username>/p49-employee-guide.git
git push -u origin main
```

---

## ขั้นที่ 3 · เปิด GitHub Pages (2 นาที)

1. ในหน้า repo · กดแท็บ **Settings**
2. เมนูซ้าย → **Pages**
3. **Source**: `Deploy from a branch`
4. **Branch**: `main` · **Folder**: `/ (root)`
5. กด **Save**
6. รอ 1-2 นาที · GitHub จะ deploy ให้อัตโนมัติ
7. ด้านบนของหน้า Pages จะโชว์ URL สีเขียว: `https://<username>.github.io/p49-employee-guide/`

**พร้อมใช้งาน** — ส่ง URL นี้ให้พนักงานได้เลย

---

## ขั้นที่ 4 · Custom Domain (ถ้ามี · 15 นาที)

ถ้าต้องการโดเมนเฉพาะ เช่น `guide.p49deesign.com`:

1. ใน GitHub repo → Settings → Pages → **Custom domain** → ใส่ `guide.p49deesign.com` → Save
2. เข้า DNS provider (GoDaddy, Cloudflare, etc.) → เพิ่ม CNAME record:
   ```
   Name:   guide
   Value:  <username>.github.io
   TTL:    3600
   ```
3. รอ DNS propagate (5 นาที - 1 ชม.)
4. กลับไปที่ GitHub Pages settings → ติ๊ก **Enforce HTTPS**

---

## ขั้นที่ 5 · แก้ URL ใน sitemap.xml & robots.txt

สองไฟล์นี้ผมใส่ `example.com` ไว้เป็น placeholder · แก้เป็น URL จริง:

**sitemap.xml** — Find & Replace `https://example.com` → URL จริงของนิว

**robots.txt** — แก้ `Sitemap:` ให้ชี้ไปที่ `https://<url-จริง>/sitemap.xml`

Commit เข้า GitHub → Pages จะอัปเดตอัตโนมัติใน 1-2 นาที

---

## การอัปเดตเนื้อหาหลัง launch

**กรณีเร่ง** — เข้า GitHub.com → เปิดไฟล์ HTML ที่ต้องการแก้ → กดรูปดินสอ → แก้ → Commit · ขึ้นเว็บจริงใน ~1 นาที

**กรณี batch หลายไฟล์** — clone repo → แก้ใน Cowork → `git push` → เสร็จ

**กรณีใช้ Cowork อย่างเดียว** — แก้ใน Cowork → อัปโหลดไฟล์ใหม่ทับของเดิมใน GitHub Web UI

---

## Checklist ก่อน launch จริง

- [ ] `site.js` · ตั้ง `showMockupBanner: false`
- [ ] `site.js` · ใส่ GA4 ID
- [ ] `site.js` · ใส่ Clarity ID
- [ ] `sitemap.xml` · เปลี่ยน example.com → URL จริง
- [ ] `robots.txt` · เปลี่ยน example.com → URL จริง
- [ ] เปิดเว็บบนมือถือ → ดูว่า layout ถูกต้อง
- [ ] ลอง navigate ครบ 9 หน้า + ปุ่ม footer
- [ ] ทดสอบพิมพ์ URL ผิด → ไปโผล่หน้า 404 (GitHub Pages serve 404.html อัตโนมัติ)
- [ ] ส่ง URL ให้ทีมภายในอย่างน้อย 3 คน ลองใช้ก่อน
- [ ] ประกาศใน company-wide channel

---

**Deploy เร็วที่สุด**: ขั้น 1-3 ใช้เวลา ~10 นาที · พร้อมใช้งานทันที
