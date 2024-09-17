function removerCurtida(button) {
    // Encontra o contêiner da tabela e remove-o
    const tabelaContainer = button.parentElement;
    tabelaContainer.remove();

    // Mensagem opcional para confirmar a remoção
    alert('Receita removida dos curtidos!');
}
    