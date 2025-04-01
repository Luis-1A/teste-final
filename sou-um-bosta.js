document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Evita comportamento padrão do botão
        let product = this.closest('.product-item');
        if (!product) return;

        let titleElement = product.querySelector('.title');
        let title = titleElement ? titleElement.innerText.trim() : 'Produto desconhecido';

        let phoneNumber = '5561993191969';
        let message = `Olá, estou interessado no produto: ${title}. Poderia me dar mais informações?`;
        let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Criar a caixinha de aviso
        let alertBox = document.createElement('div');
        alertBox.style.position = 'fixed';
        alertBox.style.top = '50%';
        alertBox.style.left = '50%';
        alertBox.style.transform = 'translate(-50%, -50%)';
        alertBox.style.backgroundColor = '#007bff';
        alertBox.style.color = 'white';
        alertBox.style.padding = '20px';
        alertBox.style.borderRadius = '10px';
        alertBox.style.textAlign = 'center';
        alertBox.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
        alertBox.style.zIndex = '1000';
        alertBox.innerHTML = `<p>Você será direcionado para o WhatsApp para saber mais sobre: <strong>${title}</strong>.</p><p>Aguarde <span id='countdown'>3</span> segundos...</p>`;
        document.body.appendChild(alertBox);
        
        let countdown = 3;
        let interval = setInterval(() => {
            countdown--;
            document.getElementById('countdown').innerText = countdown;
            if (countdown === 0) {
                clearInterval(interval);
                document.body.removeChild(alertBox);
                window.location.href = whatsappUrl;
            }
        }, 1000);
    });
});

let closeCounter = 0;
document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() === 'x') {
        closeCounter++;
        if (closeCounter === 3) {
            console.log('%cPensando...', 'color: blue; font-size: 20px;');
            setTimeout(() => {
                console.log('%cCódigo JavaScript ativado!', 'color: green; font-size: 20px;');
            }, 1000);
            closeCounter = 0;
        }
    }
});
