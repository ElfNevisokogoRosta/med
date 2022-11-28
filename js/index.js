const navBtnOpen = document.querySelector('.btn__open');
const nav = document.querySelector('.header__navigation');
const navBtnClose = document.querySelector('.btn__close');
navBtnClose.addEventListener('click', ()=> {nav.style.display = 'none'});
navBtnOpen.addEventListener('click', ()=>{nav.style.display ='flex'});

const left = document.querySelector(".slider__arrow--left")
const right = document.querySelector(".slider__arrow--right")
const slider = document.querySelector(".slider__frame")

right.addEventListener("click",()=>{
    console.log("clicked")
})