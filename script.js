// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust for fixed navbar
        behavior: "smooth"
      });
    }
  });
});

// Contact Form Validation
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", e => {
  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    e.preventDefault();
    alert("Please fill in all fields before submitting.");
  }
});

// Dynamic Year in Footer
const footer = document.querySelector(".footer p");
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${currentYear} Your Name. All Rights Reserved.`;
