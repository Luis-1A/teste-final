const menuToggle = document.getElementById('menu-toggle');
const mobileOverlay = document.getElementById('mobile-overlay');
const closeOverlay = document.getElementById('close-overlay');

menuToggle.addEventListener('click', () => {
    mobileOverlay.classList.add('active');
});

closeOverlay.addEventListener('click', () => {
    mobileOverlay.classList.remove('active');
});

mobileOverlay.addEventListener('click', (e) => {
    if (e.target === mobileOverlay) {
        mobileOverlay.classList.remove('active');
    }
});