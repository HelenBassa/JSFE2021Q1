const gap = 40;

const slider = document.querySelector(".slider__container");
const content = document.querySelector(".slider__cards");
const card = content.querySelector(".slider__card");

const sliderButtons = document.querySelector(".slider__buttons");

const prev = sliderButtons.querySelector(".button--prev");
const next = sliderButtons.querySelector(".button--next");

// console.log(slider);
// console.log(content);
// console.log(sliderButtons);
// console.log(prev);
// console.log(next);
// console.log(card.offsetWidth);

next.addEventListener("click", (event) => {
  slider.scrollBy(card.offsetWidth + gap, 0);
  if (slider.scrollWidth !== 0) {
    prev.style.visibility = "visible";
  }

  if (content.scrollWidth - gap <= slider.scrollLeft + width) {
    next.style.visibility = "hidden";
  }
});

prev.addEventListener("click", (event) => {
  slider.scrollBy(-(card.offsetWidth + gap), 0);
  if (slider.scrollLeft - gap <= 0) {
    prev.style.visibility = "hidden";
  }

  if (!content.scrollWidth - gap <= slider.scrollLeft + width) {
    next.style.visibility = "visible";
  }
});

let width = slider.offsetWidth;

window.addEventListener("resize", (event) => {
  width = slider.offsetWidth;
});
