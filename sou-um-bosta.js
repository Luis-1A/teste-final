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
        alertBox.style.backgroundColor = '#ff4500'; // Vermelho pra te acordar, seu burro
        alertBox.style.color = 'white';
        alertBox.style.padding = '20px';
        alertBox.style.borderRadius = '15px';
        alertBox.style.textAlign = 'center';
        alertBox.style.boxShadow = '0 0 15px rgba(255, 69, 0, 0.8)';
        alertBox.style.zIndex = '1000';
        alertBox.style.transition = 'transform 0.3s ease-in-out';
        alertBox.innerHTML = `<p>Você vai pro WhatsApp saber mais sobre: <strong>${title}</strong>!</p><p>Aguarde <span id='countdown'>3</span> segundos, seu preguiçoso!</p>`;
        document.body.appendChild(alertBox);

        setTimeout(() => alertBox.style.transform = 'translate(-50%, -50%) scale(1)', 10);

        let countdown = 3; // Contagem regressiva, seu imbecil
        let interval = setInterval(() => {
            countdown--;
            document.getElementById('countdown').innerText = countdown;
            if (countdown === 0) {
                clearInterval(interval); // Para essa merda
                alertBox.style.transform = 'translate(-50%, -50%) scale(0)';
                setTimeout(() => {
                    document.body.removeChild(alertBox); // Tira essa bosta depois de 3 segundos
                    window.location.href = whatsappUrl; // Vai pro WhatsApp, seu trouxa
                }, 300);
            }
        }, 1000);

        // Salva a última visita no localStorage, seu retardado
        localStorage.setItem('lastVisit', Date.now());
    });
});

// Carrega o contador de visitas do localStorage ou inicia em 0
let visitCount = parseInt(localStorage.getItem('xVisitCount')) || 0;
let closeCounter = 0; // Contador pra tecla X, seu idiota
let lastXTime = parseInt(localStorage.getItem('lastXTime')) || 0; // Última vez que apertou 3 vezes o X
const oneHour = 3600 * 1000; // 1 hora em milissegundos, seu burro

document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() === 'x') { // Apertou X, seu otário?
        closeCounter++; // Conta essa porra

        if (closeCounter === 3) { // Três vezes, seu filho da mãe!
            visitCount++; // Incrementa o número de vezes que apertou 3 Xs
            localStorage.setItem('xVisitCount', visitCount); // Salva essa merda
            localStorage.setItem('lastXTime', Date.now()); // Salva o tempo atual, seu babaca

            // Verifica se já passou mais de 3 vezes em menos de 1 hora
            let timeSinceLastX = Date.now() - lastXTime;
            if (visitCount > 3 && timeSinceLastX < oneHour) {
                let insults = [
                    'SEU FILHO DA PUTA, JÁ É A ' + visitCount + 'ª VEZ! PARA COM ESSA MERDA!',
                    'VOCÊ É UM IDIOTA COMPLETO, SEU TROUXA! JÁ MOSTREI ESSA PORRA ' + visitCount + ' VEZES!',
                    'SEU DESGRAÇADO, VAI TOMAR NO CU! APERTOU 3X ' + visitCount + ' VEZES, SEU LIXO!',
                    'SEU IMBECIL DO CARALHO, PARA DE APERTAR ESSA BOSTA DE X! JÁ FORAM ' + visitCount + ' VEZES!',
                    'SEU MERDA, TÁ ACHANDO QUE É BRINCADEIRA? ' + visitCount + ' VEZES EM MENOS DE 1 HORA, SEU NOJENTO!'
                ];
                let randomInsult = insults[Math.floor(Math.random() * insults.length)];
                console.log(`%c${randomInsult}`, 'color: #ff0000; font-size: 24px; font-weight: bold;');

                // Caixa de xingamento na tela
                let insultBox = document.createElement('div');
                insultBox.style.position = 'fixed';
                insultBox.style.top = `${Math.random() * 80 + 10

}%`; // Aleatório, seu burro
                insultBox.style.left = `${Math.random() * 80 + 10}%`;
                insultBox.style.transform = 'scale(0)';
                insultBox.style.backgroundColor = '#ff0000'; // Vermelho pra te assustar, seu idiota
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
                }, 3000); // Fica na tela por 3 segundos, seu retardado
            } else {
                // Quadrado divertido se não passou do limite
                let square = document.createElement('div');
                square.style.position = 'fixed';
                square.style.top = '50%';
                square.style.left = '50%';
                square.style.transform = 'translate(-50%, -50%) scale(0) rotate(0deg)';
                square.style.width = '400px';
                square.style.height = '300px';
                square.style.background = 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00)'; // Cores loucas, seu retardado
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
                        <h2 style="margin: 0; font-size: 36px; text-shadow: 3px 3px 5px #000;">🎉 ATUALIZAÇÃO FODA, SEU MERDA! 🎉</h2>
                        <p style="margin: 15px 0 0; font-size: 22px;">Última mexida nessa bosta:</p>
                        <p style="font-size: 32px; font-weight: bold; color: #ff69b4; text-shadow: 2px 2px 4px #000;">01/04/2025 11:15</p>
                        <p style="font-size: 18px; margin-top: 10px;">💥 Você apertou 3X ${visitCount} vezes, seu louco!</p>
                    </div>
                `;
                document.body.appendChild(square);

                // Animação de entrada com giro
                setTimeout(() => {
                    square.style.transform = 'translate(-50%, -50%) scale(1) rotate(360deg)';
                    console.log('%c🎵 TCHUN TCHUN TCHUN! FESTA NA TELA, SEU BURRO!', 'color: #ff00ff; font-size: 20px;');
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

                // Fecha depois de 3 segundos
                setTimeout(() => {
                    square.style.transform = 'translate(-50%, -50%) scale(0) rotate(-360deg)';
                    clearInterval(pulse);
                    setTimeout(() => document.body.removeChild(square), 500);
                }, 3000); // Fica na tela por 3 segundos, seu idiota

                square.addEventListener('click', () => {
                    square.style.transform = 'translate(-50%, -50%) scale(0) rotate(-360deg)';
                    clearInterval(pulse);
                    setTimeout(() => document.body.removeChild(square), 500);
                    console.log('%c💥 POW! Fechou essa merda rápido, seu esperto!', 'color: #ff4500; font-size: 20px;');
                });

                // Log animado
                console.log('%c🎉 ATIVOU ESSA PORCARIA COM ESTILO, SEU FILHO DA PUTA! 🎉', 'color: #ff00ff; font-size: 24px; font-weight: bold;');
                setTimeout(() => {
                    console.log('%c🔥 CÓDIGO FODA ATIVADO, SEU TROUXA! 🔥', 'color: #00ffff; font-size: 24px; font-weight: bold;');
                    console.log('%cÚltima atualização: 01/04/2025 11:15, SEU IDIOTA!', 'color: #ffff00; font-size: 16px;');
                }, 1000);
            }

            closeCounter = 0; // Reseta essa bosta
        }
    }
});

// Registro oculto da última visita e atualização, seu retardado
(function () {
    let lastVisit = localStorage.getItem('lastVisit');
    let lastUpdate = 'Última atualização: 01/04/2025 11:15'; // Data atualizada, seu imbecil
    console.log(`%c${lastUpdate}`, 'color: gray; font-size: 12px;');
    if (lastVisit) {
        console.log(`%cÚltima vez que você entrou nessa merda: ${new Date(parseInt(lastVisit)).toLocaleString()}`, 'color: gray; font-size: 12px;');
    } else {
        console.log('%cPrimeira vez aqui, seu noob?', 'color: gray; font-size: 12px;');
    }
})();