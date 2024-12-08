// JavaScript para garantir que o botão do footer seja visível e fixe no fundo da tela durante o scroll
document.addEventListener("scroll", function() {
    const footerButton = document.querySelector('footer button');
    // Adiciona a classe que fixa o botão no rodapé
    if (window.scrollY > 100) {  // Quando o scroll passar de 100px, pode adicionar algum efeito
        footerButton.style.opacity = '1';  // Exemplo de interação com o scroll
    } else {
        footerButton.style.opacity = '0';  // Faz o botão desaparecer quando o scroll estiver no topo
    }
});
