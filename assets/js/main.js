const menuEmail = document.querySelector('.navbar__email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenu = document.querySelector('.navbar__shopping-cart');
const aside = document.querySelector('.product-detail')

const toggleElement = (element) => {
    element.classList.toggle('inactive');
}
const hideElement = (element) => {
    element.classList.add('inactive')
}

menuEmail.addEventListener('click', () => {
    toggleElement(desktopMenu);
    hideElement(mobileMenu);
    hideElement(aside);
});
burgerMenu.addEventListener('click', () => {
    toggleElement(mobileMenu);
    hideElement(desktopMenu);
    hideElement(aside);
});
cartMenu.addEventListener('click', () => {
    toggleElement(aside);   
    hideElement(mobileMenu);
    hideElement(desktopMenu); 
})