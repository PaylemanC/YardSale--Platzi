const menuEmail = document.querySelector('.navbar__email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenu = document.querySelector('.navbar__shopping-cart');
const aside = document.querySelector('.product-detail')

const toggleElement = (element) => {
    element.classList.toggle('inactive');
}

menuEmail.addEventListener('click', () => {
    toggleElement(desktopMenu);
});
burgerMenu.addEventListener('click', () => {
    toggleElement(mobileMenu);
});
cartMenu.addEventListener('click', () => {
    toggleElement(aside);    
})