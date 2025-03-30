
    const menuToggle = document.getElementById('menu-toggle');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const closeOverlay = document.getElementById('close-overlay');

    // Abre o overlay
    menuToggle.addEventListener('click', () => {
        mobileOverlay.classList.add('active');
    });

    // Fecha o overlay
    closeOverlay.addEventListener('click', () => {
        mobileOverlay.classList.remove('active');
    });

    // Fecha ao clicar fora
    mobileOverlay.addEventListener('click', (e) => {
        if (e.target === mobileOverlay) {
            mobileOverlay.classList.remove('active');
        }
    });
