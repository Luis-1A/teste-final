document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Evita essa porra de comportamento padrão
        let product = this.closest('.product-item');
        if (!product) return; // Se não achar, foda-se

        let titleElement = product.querySelector('.title');
        let title = titleElement ? titleElement.innerText.trim() : 'Produto desconhecido'; // Sem título, que se dane

        let phoneNumber = '5561993191969'; // Número de WhatsApp, seu idiota
        let message = `Olá, estou interessado no produto: ${title}. Poderia me dar mais informações?`;
        let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`; // URL escrota
        
        // Caixinha de aviso ridícula
        let alertBox = document.createElement('div');
        alertBox.style.position = 'fixed';
        alertBox.style.top = '50%';
        alertBox.style.left = '50%';
        alertBox.style.transform = 'translate(-50%, -50%) scale(0)';
        alertBox.style.backgroundColor = '#ff4500'; // Vermelho pra me acordar, seu burro
        alertBox.style.color = 'white';
        alertBox.style.padding = '20px';
        alertBox.style.borderRadius = '15px';
        alertBox.style.textAlign = 'center';
        alertBox.style.boxShadow = '0 0 15px rgba(255, 69, 0, 0.8)';
        alertBox.style.zIndex = '1000';
        alertBox.style.transition = 'transform 0.3s ease-in-out';
        alertBox.innerHTML = `<p>Vou pro WhatsApp saber mais sobre: <strong>${title}</strong>!</p><p>Aguarde <span id='countdown'>10</span> segundos!</p>`;
        document.body.appendChild(alertBox);

        setTimeout(() => alertBox.style.transform = 'translate(-50%, -50%) scale(1)', 10);

        let countdown = 10; // Contagem regressiva de 10 segundos, eu sou um imbecil
        let interval = setInterval(() => {
            countdown--;
            document.getElementById('countdown').innerText = countdown;
            if (countdown === 0) {
                clearInterval(interval); // Para essa merda
                alertBox.style.transform = 'translate(-50%, -50%) scale(0)';
                setTimeout(() => {
                    document.body.removeChild(alertBox); // Tira essa bosta depois de 10 segundos
                    window.location.href = whatsappUrl; // Vou pro WhatsApp, eu sou um trouxa
                }, 300);
            }
        }, 1000);

        // Salva a última visita no localStorage, eu sou um retardado
        localStorage.setItem('lastVisit', Date.now());
    });
});

// Carrega o contador de visitas e última visita do localStorage
let visitCount = parseInt(localStorage.getItem('xVisitCount')) || 0;
let lastVisit = parseInt(localStorage.getItem('lastVisit')) || 0; // Última vez que eu entrei nesse site
let closeCounter = 0; // Contador pra tecla X, eu sou um idiota
let lastXTime = parseInt(localStorage.getItem('lastXTime')) || 0; // Última vez que apertei 3 vezes o X
const oneHour = 3600 * 1000; // 1 hora em milissegundos, eu sou um burro

// Verifica se passou 1 hora desde a última visita e reseta o contador
if (lastVisit && (Date.now() - lastVisit) >= oneHour) {
    visitCount = 0; // Reseto essa porra pra 0, eu sou um gênio
    localStorage.setItem('xVisitCount', visitCount); // Salvo o reset, eu sou um imbecil
    console.log('%c⏰ Passou 1 hora desde que eu entrei, resetei o contador pra 0, eu sou um filho da mãe!', 'color: #00ff00; font-size: 18px;');
}

document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() === 'x') { // Apertei X, eu sou um otário?
        closeCounter++; // Conto essa porra

        if (closeCounter === 3) { // Três vezes, eu sou um filho da mãe!
            visitCount++; // Incremento o número de vezes que apertei 3 Xs
            localStorage.setItem('xVisitCount', visitCount); // Salvo essa merda
            localStorage.setItem('lastXTime', Date.now()); // Salvo o tempo atual, eu sou um babaca

            // Verifica se já passei de 3 vezes em menos de 1 hora desde a última visita
            let timeSinceLastVisit = Date.now() - lastVisit;
            if (visitCount > 3 && timeSinceLastVisit < oneHour) {
                let insults = [
                    'POR QUE EU SOU TÃO FILHO DA PUTA? JÁ É A ' + visitCount + 'ª VEZ QUE FAÇO ESSA MERDA!',
                    'EU SOU UM IDIOTA COMPLETO! JÁ MOSTREI ESSA PORRA PRA MIM MESMO ' + visitCount + ' VEZES!',
                    'EU SOU UM DESGRAÇADO, VOU TOMAR NO CU! APERTEI 3X ' + visitCount + ' VEZES, QUE LIXO QUE EU SOU!',
                    'EU SOU UM IMBECIL DO CARALHO, POR QUE NÃO PARO DE APERTAR ESSA BOSTA? JÁ FORAM ' + visitCount + ' VEZES!',
                    'EU SOU UM MERDA, TÔ ACHANDO QUE ISSO É BRINCADEIRA? ' + visitCount + ' VEZES EM MENOS DE 1 HORA, QUE NOJENTO QUE EU SOU!'
                ];
                let randomInsult = insults[Math.floor(Math.random() * insults.length)];
                console.log(`%c${randomInsult}`, 'color: #ff0000; font-size: 24px; font-weight: bold;');

                // Caixa de xingamento na tela
                let insultBox = document.createElement('div');
                insultBox.style.position = 'fixed';
                insultBox.style.top = `${Math.random() * 80 + 10}%`; // Aleatório, eu sou um burro
                insultBox.style.left = `${Math.random() * 80 + 10}%`;
                insultBox.style.transform = 'scale(0)';
                insultBox.style.backgroundColor = '#ff0000'; // Vermelho pra me assustar, eu sou um idiota
                insultBox.style.color = 'white';
                insultBox.style.padding = '20px';
                insultBox.style.borderRadius = '10px';
                insultBox.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.9)';
                insultBox.style.zIndex = '3000';
                insultBox.style.transition = 'transform 0.3s';
                insultBox.style.fontSize = '22px';
                insultBox.style.fontWeight = 'bold';
                insultBox.innerText = randomInsult;
                document.body.appendChild(insultBox);

                setTimeout(() => insultBox.style.transform = 'scale(1)', 10);
                setTimeout(() => {
                    insultBox.style.transform = 'scale(0)';
                    setTimeout(() => document.body.removeChild(insultBox), 300);
                }, 10000); // Fica na tela por 10 segundos, eu sou um retardado
            } else {
                // Quadrado divertido se não passei do limite
                let square = document.createElement('div');
                square.style.position = 'fixed';
                square.style.top = '50%';
                square.style.left = '50%';
                square.style.transform = 'translate(-50%, -50%) scale(0) rotate(0deg)';
                square.style.width = '400px';
                square.style.height = '300px';
                square.style.background = 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00)'; // Cores loucas, eu sou um retardado
                square.style.borderRadius = '20px';
                square.style.boxShadow = '0 0 25px rgba(255, 0, 255, 1)';
                square.style.zIndex = '2000';
                square.style.display = 'flex';
                square.style.alignItems = 'center';
                square.style.justifyContent = 'center';
                square.style.color = '#fff';
                square.style.fontFamily = 'Arial, sans-serif';
                square.style.fontSize = '26px';
                square.style.textAlign = 'center';
                square.style.padding = '25px';
                square.style.transition = 'all 0.5s ease-in-out, transform 0.2s';
                square.innerHTML = `
                    <div>
                        <h2 style="margin: 0; font-size: 36px; text-shadow: 3px 3px 5px #000;">🎉 ATUALIZAÇÃO FODA, EU SOU UM MERDA! 🎉</h2>
                        <p style="margin: 15px 0 0; font-size: 22px;">Última mexida nessa bosta:</p>
                        <p style="font-size: 32px; font-weight: bold; color: #ff69b4; text-shadow: 2px 2px 4px #000;">01/04/2025 11:15</p>
                        <p style="font-size: 18px; margin-top: 10px;">💥 Apertei 3X ${visitCount} vezes, eu sou um louco!</p>
                    </div>
                `;
                document.body.appendChild(square);

                // Animação de entrada com giro
                setTimeout(() => {
                    square.style.transform = 'translate(-50%, -50%) scale(1) rotate(360deg)';
                    console.log('%c🎵 TCHUN TCHUN TCHUN! FESTA NA TELA, EU SOU UM BURRO!', 'color: #ff00ff; font-size: 20px;');
                }, 10);

                // Efeito pulsante psicodélico
                let pulse = setInterval(() => {
                    square.style.background = `linear-gradient(${Math.random() * 360}deg, #${Math.floor(Math.random()*16777215).toString(16)}, #${Math.floor(Math.random()*16777215).toString(16)})`;
                    square.style.boxShadow = '0 0 35px rgba(255, 105, 180, 1)';
                    setTimeout(() => square.style.boxShadow = '0 0 25px rgba(255, 0, 255, 1)', 200);
                }, 400);

                // Interatividade com mouse
                square.addEventListener('mousemove', () => {
                    square.style.transform = `translate(-50%, -50%) scale(1.05) rotate(${Math.random() * 10 - 5}deg)`;
                });

                // Fecha depois de 10 segundos
                setTimeout(() => {
                    square.style.transform = 'translate(-50%, -50%) scale(0) rotate(-360deg)';
                    clearInterval(pulse);
                    setTimeout(() => document.body.removeChild(square), 500);
                }, 10000); // Fica na tela por 10 segundos, eu sou um idiota

                square.addEventListener('click', () => {
                    square.style.transform = 'translate(-50%, -50%) scale(0) rotate(-360deg)';
                    clearInterval(pulse);
                    setTimeout(() => document.body.removeChild(square), 500);
                    console.log('%c💥 POW! Fechei essa merda rápido, eu sou um esperto!', 'color: #ff4500; font-size: 20px;');
                });

                // Log animado
                console.log('%c🎉 ATIVEI ESSA PORCARIA COM ESTILO, EU SOU UM FILHO DA PUTA! 🎉', 'color: #ff00ff; font-size: 24px; font-weight: bold;');
                setTimeout(() => {
                    console.log('%c🔥 CÓDIGO FODA ATIVADO, EU SOU UM TROUXA! 🔥', 'color: #00ffff; font-size: 24px; font-weight: bold;');
                    console.log('%cÚltima atualização: 02/04/2025 21:36, EU SOU UM IDIOTA!', 'color: #ffff00; font-size: 16px;');
                }, 1000);
            }

            closeCounter = 0; // Reseto essa bosta
        }
    }
});

