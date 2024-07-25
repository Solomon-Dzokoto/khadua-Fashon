const openNav=document.querySelector('.open');
const closeNav=document.querySelector('.close');
const navLink=document.querySelector('.nav__links');

openNav.addEventListener('click',()=>{
  navLink.style.display="grid";
  openNav.style.display="none";
  closeNav.style.display="grid";
})
closeNav.addEventListener('click',()=>{
  navLink.style.display="none";
  openNav.style.display="grid";
  closeNav.style.display="none";
})

const ScrollRevealOption = {
  distance:"3rem",
  origin:"bottom",
  interval:500,
  duration:2000,
};

ScrollReveal().reveal(".first__section .container .image img", {
  ...ScrollRevealOption,
  origin: "right",
  distance: "5rem",
  duration: 1000,
});
ScrollReveal().reveal(".first__section .container .image img", {
  ...ScrollRevealOption,
  origin: "right",
  distance: "5rem",
  duration: 1000,
});
ScrollReveal().reveal(".first__section .container .header", {
  ...ScrollRevealOption,
  origin: "left",
  distance: "5rem",
  duration: 2000,
});
ScrollReveal().reveal(".first__section .container .header h1", {
  ...ScrollRevealOption,
  origin: "bottom",
  distance: "6rem",
  duration: 2500,
});
ScrollReveal().reveal(".first__section .container .header p", {
  ...ScrollRevealOption,
  origin: "bottom",
  distance: "8rem",
  duration: 3500,
});
ScrollReveal().reveal("article", {
  ...ScrollRevealOption,
  origin: "bottom",
  distance: "8rem",
 interval:500,
});
ScrollReveal().reveal(".about__us .top h1", {
  ...ScrollRevealOption,
  origin: "left",
  distance: "8rem",
 interval:500,
});
ScrollReveal().reveal(".about__us .bottom .right .image", {
  ...ScrollRevealOption,
  origin: "right",
  distance: "8rem",
duration:1000,
});
ScrollReveal().reveal(".about__us .top p", {
  ...ScrollRevealOption,
  origin: "left",
  distance: "10rem",
  delay:300,
duration:3000,
});