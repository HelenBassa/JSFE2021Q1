const filters = document.querySelectorAll(".filters input");
const image = document.querySelector(".editor img");
const btnReset = document.querySelector(".btn-reset");
const btnNext = document.querySelector(".btn-next");
const btnLoad = document.querySelector('input[type="file"]');
const btnSave = document.querySelector(".btn-save");
let number = 0;

function addFilter() {
  const suffix = this.dataset.sizing || "";
  image.style.setProperty(`--${this.name}`, this.value + suffix);
}

function resetFilter() {
  filters.forEach((filter) => {
    filter.value = filter.defaultValue;
    filter.nextElementSibling.value = filter.value;
    image.style.cssText = "";
  });
}

function switchImage() {
  const hour = new Date().getHours();
  let time;

  if (hour < 6) {
    time = "night";
  } else if (hour < 12) {
    time = "morning";
  } else if (hour < 18) {
    time = "day";
  } else if (hour < 24) {
    time = "evening";
  }

  number += 1;
  number = number > 20 ? 1 : number;
  let src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${time}/${
    number.toString().length > 1 ? number : "0" + number
  }.jpg`;

  const img = new Image();
  img.src = src;
  img.addEventListener("load", () => {
    image.src = src;
  });
}

function loadImage() {
  const file = btnLoad.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    image.src = reader.result;
  });

  reader.readAsDataURL(file);
  btnLoad.value = "";
}

function saveClick() {
  const canvas = document.createElement("canvas");
  const img = new Image();

  img.setAttribute("crossOrigin", "anonymous");
  img.src = image.src;

  img.addEventListener("load", () => {
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");

    let imageFilter = [];
    filters.forEach((filter) => {
      filter.name === "hue" ? (filter.name = "hue-rotate") : filter.name;
      if (filter.dataset.sizing === "%") {
        imageFilter.push(`${filter.name}(${filter.value / 100})`);
      } else if (filter.name === "blur") {
        imageFilter.push(
          `${filter.name}(${
            (filter.value *
              (img.width / image.width + img.height / image.height)) /
            2
          }${filter.dataset.sizing})`
        );
      } else {
        imageFilter.push(
          `${filter.name}(${filter.value}${filter.dataset.sizing})`
        );
      }
    });

    ctx.filter = imageFilter.join(" ");
    ctx.drawImage(img, 0, 0);
    const imageURL = canvas.toDataURL();
    saveImage(imageURL);
  });
}

function saveImage(url) {
  const link = document.createElement("a");
  link.download = `download.png`;
  link.href = url;
  link.click();
  link.delete;
}

filters.forEach((filter) =>
  filter.addEventListener("input", () => {
    filter.nextElementSibling.value = filter.value;
  })
);

filters.forEach((filter) => filter.addEventListener("input", addFilter));
btnReset.addEventListener("click", resetFilter);
btnNext.addEventListener("click", switchImage);
btnLoad.addEventListener("change", loadImage);
btnSave.addEventListener("click", saveClick);

const fullScreen = document.querySelector(".fullscreen");

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

fullScreen.addEventListener(
  "click",
  () => {
    toggleFullScreen();
  },
  false
);

const btnContainer = document.querySelector(".btn-container");
const buttons = btnContainer.querySelectorAll(".btn");

btnContainer.addEventListener("click", (event) => {
  if (!event.target.classList.contains("btn-container")) {
    buttons.forEach((button) => {
      button.classList.remove("btn-active");
    });

    if (event.target.classList.contains("btn-load--input")) {
      event.target.parentElement.classList.add("btn-active");
    } else {
      event.target.classList.add("btn-active");
    }
  }
});
