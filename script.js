"use strict";

const navBar = document.querySelector(".icon-open");
const navClose = document.querySelector(".icon-close");
const nav = document.querySelector(".nav-links");

navBar.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
  navBar.classList.add("hidden");
  navClose.style.display = "block";
});
navClose.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
  navBar.classList.remove("hidden");
  navClose.style.display = "none";
});

const section = document.querySelectorAll(".section");
const sectionObserve = function (entries, observer) {
  console.log(entries);
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
