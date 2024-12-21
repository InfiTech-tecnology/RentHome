document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-hamburguesa');
    const nav = document.querySelector('.nav-principal');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('active');
        nav.classList.toggle('active');
    });
});