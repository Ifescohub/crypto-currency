# Crypto Currency Website Coding Challenge solution

This is a solution to the [#coding360challenge crypto currency website coding challenge by @codingossy](https://twitter.com/codingossy). This is the September edition of the coding challenge. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resource](#useful-resource)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The rules

Candidates should be able to:

- Have fun, no pressure
- Make the website responsive
- Have clean codes
- Use modern semantic HTML
-Use structured and reuseable codes if library is used

### Screenshot

![](./screenshots/screenshot1.png)

### Links

- Solution URL: [github.com/Ifescohub/crypto-currency](https://github.com/Ifescohub/crypto-currency)
- Live Site URL: [zesty-mooncake-9d3f86.netlify.app/](https://zesty-mooncake-9d3f86.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- [Google Fonts](https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap) - For Fonts

### What I learned

I learnt a lot through this project. I had fun while learning new JavaScript concepts.
I was able to use the "getBoundingClientRect().top", "window.innerHeight" and "clientHeight" for the first to add animatimation on scroll
```js
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  ); 
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};
```

### Continued development

Still trying to learn how to control the element on scroll even better. I still have a lot to improve on in javascript.


### Useful resource

- [webdesign.tutsplus.com/tutori...](https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671) - This help me a lot while trying to wrap my head around how to use vanilla javascript to create the animation on scroll. It helped to simplify the process


## Author

- GitHub - [Udeh Ifeanyi](https://github.com/Ifescohub)
- Frontend Mentor - [@ifescohub](https://www.frontendmentor.io/profile/Ifescohub)
- Twitter - [@UdehIfeanyi10](https://twitter.com/UdehIfeanyi10)

## Acknowledgments

A big thanks to Gift @codingossy](https://twitter.com/codingossy) for creating this challenge. It gave a beginner like me the chance to compete with the professionals in this field while giving me basis to improve more.