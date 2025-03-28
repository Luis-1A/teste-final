document.addEventListener("DOMContentLoaded", function () {
    const divTest = document.getElementById("calabresa");

    if (divTest) {
        divTest.style.border = "2px solid red"; // Adiciona borda vermelha para testar
        divTest.style.padding = "10px";
    } else {
        console.log("A div 'calabresa' não foi encontrada.");
    }
});
