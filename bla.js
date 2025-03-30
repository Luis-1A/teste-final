document.addEventListener("DOMContentLoaded", function () {
    const divTest = document.getElementById("calabresa");

    if (divTest) {
        divTest.style.border = "2px solid red"; // Adiciona borda vermelha para testar
        divTest.style.padding = "10px";
    } else {
        console.log("A div 'calabresa' não foi encontrada.");
    }
});

    const toggleBtn = document.getElementById('toggle-nav');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-nav');

    // Abre o overlay ao clicar no botão "Menu"
    toggleBtn.addEventListener('click', () => {
        overlay.classList.add('active');
    });

    // Fecha o overlay ao clicar no "X"
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    // Fecha o overlay ao clicar fora da navegação
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
