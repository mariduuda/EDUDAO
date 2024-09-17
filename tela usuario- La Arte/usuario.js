const likedRecipesBtn = document.getElementById('liked-recipes-btn');
const savedRecipesBtn = document.getElementById('saved-recipes-btn');

// Função para simular navegação para a página de receitas curtidas
likedRecipesBtn.addEventListener('click', () => {
    alert('Navegando para as Receitas Curtidas...');
    // Aqui você pode redirecionar para a página de receitas curtidas
    window.location.href = 'curtidas.html'; // Substitua pelo link real
});

// Função para simular navegação para a página de receitas salvas
savedRecipesBtn.addEventListener('click', () => {
    alert('Navegando para as Receitas Salvas...');
    // Aqui você pode redirecionar para a página de receitas salvas
    window.location.href = 'salvas.html'; // Substitua pelo link real
});
