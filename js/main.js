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

  // Hero slider controls (Slide 1 <-> Slide 2)
  const slides = Array.from(document.querySelectorAll(".hero-slider .slide"));
  const prevBtn = document.querySelector(".hero-slider .slider-btn.prev");
  const nextBtn = document.querySelector(".hero-slider .slider-btn.next");

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

  if (prevBtn) {
    prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));
  }
});
