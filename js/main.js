document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const whatsappBtn = document.getElementById("whatsappBtn");

  // Mobile menu toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when a navigation link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // WhatsApp booking link for TONI&GUY R.S. Puram
  const salonWhatsAppNumber = "919500839097";
  const bookingMessage = encodeURIComponent(
    "Hello TONI&GUY R.S. Puram, I would like to book an appointment."
  );

  if (whatsappBtn) {
    whatsappBtn.href = `https://wa.me/${salonWhatsAppNumber}?text=${bookingMessage}`;
  }
});
