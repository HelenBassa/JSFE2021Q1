const gapSidebar = 1;

const sidebar = document.querySelector(".sidebar");
const slider = document.querySelector(".nav-slider");
const openBtn = sidebar.querySelector(".sidebar__btn--show");
const nextBtn = sidebar.querySelector(".sidebar__next");
const itemHeight = sidebar.querySelector(".sidebar__item").offsetHeight;

openBtn.addEventListener("click", () => {
  sidebar.classList.toggle("opened");
});

let slideIndex = 0;
nextBtn.addEventListener("click", () => {
  slideIndex++;
  if (slideIndex > 4) {
    slideIndex = 0;
  }
  slider.scrollTo(0, (itemHeight + gapSidebar) * slideIndex);
});
