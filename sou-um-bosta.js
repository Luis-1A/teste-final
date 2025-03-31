document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Evita comportamento padrão do botão
        let product = this.closest('.product-item');
        if (!product) return;

        let titleElement = product.querySelector('.title');
        let priceElement = product.querySelector('ins');

        let title = titleElement ? titleElement.innerText.trim() : 'Produto desconhecido';
        let price = priceElement ? priceElement.innerText.trim() : 'Preço não disponível';

        let message = `Olá, estou interessado no produto: ${title}, que está no valor de ${price}. Poderia me dar mais informações?`;
        let phoneNumber = '6191947884';
        let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        window.location.href = whatsappUrl;
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
