const menuEmail = document.querySelector('.navbar__email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const toggleMenu = (element) => {
    element.classList.toggle('inactive');
}

menuEmail.addEventListener('click', () => {
    toggleMenu(desktopMenu);
});
burgerMenu.addEventListener('click', () => {
    toggleMenu(mobileMenu);
});