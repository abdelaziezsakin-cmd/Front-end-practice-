// ملف جافاسكربت لصفحة Abdelaziez Portfolio

const contactButton = document.querySelector("#contact button");
const navLinks = document.querySelectorAll("nav a");

if (contactButton) {
  contactButton.addEventListener("click", () => {
    const email = "mailto:abdelaziez@example.com?subject=تواصل من موقع Portfolio";
    window.location.href = email;
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// إضافة تأثير صغير عند تحميل الصفحة
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// إعداد عرض أولي شفاف للبدء من دون وميض
document.body.style.opacity = "0";
