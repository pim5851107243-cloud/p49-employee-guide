# P49 DEESIGN · Employee Guide

ระบบคู่มือพนักงานเว็บแบบ static — สร้างด้วย HTML + CSS + Vanilla JS (ไม่มี build step)

---

## 1. โครงสร้างไฟล์

```
p49-guide/
├── index.html          หน้าหลัก (Dashboard)
├── about.html          เกี่ยวกับเรา (ประวัติ · Vision · Timeline · Leadership)
├── rules.html          กฎระเบียบบริษัท (5 หมวด · accordion)
├── org.html            โครงสร้างองค์กร (15 แผนก · org chart)
├── handbook.html       คู่มือพนักงาน (12 "ถ้าฉัน..." scenarios)
├── showcase.html       ผลงาน Masterpieces (5 โปรเจกต์)
├── faq.html            HR & FAQ (24 คำถาม · ช่องทางติดต่อ HR)
├── forms.html          แบบฟอร์ม & ดาวน์โหลด (18 ฟอร์ม)
├── news.html           ข่าวสารภายใน (pinned + feed)
├── README.md           คู่มือการใช้และการอัปเดต
└── assets/
    └── css/
        └── main.css    ไฟล์ CSS กลาง (ใช้ร่วมกันทุกหน้า)
```

## 2. การรันในเครื่อง (Preview)

ไม่ต้อง build · เปิดไฟล์ `index.html` ใน browser ได้เลย

หรือรัน local server เพื่อให้ link ทำงานถูกต้อง:

```bash
cd p49-guide
python3 -m http.server 8080
# แล้วเปิด http://localhost:8080 ใน browser
```

## 3. การอัปเดตเนื้อหา (Self-Update Guide)

### 3.1 แก้คำถาม FAQ ใหม่

เปิด `faq.html` ใน Cowork · หาบล็อก `<details>` · ก๊อปไปเพิ่มใหม่:

```html
<details>
  <summary>คำถามของคุณ?</summary>
  <div class="acc-body">คำตอบที่นี่</div>
</details>
```

### 3.2 เพิ่มข่าวใหม่

เปิด `news.html` · ในส่วน `<div class="grid-3">` · ก๊อป `<article class="news-card">` แล้วแก้เนื้อหา
- เปลี่ยนสีรูป: `news-img`, `news-img green`, `news-img gold`, `news-img dark`
- เปลี่ยนแท็ก: `Award`, `Policy`, `Project`, `People`, `L&D`, `Event`, `HR`, `Culture`

### 3.3 อัปเดตฟอร์ม

เปิด `forms.html` · หาหมวดที่ต้องการ · แก้ `<a href="#">` ให้ชี้ไปที่ไฟล์ PDF จริง

```html
<a href="assets/forms/leave-annual.pdf" class="form-download">↓ Download</a>
```

สร้างโฟลเดอร์ `assets/forms/` แล้ววางไฟล์ PDF ไว้ในนั้น

### 3.4 เพิ่ม/ลบโปรเจกต์ใน Showcase

เปิด `showcase.html` · ก๊อป `<section class="section">` ของโปรเจกต์ที่ใกล้เคียง
- เปลี่ยนสี `gallery-img`: ไม่มี class (beige) · `green` · `gold` · `dark` · `red`
- ใส่รูปจริงภายหลัง: แก้ `<div class="gallery-img"></div>` เป็น `<img src="assets/images/project1.jpg" alt="...">`

### 3.5 ปรับสีแบรนด์

เปิด `assets/css/main.css` · ด้านบนสุด (บรรทัด ~15-40) มี CSS variables:

```css
:root {
  --terracotta: #BF6B4F;      /* สี accent หลัก */
  --brand-green: #2C6F55;     /* เขียว P49 */
  --brand-gold:  #D4A73C;     /* ทอง P49 */
  --brand-red:   #D63B1A;     /* แดง P49 */
  --cream: #FAF7F2;           /* สีพื้นหลัง */
  --charcoal: #2C2A28;        /* สีตัวหนังสือ */
}
```

แก้ตรงนี้ที่เดียว · สีจะเปลี่ยนทั้งเว็บอัตโนมัติ

## 4. การ Deploy ขึ้น GitHub Pages

### 4.1 สร้าง Repository

1. เข้า github.com · คลิก **New repository**
2. ตั้งชื่อ: `p49-employee-guide` (หรืออื่น)
3. ตั้งเป็น **Public** (GitHub Pages ฟรีเฉพาะ public)
4. คลิก **Create repository**

### 4.2 อัปโหลดไฟล์

