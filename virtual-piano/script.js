const piano = document.querySelector(".piano");
const pianoKeys = document.querySelectorAll(".piano-key");
const buttons = document.querySelector(".btn-container");
const button = document.querySelectorAll(".btn");
const letters = document.querySelector(".btn-letters");
const notes = document.querySelector(".btn-notes");

const keys = {};

for (let pianoKey of pianoKeys) {
  let letter = pianoKey.dataset.letter;
  let note = pianoKey.dataset.note;
  keys[`Key${letter}`] = note;

  if (!pianoKey.classList.contains("none")) {
    pianoKey.classList.add("piano-key-remove-mouse");
  }
}

buttons.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    button.forEach((element) => {
      element.classList.toggle("btn-active");
    });
  }
});

letters.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    pianoKeys.forEach((element) => {
      element.classList.add("piano-key-letter");
    });
  }
});

notes.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    pianoKeys.forEach((element) => {
      element.classList.remove("piano-key-letter");
    });
  }
});

let isPressed = false;

piano.addEventListener("mousedown", (event) => {
  if (event.target.classList.contains("piano-key")) {
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);
    pianoKeys.forEach((element) => {
      if (element.classList.contains("piano-key-active")) {
        element.classList.remove("piano-key-active");
      }
    });
    event.target.classList.add("piano-key-active");

    event.target.classList.remove("piano-key-remove-mouse");
    event.target.classList.add("piano-key-active-pseudo");
    isPressed = true;
  }
});

piano.addEventListener("mouseover", (event) => {
  if (isPressed == false) {
    return;
  }
  if (event.target.classList.contains("piano-key")) {
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);
    pianoKeys.forEach((element) => {
      if (element.classList.contains("piano-key-active")) {
        element.classList.remove("piano-key-active");
      }
    });
    event.target.classList.add("piano-key-active");
    event.target.classList.remove("piano-key-remove-mouse");
    event.target.classList.add("piano-key-active-pseudo");
  }
});

window.addEventListener("mouseup", (event) => {
  if (event.target.classList.contains("piano-key")) {
    event.target.classList.remove("piano-key-active");
    event.target.classList.add("piano-key-remove-mouse");
    event.target.classList.remove("piano-key-active-pseudo");
  }
  isPressed = false;
});

window.addEventListener("mouseout", (event) => {
  if (event.target.classList.contains("piano-key")) {
    event.target.classList.remove("piano-key-active");
    event.target.classList.add("piano-key-remove-mouse");
    event.target.classList.remove("piano-key-active-pseudo");
  }
});

window.addEventListener("keydown", (event) => {
  if (event.repeat) {
    return;
  }

  if (event.code in keys) {
    playAudio(`assets/audio/${keys[event.code]}.mp3`);
    document
      .querySelector(`#${event.code}`)
      .classList.remove("piano-key-remove-mouse");
    document.querySelector(`${event.code}`).classList.add("piano-key-active");
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code in keys) {
    document
      .querySelector(`#${event.code}`)
      .classList.remove("piano-key-active");
  }
});

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}
