// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Dark/Light mode toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});



// Animated counters
const counters = document.querySelectorAll('.counter');
const speed = 200;

const runCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  const updateCount = () => {
    const value = +counter.innerText;
    const increment = Math.ceil(target / speed);
    if (value < target) {
      counter.innerText = value + increment;
      setTimeout(updateCount, 40);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
};

// Trigger counters when section is visible
const statsSection = document.querySelector("#stats");
let triggered = false;

window.addEventListener("scroll", () => {
  const sectionTop = statsSection.offsetTop - window.innerHeight + 100;
  if (!triggered && window.scrollY > sectionTop) {
    counters.forEach(runCounter);
    triggered = true;
  }
});

// Typed.js effect
document.addEventListener("DOMContentLoaded", () => {
  new Typed(".typed-text", {
    strings: ["Frontend Developer", "Web Designer", "Problem Solver", "Creative Coder"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
  });
});

// Back to Top button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      alert("Message sent successfully! Thank you for reaching out.");
      form.reset();
    } else {
      alert("Oops! Something went wrong. Please try again later.");
    }
  });