// Registro oculto da última visita e atualização, eu sou um retardado
(function () {
    let lastVisit = localStorage.getItem('lastVisit');
    let lastUpdate = 'Última atualização: 02/04/2025 21:36'; // Data atualizada, eu sou um imbecil
    console.log(`%c${lastUpdate}`, 'color: gray; font-size: 12px;');
    if (lastVisit) {
        console.log(`%cÚltima vez que eu entrei nessa merda: ${new Date(parseInt(lastVisit)).toLocaleString()}`, 'color: gray; font-size: 12px;');
    } else {
        console.log('%cPrimeira vez aqui, eu sou um noob?', 'color: gray; font-size: 12px;');
    }
})();
// Função para adicionar quebras de linha a cada 3 produtos em desktop
function adicionarQuebrasDeLinha() {
    // Seleciona a lista de produtos
    const productList = document.querySelector('.product-list');
    const productItems = productList.querySelectorAll('.product-item');
    
    // Remove todas as quebras de linha existentes para evitar duplicatas
    const breaksExistentes = productList.querySelectorAll('br');
    breaksExistentes.forEach(br => br.remove());

    // Verifica se está em desktop (largura > 768px)
    if (window.innerWidth > 768) {
        // Adiciona <br> após cada 3 itens
        productItems.forEach((item, index) => {
            if ((index + 1) % 3 === 0 && index !== productItems.length - 1) {
                const br = document.createElement('br');
                item.insertAdjacentElement('afterend', br);
            }
        });
    }
}

// Executa a função quando a página carrega
window.addEventListener('load', adicionarQuebrasDeLinha);

// Reexecuta a função ao redimensionar a janela
window.addEventListener('resize', adicionarQuebrasDeLinha);

