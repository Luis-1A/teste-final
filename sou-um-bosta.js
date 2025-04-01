document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Evita o comportamento padrão dessa merda de botão
        let product = this.closest('.product-item');
        if (!product) return; // Se não achar o produto, foda-se, sai fora

        let titleElement = product.querySelector('.title');
        let title = titleElement ? titleElement.innerText.trim() : 'Produto desconhecido'; // Se não tiver título, que se dane

        let phoneNumber = '5561993191969'; // Número de WhatsApp, tomara que funcione, seu idiota
        let message = `Olá, estou interessado no produto: ${title}. Poderia me dar mais informações?`;
        let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`; // URL do WhatsApp, que bosta
        
        // Criar essa caixinha de aviso ridícula
        let alertBox = document.createElement('div');
        alertBox.style.position = 'fixed'; // Fica parado, seu merda
        alertBox.style.top = '50%';
        alertBox.style.left = '50%';
        alertBox.style.transform = 'translate(-50%, -50%)';
        alertBox.style.backgroundColor = '#007bff'; // Azulzinho escroto
        alertBox.style.color = 'white';
        alertBox.style.padding = '20px';
        alertBox.style.borderRadius = '10px';
        alertBox.style.textAlign = 'center';
        alertBox.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
        alertBox.style.zIndex = '1000';
        alertBox.innerHTML = `<p>Você será direcionado para o WhatsApp para saber mais sobre: <strong>${title}</strong>.</p><p>Aguarde <span id='countdown'>3</span> segundos...</p>`;
        document.body.appendChild(alertBox); // Joga essa porra na tela
        
        let countdown = 3; // Contagem regressiva, seu imbecil
        let interval = setInterval(() => {
            countdown--;
            document.getElementById('countdown').innerText = countdown;
            if (countdown === 0) { // Quando zerar, sai dessa merda
                clearInterval(interval); // Para essa bosta
                document.body.removeChild(alertBox); // Tira essa porcaria da tela
                window.location.href = whatsappUrl; // Vai pro WhatsApp, seu trouxa
            }
        }, 1000);
    });
});

let closeCounter = 0; // Contador pra tecla X, seu burro
document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() === 'x') { // Apertou X, seu idiota?
        closeCounter++;
        if (closeCounter === 3) { // Três vezes, seu filho da mãe!
            // Criar esse quadrado idiota
            let square = document.createElement('div');
            square.style.position = 'fixed'; // Fica parado, seu merda
            square.style.top = '50%';
            square.style.left = '50%';
            square.style.transform = 'translate(-50%, -50%)';
            square.style.width = '0'; // Começa pequeno, seu babaca
            square.style.height = '0';
            square.style.background = 'linear-gradient(45deg, #ff00ff, #00ffff)'; // Cores escrotas
            square.style.borderRadius = '15px';
            square.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.8)'; // Sombra ridícula
            square.style.zIndex = '2000';
            square.style.display = 'flex';
            square.style.alignItems = 'center';
            square.style.justifyContent = 'center';
            square.style.color = '#fff'; // Texto branco, seu otário
            square.style.fontFamily = 'Arial, sans-serif';
            square.style.fontSize = '24px';
            square.style.textAlign = 'center';
            square.style.padding = '20px';
            square.style.transition = 'all 0.5s ease-in-out'; // Animaçãozinha de merda
            square.innerHTML = `
                <div>
                    <h2 style="margin: 0; font-size: 32px; text-shadow: 2px 2px 4px #000;">🎉 ATUALIZAÇÃO, SEU IMBECIL! 🎉</h2>
                    <p style="margin: 10px 0 0; font-size: 20px;">Última atualização, seu trouxa:</p>
                    <p style="font-size: 28px; font-weight: bold; color: #ffff00; text-shadow: 1px 1px 3px #000;">30/03/2025 14:50</p>
                </div>
            `;
            document.body.appendChild(square); // Joga essa bosta na tela

            // Animação de entrada, seu retardado
            setTimeout(() => {
                square.style.width = '400px'; // Cresce, seu lixo
                square.style.height = '300px';
                square.style.transform = 'translate(-50%, -50%) rotate(5deg)'; // Gira um pouco, seu idiota
            }, 10);

            // Animação pulsante, que merda
            let pulse = setInterval(() => {
                square.style.boxShadow = '0 0 30px rgba(255, 0, 255, 1)'; // Pisca forte, seu burro
                setTimeout(() => {
                    square.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.8)'; // Volta, seu babaca
                }, 300);
            }, 600);

            // Fechar essa porra depois de 5 segundos
            setTimeout(() => {
                square.style.width = '0'; // Encolhe, seu filho da puta
                square.style.height = '0';
                clearInterval(pulse); // Para essa merda pulsante
                setTimeout(() => document.body.removeChild(square), 500); // Tira essa bosta da tela
            }, 5000);

            square.addEventListener('click', () => { // Clica pra fechar, seu idiota
                square.style.width = '0';
                square.style.height = '0';
                clearInterval(pulse); // Para essa porcaria
                setTimeout(() => document.body.removeChild(square), 500); // Remove, seu otário
            });

            // Log animado no console, seu retardado
            console.log('%c🔥 ATIVANDO ESSA MERDA DE CÓDIGO! 🔥', 'color: #ff00ff; font-size: 24px; font-weight: bold;');
            setTimeout(() => {
                console.log('%c🎉 CÓDIGO JAVASCRIPT ATIVADO, SEU FILHO DA MÃE! 🎉', 'color: #00ffff; font-size: 24px; font-weight: bold;');
                console.log('%cÚltima atualização: 01/04/2025 11:02, SEU BURRO', 'color: #ffff00; font-size: 16px;');
            }, 1000);

            closeCounter = 0; // Reseta essa porra de contador
        }
    }
});

// Registro oculto da última atualização, seu idiota
(function () {
    let lastUpdate = 'Última atualização: 30/03/2025 14:50'; // Data de merda
    console.log(`%c${lastUpdate}`, 'color: gray; font-size: 12px;'); // Loga essa bosta
})();