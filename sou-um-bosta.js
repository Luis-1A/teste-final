document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Evita comportamento padrão do botão
        let product = this.closest('.product-item');
        if (!product) return;

        let titleElement = product.querySelector('.title');
        let title = titleElement ? titleElement.innerText.trim() : 'Produto desconhecido';

        alert(`Você será direcionado para o WhatsApp para saber mais sobre: ${title}. Aguarde...`);

        let phoneNumber = '5561993191969';
        let message = `Olá, estou interessado no produto: ${title}. Poderia me dar mais informações?`;
        let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        setTimeout(() => {
            window.location.href = whatsappUrl;
        }, 2000); // Aguarda 2 segundos antes de redirecionar
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
