document.addEventListener("DOMContentLoaded", function () {
    function adjustNavLinks() {
        const nav = document.querySelector("nav");
        const links = document.querySelectorAll("nav a");

        if (window.innerWidth <= 480) {
            links.forEach(link => {
                if (link.href.includes("index.html")) {
                    link.style.display = "none"; // Esconde "Home"
                } else {
                    link.style.display = "inline-block";
                    link.style.padding = "12px";
                    link.style.fontSize = "14px";
                    link.style.width = "50px";  // Largura fixa
                    link.style.height = "50px"; // Altura fixa
                    link.style.borderRadius = "50%"; // Borda arredondada
                    link.style.textAlign = "center";
                    link.style.lineHeight = "50px"; // Centraliza o texto
                    link.style.margin = "5px";
                    link.style.backgroundColor = "#001580"; // Cor de fundo
                    link.style.color = "white"; // Cor da fonte
                }
            });

            nav.style.display = "flex";
            nav.style.justifyContent = "center";
            nav.style.gap = "10px"; // Espaçamento entre botões
        } else {
            links.forEach(link => {
                link.style.display = "inline-block";
                link.style.padding = "15px 30px";
                link.style.fontSize = "16px";
                link.style.borderRadius = "8px";
                link.style.width = "auto";
                link.style.height = "auto";
                link.style.lineHeight = "normal";
                link.style.backgroundColor = "transparent"; // Remove fundo
                link.style.color = "#001580"; // Cor do texto normal
            });
        }
    }

    // Executa a função ao carregar a página e ao redimensionar a tela
    adjustNavLinks();
    window.addEventListener("resize", adjustNavLinks);
});
