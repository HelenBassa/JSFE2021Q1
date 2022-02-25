const piano = document.querySelector(".piano");
const pianoKeys = document.querySelectorAll(".piano-key");
const btnContainer = document.querySelector(".btn-container");
const buttons = document.querySelectorAll(".btn");
const letters = document.querySelector(".btn-letters");
const notes = document.querySelector(".btn-notes");

const keys = {};

for (let pianoKey of pianoKeys) {
  var letter = pianoKey.dataset.letter;
  let note = pianoKey.dataset.note;
  keys[`Key${letter}`] = note;
}

btnContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    buttons.forEach((element) => {
      element.classList.remove("btn-active");
      event.target.classList.add("btn-active");
    });
  }
});

letters.addEventListener("click", (event) => {
  pianoKeys.forEach((element) => {
    element.classList.add("piano-key-letter");
  });
});

notes.addEventListener("click", (event) => {
  pianoKeys.forEach((element) => {
    element.classList.remove("piano-key-letter");
  });
});

let isPressed = false;

function startPlay(event) {
  if (event.target.classList.contains("piano-key")) {
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);
    pianoKeys.forEach((element) => {
      if (element.classList.contains("piano-key-active")) {
        element.classList.remove("piano-key-active");
      }
    });
    event.target.classList.add("piano-key-active", "piano-key-active-pseudo");
    isPressed = true;
  }
}

piano.addEventListener("mousedown", startPlay);

piano.addEventListener("mouseover", (event) => {
  if (isPressed == false) {
    return;
  }
  startPlay(event);
});

function stopPlay(event) {
  if (event.target.classList.contains("piano-key")) {
    event.target.classList.remove(
      "piano-key-active",
      "piano-key-active-pseudo"
    );
  }
}

window.addEventListener("mouseup", (event) => {
  stopPlay(event);
  isPressed = false;
});

window.addEventListener("mouseout", stopPlay);

window.addEventListener("keydown", (event) => {
  if (event.repeat) {
    return;
  }
  if (event.code in keys) {
    playAudio(`assets/audio/${keys[event.code]}.mp3`);
    document
      .querySelector(`div[data-letter="${event.code[3]}"]`)
      .classList.add("piano-key-active");
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code in keys) {
    document
      .querySelector(`div[data-letter="${event.code[3]}"]`)
      .classList.remove("piano-key-active");
  }
});

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}

const fullScreen = document.querySelector(".fullscreen");

fullScreen.addEventListener(
  "click",
  () => {
    toggleFullScreen();
  },
  false
);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
