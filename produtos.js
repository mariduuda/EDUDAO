document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Visualizando produto...");
            // Aqui você poderia redirecionar para uma página de detalhe do produto
            // window.location.href = 'detalhes-do-produto.html'; 
        });
    });
});
