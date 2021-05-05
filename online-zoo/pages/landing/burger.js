function burgerMenu() {
    let burger = document.querySelector(".burger-menu");
    let main = document.querySelector(".main");

    burger.addEventListener("click", (event) => {
        burger.classList.toggle("active");
        main.classList.toggle("active");
    });
}

burgerMenu();