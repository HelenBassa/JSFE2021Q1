const gapCarousel = 30;

const carousel = document.querySelector(".users-think--inner--carousel");
const contentCarousel = document.querySelector(".users-think--inner--slider");
const cardCarousel = contentCarousel.querySelector(
  ".users-think--inner--slider__card"
);

const carouselButtons = document.querySelector(".users-think__buttons");
const prevBtn = carouselButtons.querySelector(".button--prev");
const nextBtn = carouselButtons.querySelector(".button--next");

let widthCarousel = carousel.offsetWidth;
let cardWidth = cardCarousel.offsetWidth;

window.addEventListener("resize", (event) => {
  widthCarousel = carousel.offsetWidth;
  cardWidth = cardCarousel.offsetWidth;
});

let slideIndex = 0;

nextBtn.addEventListener("click", (event) => {
  delayAutoSliding();
  slideIndex++;
  carousel.scrollTo((cardWidth + gapCarousel) * slideIndex, 0);
  if (slideIndex > 0) {
    prevBtn.style.visibility = "visible";
  }
  if (slideIndex >= 6) {
    nextBtn.style.visibility = "hidden";
  }
});

prevBtn.addEventListener("click", (event) => {
  delayAutoSliding();
  slideIndex--;
  carousel.scrollTo((cardWidth + gapCarousel) * slideIndex, 0);
  if (slideIndex < 6) {
    nextBtn.style.visibility = "visible";
  }
  if (slideIndex <= 0) {
    prevBtn.style.visibility = "hidden";
  }
});

const slideFunc = () => {
  slideIndex++;
  if (slideIndex > 0) {
    prevBtn.style.visibility = "visible";
  }

  if (slideIndex >= 6) {
    nextBtn.style.visibility = "hidden";
  }

  if (slideIndex > 6) {
    prevBtn.style.visibility = "hidden";
    nextBtn.style.visibility = "visible";
    slideIndex = 0;
  }
  carousel.scrollTo((cardWidth + gapCarousel) * slideIndex, 0);
};

let autoSlideInterval = setInterval(slideFunc, 15000);
let autoSlideTimeout = null;

const delayAutoSliding = () => {
  clearTimeout(autoSlideTimeout);
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;

  autoSlideTimeout = setTimeout(() => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(slideFunc, 15000);
  }, 45000);
};

carousel.addEventListener("click", delayAutoSliding);
