document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation menu toggle
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

  // WhatsApp appointment button
  const whatsappBtn = document.getElementById("whatsappBtn");
  if (whatsappBtn) {
    const phone = "919500839097";
    const text = encodeURIComponent(
      "Hello TONI&GUY R.S. Puram, I would like to book an appointment."
    );
    whatsappBtn.href = `https://wa.me/${phone}?text=${text}`;
  }

  // Hero slider: automatic switch every 10 seconds
  const slides = Array.from(document.querySelectorAll(".hero-slider .slide"));
  if (!slides.length) return;

  let currentIndex = slides.findIndex((slide) =>
    slide.classList.contains("active")
  );
  if (currentIndex < 0) currentIndex = 0;

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === currentIndex);
    });
  }

  showSlide(currentIndex);

  const AUTO_SLIDE_MS = 10000;
  let timerId = null;

  function startAutoSlide() {
    stopAutoSlide();
    if (slides.length > 1) {
      timerId = setInterval(() => {
        showSlide(currentIndex + 1);
      }, AUTO_SLIDE_MS);
    }
  }

  function stopAutoSlide() {
    if (timerId !== null) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoSlide();
    } else {
      startAutoSlide();
    }
  });

  startAutoSlide();
});
