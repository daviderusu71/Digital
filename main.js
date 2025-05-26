const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__content .socials", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".header__bar", {
  ...scrollRevealOption,
  delay: 3000,
});

ScrollReveal().reveal('#designer h2', {
  origin: 'top',
  distance: '50px',
  duration: 1000,
  delay: 300,
});

ScrollReveal().reveal('#designer p', {
  origin: 'bottom',
  distance: '30px',
  duration: 1000,
  delay: 600,
});

ScrollReveal().reveal('.designer__cards .card', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  interval: 200,
  delay: 900,
});

//Features
ScrollReveal().reveal('#features h2', {
  origin: 'top',
  distance: '50px',
  duration: 1000,
  delay: 300,
});

ScrollReveal().reveal('#features p', {
  origin: 'bottom',
  distance: '30px',
  duration: 1000,
  delay: 600,
});

ScrollReveal().reveal('.feature__item', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  interval: 200,
  delay: 900,
});

// News

ScrollReveal().reveal('#news h2', {
  origin: 'top',
  distance: '50px',
  duration: 1000,
  delay: 300,
});

ScrollReveal().reveal('#news p', {
  origin: 'bottom',
  distance: '30px',
  duration: 1000,
  delay: 600,
});

ScrollReveal().reveal('.news__item', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  interval: 250,
  delay: 900,
});

//Testimonials
ScrollReveal().reveal('#testimonials h2', { origin: 'top', distance: '50px', duration: 1000, delay: 300 });
ScrollReveal().reveal('.testimonial', { origin: 'bottom', distance: '20px', duration: 1000, delay: 600, interval: 300 });

//Contact

ScrollReveal().reveal('#contact h2', { origin: 'top', distance: '50px', duration: 1000, delay: 300 });
ScrollReveal().reveal('.contact__form', { origin: 'bottom', distance: '30px', duration: 1000, delay: 600 });

//Portfolio
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio__item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    portfolioItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
        setTimeout(() => item.style.opacity = '1', 0);
      } else {
        item.style.opacity = '0';
        setTimeout(() => item.style.display = 'none', 300);
      }
    });
  });
});
ScrollReveal().reveal('#portfolio h2', { origin: 'top', distance: '50px', duration: 1000, delay: 300 });
ScrollReveal().reveal('.portfolio__filters', { origin: 'bottom', distance: '20px', duration: 1000, delay: 600 });
ScrollReveal().reveal('.portfolio__item', { origin: 'bottom', distance: '20px', duration: 1000, delay: 900, interval: 200 });

// Skills

ScrollReveal().reveal(".skills h2", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".skill", {
  ...scrollRevealOption,
  delay: 700,
  beforeReveal: function (el) {
    const skillLevel = el.querySelector(".skill-level");
    skillLevel.style.width = skillLevel.style.width || skillLevel.getAttribute("style").match(/width:\s*(\d+%)/)[1];
  },
});
//footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer");

  function revealFooter() {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
      footer.classList.add("visible");
      window.removeEventListener("scroll", revealFooter);
    }
  }

  window.addEventListener("scroll", revealFooter);
  revealFooter(); // verifică imediat dacă footer-ul e deja în view
});

//1. Testimoniale

//Timeline – Experiență
ScrollReveal().reveal(".timeline__item", {
  ...scrollRevealOption,
  delay: 300,
  interval: 200,
});
