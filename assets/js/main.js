const menuEmail = document.querySelector('.navbar__email');
const desktopMenu = document.querySelector('.desktop-menu');

const toggleDesktopMenu = (e) => {
    desktopMenu.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);