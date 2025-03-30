
    const toggleBtn = document.getElementById('toggle-nav');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-nav');

    // Abre o overlay
    toggleBtn.addEventListener('click', () => {
        overlay.classList.add('active');
    });

    // Fecha o overlay
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    // Fecha ao clicar fora
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
