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