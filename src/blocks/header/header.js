// Бургерное меню
function openDropMenu(e) {

    e.stopPropagation();

    if(burgerButton.classList.contains("burger_opened")) {
        closeDropMenu();
    }
    else {
        burgerButton.classList.add("burger_opened");
        menuContainer.classList.add("menu_opened");

        isMenuOpened = true;
    }

}

function closeDropMenu() {
    burgerButton.classList.remove("burger_opened");
    menuContainer.classList.remove("menu_opened");

    isMenuOpened = false;
}

const burgerButton = document.querySelector(".burger");
const menuContainer = document.querySelector(".menu_place_header");
let isMenuOpened = false;

burgerButton.addEventListener("click", openDropMenu);
document.addEventListener('click', (event) => {

    if (event.target.closest(".menu__inner") === null && isMenuOpened === true) {

        closeDropMenu();

    }

});

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
