const menuToggle = document.getElementById('menu-toggle');
const mobileOverlay = document.getElementById('mobile-overlay');

menuToggle.addEventListener('click', () => {
    mobileOverlay.classList.toggle('active');
});