const burgerButton = document.querySelector(".burger");
const menuContainer = document.querySelector(".menu_place_header");

const toggleMenu = () => {
    burgerButton.classList.toggle("burger_opened");
    menuContainer.classList.toggle("menu_opened");
};

burgerButton.addEventListener("click", toggleMenu);
