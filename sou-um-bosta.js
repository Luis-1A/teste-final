if (window.location.pathname.includes('servicos.html')) {
    document.querySelectorAll('.btn-buy').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Evita comportamento padrão do botão
            let product = this.closest('.product-item');
            let title = product.querySelector('.title').innerText.trim();
            let priceElement = product.querySelector('ins');
            let price = priceElement ? priceElement.innerText.trim() : 'Preço não disponível';
            
            let message = `Olá, estou interessado no produto: ${title}, que está no valor de ${price}. Poderia me dar mais informações?`;
            let phoneNumber = '6191947884';
            let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            window.location.href = whatsappUrl;
        });
    });

    let closeCounter = 0;
    document.querySelectorAll('.btn-buy').forEach(button => {
        button.addEventListener('contextmenu', function (event) {
            event.preventDefault();
            closeCounter++;
            if (closeCounter === 3) {
                console.log('%cPensando...', 'color: blue; font-size: 20px;');
                setTimeout(() => {
                    console.log('%cCódigo JavaScript ativado!', 'color: green; font-size: 20px;');
                }, 1000);
                closeCounter = 0;
            }
        });
    });
}
