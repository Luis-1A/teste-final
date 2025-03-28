// Função para ajustar os links conforme o tamanho da tela
function adjustNavLinks() {
    // Obtém todos os links de navegação
    const navLinks = document.querySelectorAll('nav a');

    // Verifica a largura da tela
    if (window.innerWidth <= 480) {
        // Em telas pequenas, esconde o link "Home"
        navLinks.forEach(link => {
            if (link.href.includes('index.html')) {
                link.style.display = 'none';
            } else {
                // Torna os botões redondos e ajusta o tamanho
                link.style.padding = '12px';
                link.style.fontSize = '14px';
                link.style.borderRadius = '50%';  // Botões redondos
                link.style.margin = '5px';
                link.style.textAlign = 'center'; // Centraliza o texto
            }
        });
    } else {
        // Em telas grandes, mostra todos os links
        navLinks.forEach(link => {
            link.style.display = 'inline-block';
            link.style.padding = '15px 30px';
            link.style.fontSize = '16px';
            link.style.borderRadius = '8px'; // Bordas quadradas
            link.style.margin = '5px';
        });
    }
}

// Chama a função quando a página carrega
window.addEventListener('load', adjustNavLinks);

// Chama a função sempre que a tela for redimensionada
window.addEventListener('resize', adjustNavLinks);
