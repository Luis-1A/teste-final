
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
