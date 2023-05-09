// Бургерное меню
const burgerButton = document.querySelector(".burger");
const menuContainer = document.querySelector(".menu_place_header");
const toggleMenu = () => {
    burgerButton.classList.toggle("burger_opened");
    menuContainer.classList.toggle("menu_opened");
};

burgerButton.addEventListener("click", toggleMenu);

// Липкий хедер
let scrollPos = window.scrollY;
const header = document.querySelector(".header");
const scrollChange = 1;
const addClassOnScroll = () => header.classList.add("header_sticky");
const removeClassOnScroll = () => header.classList.remove("header_sticky");

window.addEventListener("scroll", function () {
    scrollPos = window.scrollY;

    if (scrollPos >= scrollChange) {
        addClassOnScroll();
    } else {
        removeClassOnScroll();
    }
});