**วิธีที่ 1 (ง่ายที่สุด) ผ่าน Web UI:**
- คลิก **Add file → Upload files**
- ลากโฟลเดอร์ `p49-guide/` ทั้งหมดมาวาง
- Commit message: `Initial upload`
- คลิก **Commit changes**

**วิธีที่ 2 ผ่าน Git CLI:**
```bash
git clone https://github.com/<username>/p49-employee-guide.git
cd p49-employee-guide
# copy ไฟล์จาก p49-guide/ มาไว้ใน folder นี้
git add .
git commit -m "Initial upload"
git push
```

### 4.3 เปิด GitHub Pages

1. ในหน้า repo → **Settings** → **Pages** (เมนูซ้าย)
2. Source: เลือก **Deploy from a branch**
3. Branch: เลือก `main` · Folder: `/ (root)`
4. คลิก **Save**
5. รอ 1-2 นาที · จะได้ URL: `https://<username>.github.io/p49-employee-guide/`

### 4.4 Custom Domain (ถ้ามี)

- ซื้อโดเมน เช่น `guide.p49deesign.com`
- ใน GitHub Pages → ช่อง **Custom domain** ใส่โดเมน
- เข้า DNS provider เพิ่ม CNAME ชี้ไป `<username>.github.io`

## 5. การเพิ่ม Analytics

### 5.1 Google Analytics 4

สร้าง property ที่ analytics.google.com · copy GA4 snippet · วางก่อน `</head>` ของทุก HTML file:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 5.2 Microsoft Clarity (heatmap · session replay)

สร้าง project ที่ clarity.microsoft.com · copy snippet · วางก่อน `</head>`:

```html
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
</script>
```

**Tip**: สร้างไฟล์ `assets/js/analytics.html` แล้ว include ด้วย JS ก็ได้ ถ้าไม่อยากแก้ 9 ไฟล์

## 6. Checklist ก่อน Launch

- [ ] ลบ `<div class="preview-banner">MOCKUP · ...</div>` ออกจากทุกหน้า
- [ ] เปลี่ยนชื่อ/ตำแหน่ง `Khun A.`, `Khun B.` ให้เป็นชื่อจริง (หรือเก็บไว้ตามสะดวก)
- [ ] ใส่รูปจริงแทน placeholder `<div class="gallery-img">`
- [ ] อัปโหลดไฟล์ PDF จริงในโฟลเดอร์ `assets/forms/`
- [ ] ใส่เบอร์โทร / อีเมล HR จริงในหน้า `faq.html`
- [ ] เพิ่ม GA4 + Microsoft Clarity snippet
- [ ] ทดสอบลิงก์ทั้งหมด (navigate 9 หน้าได้ทั้งหมด)
- [ ] ทดสอบบนมือถือ (DevTools → responsive mode)
- [ ] เปิด GitHub Pages แล้วทดสอบ URL จริง

## 7. เทคโนโลยีที่ใช้

- **HTML5** (semantic · `<details>` สำหรับ accordion)
- **CSS3** (Grid · Flexbox · custom properties · ไม่มี framework)
- **Google Fonts**: Trirong, Inter, IBM Plex Sans Thai, Jost
- **Zero build step** · edit → save → deploy

## 8. โครงสร้าง Design System

ไฟล์ `main.css` มี components สำเร็จรูป:
- `.topbar` + `.topnav` (header)
- `.hero` / `.hero-small` (with `.hero-bg`, `.hero-bg.green/.gold/.dark`)
- `.section` + `.section-header` + `.section-eyebrow` + `.section-title`
- `.grid-2` / `.grid-3` / `.grid-4` (responsive grids)
- `.card` (generic card with `.card-number`, `.card-title`, `.card-desc`)
- `.gallery-item` + `.gallery-img` (with color variants)
- `.quote-feature` (big centered quote)
- `.accordion` (`<details>` styled)
- `.scenario` (handbook step cards)
- `.person` (team avatars)
- `.timeline` + `.timeline-item` + `.timeline-year`
- `.org-node`, `.org-level`, `.org-connector`
- `.form-card` + `.form-icon` + `.form-download`
- `.news-card` + `.news-pin`
- `.faq-search`, `.faq-cat-pills`, `.faq-pill`, `.faq-contact`
- `.footer` + `.footer-grid`

## 9. License / Use

INTERNAL USE · EMPLOYEE GUIDE · P49 DEESIGN & ASSOCIATES CO., LTD.

---

© 2026 P49 DEESIGN & ASSOCIATES CO., LTD.
