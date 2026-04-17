/* ============================================================
   P49 Employee Guide · Site Config & Loader
   ------------------------------------------------------------
   แก้ไฟล์นี้เพื่อเปลี่ยน config ทั้งเว็บ · ไม่ต้องแก้ทุกหน้า
   ============================================================ */

window.P49_CONFIG = {
  // 1) โหมด Mockup Banner (แถบ "MOCKUP · PAGE" มุมขวาล่าง)
  //    - true  = โชว์ (ใช้ระหว่าง review)
  //    - false = ซ่อน (ตอน launch ให้ตั้งเป็น false)
  showMockupBanner: true,

  // 2) Google Analytics 4
  //    - ใส่ Measurement ID ที่ได้จาก analytics.google.com
  //    - รูปแบบ: "G-XXXXXXXXXX"
  //    - ถ้าปล่อยว่าง → ไม่ load GA4
  ga4Id: "G-P344FRTGJW",

  // 3) Microsoft Clarity (heatmap · session replay)
  //    - ใส่ Project ID ที่ได้จาก clarity.microsoft.com
  //    - ถ้าปล่อยว่าง → ไม่ load Clarity
  clarityId: "wd6fl04yvy"
};

/* ============================================================
   Apply config · ไม่ต้องแก้โค้ดด้านล่าง
   ============================================================ */
(function () {
  var cfg = window.P49_CONFIG;

  // -- Mockup banner toggle --
  if (!cfg.showMockupBanner) {
    document.documentElement.classList.add("hide-mockup");
  }

  // -- GA4 --
  if (cfg.ga4Id) {
    var ga = document.createElement("script");
    ga.async = true;
    ga.src = "https://www.googletagmanager.com/gtag/js?id=" + cfg.ga4Id;
    document.head.appendChild(ga);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", cfg.ga4Id, { anonymize_ip: true });
  }

  // -- Microsoft Clarity --
  if (cfg.clarityId) {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", cfg.clarityId);
  }

  // -- Small nicety: smooth scroll for #anchor links --
  document.addEventListener("click", function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var id = link.getAttribute("href").slice(1);
    if (!id) return;
    var target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  // -- Active page highlight (ในกรณีที่ลืมใส่ class="active" ใน nav) --
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".topnav a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
})();
