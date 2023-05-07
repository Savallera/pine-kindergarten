const burgerButton = document.querySelector(".burger");
const menuContainer = document.querySelector(".menu__wrap");

const toggleMenu = () => {
    burgerButton.classList.toggle("burger_opened");
    menuContainer.classList.toggle("menu__wrap_opened");
};

burgerButton.addEventListener("click", toggleMenu);