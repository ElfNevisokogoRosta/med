const navBtnOpen = document.querySelector('.btn__open');
const nav = document.querySelector('.header__navigation');
const navBtnClose = document.querySelector('.btn__close');
navBtnClose.addEventListener('click', ()=> {nav.style.display = 'none'});
navBtnOpen.addEventListener('click', ()=>{nav.style.display ='flex'});

const left = document.querySelector(".slider__arrow--left");
const right = document.querySelector(".slider__arrow--right");
const slider = document.querySelector(".slider__items");
const images = document.querySelectorAll(".slider__image");
const bottom = document.querySelector(".slider__bottom");

let slideNumber = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "slider__button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".slider__button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 1200}px)`;
    slideNumber = i + 1;
    button.style.backgroundColor = "white";
  });
});

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 1200}px)`;
  slideNumber++;
};
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 1200}px)`;
  slideNumber--;
};
const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};
const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 1200}px)`;
  slideNumber = length;
};

const changeColor = ()=>{
  resetBg()
  buttons[slideNumber-1].style.backgroundColor = "white";
}

right.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
  changeColor()
});

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changeColor()
});
