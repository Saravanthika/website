(function () {
  function initSalonSite() {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });

      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("open");
        });
      });
    }

    const whatsappBtn = document.getElementById("whatsappBtn");
    if (whatsappBtn) {
      const phone = "919500839097";
      const text = encodeURIComponent(
        "Hello TONI&GUY R.S. Puram, I would like to book an appointment."
      );
      whatsappBtn.href = `https://wa.me/${phone}?text=${text}`;
    }

    const slides = Array.from(document.querySelectorAll(".hero-slider .slide"));
    if (slides.length <= 1) return;

    let currentIndex = slides.findIndex((slide) =>
      slide.classList.contains("active")
    );
    if (currentIndex < 0) currentIndex = 0;

    function applySlide(index) {
      currentIndex = ((index % slides.length) + slides.length) % slides.length;
      slides.forEach((slide, idx) => {
        if (idx === currentIndex) {
          slide.classList.add("active");
          slide.style.display = "block";
        } else {
          slide.classList.remove("active");
          slide.style.display = "none";
        }
      });
    }

    applySlide(currentIndex);

    setInterval(() => {
      applySlide(currentIndex + 1);
    }, 10000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSalonSite);
  } else {
    initSalonSite();
  }
})();
