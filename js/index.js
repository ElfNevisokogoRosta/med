const navBtnOpen = document.querySelector('.btn__open');
const nav = document.querySelector('.header__navigation');
const navBtnClose = document.querySelector('.btn__close');
navBtnClose.addEventListener('click', ()=> {nav.style.display = 'none'});
navBtnOpen.addEventListener('click', ()=>{nav.style.display ='flex'});