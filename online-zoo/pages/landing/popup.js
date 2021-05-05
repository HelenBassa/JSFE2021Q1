const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 500;

const quickInput = document.querySelector(".quick-donation__input");
const quickButton = document.querySelector(".quick-donation__button");
const popupAmount = document.querySelector(".amount .popup__input");
const buttonsDonate = document.querySelector(".buttons-donate");

const amountField = document.getElementById("amount");
const buttonsNext_1 = document.getElementById("next-1");

const validate_1 = () => {
  if (amountField.validity.valid) {
    buttonsNext_1.classList.remove("invalid");
  } else {
    buttonsNext_1.classList.add("invalid");
  }
};

amountField.addEventListener("input", () => {
  buttonsNext_1.classList.remove("invalid");
  // validate_1();
});

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const buttonsNext_2 = document.getElementById("next-2");

const validate_2 = () => {
  if (nameField.validity.valid && emailField.validity.valid) {
    buttonsNext_2.classList.remove("invalid");
  } else {
    buttonsNext_2.classList.add("invalid");
  }
};

nameField.addEventListener("input", () => {
  validate_2();
});
emailField.addEventListener("input", () => {
  validate_2();
});

const ccnField = document.getElementById("ccn");
const cvvField = document.getElementById("cvv");
const monthField = document.getElementById("month");
const yearField = document.getElementById("year");
const buttonsComplete = document.getElementById("complete");

const validate_3 = () => {
  if (
    ccnField.validity.valid &&
    cvvField.validity.valid &&
    monthField.validity.valid &&
    yearField.validity.valid
  ) {
    buttonsComplete.classList.remove("invalid");
  } else {
    buttonsComplete.classList.add("invalid");
  }
};

ccnField.addEventListener("input", () => {
  validate_3();
});
cvvField.addEventListener("input", () => {
  validate_3();
});
monthField.addEventListener("input", () => {
  validate_3();
});
yearField.addEventListener("input", () => {
  validate_3();
});

quickButton.addEventListener("click", (event) => {
  const popupName = quickButton.parentElement
    .getAttribute("href")
    .replace("#", "");
  const currentPopup = document.getElementById(popupName);
  popupOpen(currentPopup);
  event.preventDefault();
  if (quickInput.value == "") {
    buttonsDonate.firstChild.nextSibling.classList.add("active");
    // popupAmount.value = 10;
  }
  // popupAmount.value = quickInput.value;
  quickInput.value = quickInput.defaultValue;
  // const popupName = document.getElementById("popup-step-1");
  // const currentPopup = document.getElementById(popupName);
  // popupOpen(currentPopup);
  // event.preventDefault();
});

if (popupLinks.length > 0) {
  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    popupLink.addEventListener("click", function (e) {
      console.log(popupLink.firstChild.nextSibling);
      if (popupLink.firstChild.nextSibling.classList.contains("invalid"))
        return;
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseElements = document.querySelectorAll(".close-popup");
const popupForms = document.querySelectorAll(".popup__form");

if (popupCloseElements.length > 0) {
  for (let i = 0; i < popupCloseElements.length; i++) {
    const closeElement = popupCloseElements[i];
    closeElement.addEventListener("click", function (e) {
      if (closeElement.classList.contains("invalid")) return;
      for (let i = 0; i < popupForms.length; i++) {
        const popupForm = popupForms[i];
        popupForm.reset();
        buttonsNext_1.classList.add("invalid");
        buttonsNext_2.classList.add("invalid");
        buttonsComplete.classList.add("invalid");
      }
      popupClose(closeElement.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add("open");
    currentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        for (let i = 0; i < popupForms.length; i++) {
          const popupForm = popupForms[i];
          for (let j = 0; j < buttonsDonate.childNodes.length; j++) {
            let node = buttonsDonate.childNodes[j];
            if (node.nodeName == "BUTTON") {
              node.classList.remove("active");
            }
          }

          // btnDonate.classList.add("active");
          popupForm.reset();
          buttonsNext_1.classList.add("invalid");
          buttonsNext_2.classList.add("invalid");
          buttonsComplete.classList.add("invalid");
        }
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

  if (lockPadding.length > 0) {
    for (let i = 0; i < lockPadding.length; i++) {
      const lockElement = lockPadding[i];
      lockElement.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let i = 0; i < lockPadding.length; i++) {
        const unlockElement = lockPadding[i];
        unlockElement.style.paddingRight = "0px";
      }
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.key === "Esc") {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});

const popupButtons = document.querySelectorAll(
  ".popup--start .popup__buttons .popup__button"
);

const buttonDonate = document.querySelectorAll(
  ".buttons-donate .popup__button"
);

for (let i = 0; i < popupButtons.length - 1; i++) {
  const popupButton = popupButtons[i];
  popupButton.addEventListener("click", () => {
    for (let j = 0; j < buttonDonate.length; j++) {
      const btnDonate = buttonDonate[j];
      let parsepopup = parseInt(popupButton.innerText.replace("$", ""));
      let parsedonate = parseInt(
        btnDonate.innerHTML.replace("$", "").replace(" ", "")
      );

      if (parsepopup === parsedonate) {
        btnDonate.classList.add("active");

        console.log(parsepopup);
        console.log(typeof parsepopup);

        // popupAmount.value = parsepopup;
        console.log(popupAmount);
        console.log(popupAmount.value);
        console.log(popupAmount.valueAsNumber);
        console.log(typeof popupAmount.value);
        console.log(typeof popupAmount.valueAsNumber);
      }
    }
  });
}

const otherAmount = popupButtons[popupButtons.length - 1];
// console.log(otherAmount);
otherAmount.addEventListener("click", () => {
  // popupAmount.autofocus = true;
  // popupAmount.setAttribute("autofocus", "autofocus");
  popupAmount.focus();
  // popupAmount.select();
  popupAmount.classList.add("input-active");
});
