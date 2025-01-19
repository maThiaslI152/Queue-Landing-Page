document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const navbarCenter = document.querySelector('.navbar-center');

    burger.addEventListener('click', () => {
        navbarCenter.classList.toggle('active');
    });
});