document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
      });
    });
  }

  // Hero slider rotation
  const slides = document.querySelectorAll(".hero-slider .slide");
  if (slides.length > 1) {
    let currentSlide = 0;
    setInterval(function () {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 5000);
  }

  // Category switcher
  window.showCategory = function (categoryKey, clickedBtn) {
    document.querySelectorAll(".category-card").forEach(function (btn) {
      btn.classList.remove("active");
    });

    document.querySelectorAll(".category-panel").forEach(function (panel) {
      panel.classList.remove("active");
    });

    if (clickedBtn) {
      clickedBtn.classList.add("active");
    } else {
      const matchingBtn = document.querySelector('.category-card[data-category="' + categoryKey + '"]');
      if (matchingBtn) matchingBtn.classList.add("active");
    }

    const targetPanel = document.getElementById("cat-" + categoryKey);
    if (targetPanel) {
      targetPanel.classList.add("active");

      const navbar = document.querySelector(".navbar");
      const navOffset = (navbar ? navbar.offsetHeight : 68) + 16;
      const topPos = targetPanel.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: Math.max(0, topPos),
        behavior: "smooth"
    }
  };
});
