// ========== AOS ==========
AOS.init({
  once: true,
  offset: 100,
});

// ========== MOBILE NAV ==========
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

navOpen.addEventListener("click", () => {
  menu.classList.add("show");
  document.body.classList.add("show");
});

navClose.addEventListener("click", () => {
  menu.classList.remove("show");
  document.body.classList.remove("show");
});

// Close menu when clicking nav links
document.querySelectorAll(".scroll-link").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

// ========== FIXED NAV ==========
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// ========== SMOOTH SCROLL ==========
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    if (!element) return;
    const position = element.offsetTop - navHeight;
    window.scrollTo({
      top: position,
      left: 0,
      behavior: "smooth",
    });
  });
});

// ========== TYPEIT ANIMATION ==========
new TypeIt("#type1", {
  speed: 100,
  loop: true,
  waitUntilVisible: true,
})
  .type("Web Developer", { delay: 200 })
  .pause(2000)
  .delete()
  .type("React Engineer", { delay: 200 })
  .pause(2000)
  .delete()
  .type("Frontend Designer", { delay: 200 })
  .pause(2000)
  .delete()
  .go();

new TypeIt("#type2", {
  speed: 100,
  loop: true,
  waitUntilVisible: true,
})
  .type("Web Developer", { delay: 200 })
  .pause(2000)
  .delete()
  .type("React Engineer", { delay: 200 })
  .pause(2000)
  .delete()
  .type("Freelancer", { delay: 200 })
  .pause(2000)
  .delete()
  .go();

// ========== GSAP ANIMATIONS ==========
gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".banner", { opacity: 0, duration: 1.2, delay: 1.5, x: -200, scale: 0.95 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 2.3, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 2.6, y: -30 });
gsap.from(".hero-buttons", { opacity: 0, duration: 1, delay: 3, y: 30 });
gsap.from(".nav-item", {
  opacity: 0,
  duration: 0.8,
  delay: 1.2,
  y: 20,
  stagger: 0.15,
});
gsap.from(".icons span", {
  opacity: 0,
  duration: 0.8,
  delay: 3.5,
  y: 20,
  stagger: 0.15,
});

// ========== SKILL BAR ANIMATION ==========
const skillBars = document.querySelectorAll(".skills-bar");
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.classList.contains("html")
          ? "95%"
          : entry.target.classList.contains("css")
          ? "85%"
          : entry.target.classList.contains("javascript")
          ? "90%"
          : entry.target.classList.contains("bootstrap")
          ? "90%"
          : entry.target.classList.contains("react")
          ? "85%"
          : entry.target.classList.contains("nodejs")
          ? "70%"
          : entry.target.classList.contains("mysql")
          ? "75%"
          : "0%";
      }
    });
  },
  { threshold: 0.5 }
);

skillBars.forEach((bar) => {
  bar.style.width = "0%";
  skillObserver.observe(bar);
});

// ========== GLIDE CAROUSEL ==========
const glide = document.querySelector(".glide");
if (glide) {
  new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 3000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
        gap: 15,
      },
    },
    arrows: {
      left: ".glide__arrow--left",
      right: ".glide__arrow--right",
    },
  }).mount();
}

// ========== ACTIVE NAV LINK ON SCROLL ==========
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.style.color = "";
    link.style.backgroundColor = "";
    const href = link.getAttribute("href");
    if (href && href.includes(current)) {
      link.style.color = "#c4a1ff";
    }
  });
});
