<<<<<<< HEAD
# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge]()
  - [Screenshot](#screenshot)
  - [Links](#links)

- [Features] (
  -Responsive Layout
  -Smooth transitions and animations
  )
- [What I learned](#what-i-learned)
- [Author](#Adesida-Korede)
- [Acknowledgments](#acknowledgments)

## Overview

This project gave me more understanding with implentation of a Navigation button for mobile devices and i now understand why it is so imortant in using semantic HTML whnen developing the website and also gave me more understanding in the implementation of a smooth scrolling using JavaScript by using the new INTERSECTION OBSERVER API

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

To see how you can add code snippets, see below:

```js
const section = document.querySelectorAll(".section");
const sectionObserve = function (entries, observer) {
  console.log(entries);
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    else if (entry.isIntersecting)
      entry.target.classList.remove("section-hidden");
  });
};

const sectionObserver = new IntersectionObserver(sectionObserve, {
  root: null,
  threshold: 0.15,
});

section.forEach((s) => sectionObserver.observe(s));
```

## Author

- Frontend Mentor - [@SaintKhay](https://www.frontendmentor.io/profile/SaintKhay)
- Twitter - [@koredeadesida](https://x.com/koredeadesida?s=21)

## Acknowledgments

Fonts from [Google Fonts](https://fonts.google.com/)
Icons from [Ion-Icon] https://ionic.io/ionicons
=======
# Loopstudios
>>>>>>> caea73b4c63a221eb3113378cffc40f64af0d3d6
