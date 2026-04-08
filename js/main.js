/* ============================================================
   Piyush Khemka — main.js
   Vanilla JS: nav scroll, active links, fade-in animations,
   smooth scroll, mobile menu
   ============================================================ */

(function () {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  /* ── Sticky nav shadow ── */
  const nav = document.querySelector(".nav");
  if (nav) {
    window.addEventListener(
      "scroll",
      () => {
        nav.classList.toggle("scrolled", window.scrollY > 10);
      },
      { passive: true },
    );
  }

  /* ── Mobile menu (declared early — used in smooth scroll handler below) ── */
  const menuToggle = document.querySelector(".nav-menu-toggle");
  const navMenu = document.querySelector(".nav-links");

  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const active = document.querySelector(
            `.nav-links a[href="#${entry.target.id}"]`,
          );
          if (active) active.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  sections.forEach((s) => sectionObserver.observe(s));

  /* ── Scroll-triggered fade-in animations ── */
  if (!prefersReducedMotion) {
    const fadeEls = document.querySelectorAll(".fade-in");
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    fadeEls.forEach((el) => fadeObserver.observe(el));
  } else {
    document
      .querySelectorAll(".fade-in")
      .forEach((el) => el.classList.add("visible"));
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const offset =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--nav-height",
          ),
        ) || 56;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      if (navMenu) navMenu.classList.remove("open");
    });
  });

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const isOpen = navMenu.classList.contains("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.querySelector("i").className = isOpen
        ? "fas fa-times"
        : "fas fa-bars";
    });
  }

  /* ── Experience accordion (native <details>) ── */
  document.querySelectorAll("details.accordion-item").forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (detail.open) {
        document.querySelectorAll("details.accordion-item").forEach((other) => {
          if (other !== detail) other.removeAttribute("open");
        });
      }
    });
  });

  /* ── Hero elements animate in on load ── */
  if (!prefersReducedMotion) {
    document.querySelectorAll(".hero .fade-in").forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.12}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => el.classList.add("visible"));
      });
    });
  }
})();
