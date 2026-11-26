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

  var activeBtn = clickedBtn || document.querySelector('.category-card[data-category="' + categoryKey + '"]');
  if (activeBtn) {
    activeBtn.classList.add("active");
  }

  var targetPanel = document.getElementById("cat-" + categoryKey);
  if (targetPanel) {
    targetPanel.classList.add("active");
    try {
      targetPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } catch (err) {
      targetPanel.scrollIntoView();
    }
  }
};
    }
  };
});
