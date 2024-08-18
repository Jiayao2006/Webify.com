document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    burger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});