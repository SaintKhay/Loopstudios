"use strict";

const header = document.querySelector("header");
const hero = document.querySelector(".hero");
const navBar = document.querySelector(".icon-open");
const navClose = document.querySelector(".icon-close");
const nav = document.querySelector(".nav-links");

// Open nav
navBar.addEventListener("click", () => {
  nav.classList.add("nav-open");
  navBar.style.display = "none";
  navClose.style.display = "block";
  document.body.classList.remove("no-scroll");
});

// Close nav
navClose.addEventListener("click", () => {
  nav.classList.remove("nav-open");
  navClose.style.display = "none";
  document.body.classList.remove("no-scroll");
});

// Optional: Close nav if clicking outside of nav
document.addEventListener("click", function (e) {
  if (
    nav.classList.contains("nav-open") &&
    !nav.contains(e.target) &&
    !navBar.contains(e.target) &&
    !navClose.contains(e.target)
  ) {
    nav.classList.remove("nav-open");
    navClose.style.display = "none";
    navBar.style.display = "block";
    document.body.classList.remove("no-scroll");
  }
});

// Close nav when a nav link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-open");
    navBar.style.display = "block";
    navClose.style.display = "none";
    document.body.classList.remove("no-scroll");
  });
});

const section = document.querySelectorAll(".section");
const sectionObserve = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    else if (entry.isIntersecting)
      entry.target.classList.remove("section-hidden");

    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(sectionObserve, {
  root: null,
  threshold: 0.15,
});

section.forEach((s) => {
  sectionObserver.observe(s);
  s.classList.add("section-hidden");
});

// Page Navigation
document.querySelectorAll(".nav--link").forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
