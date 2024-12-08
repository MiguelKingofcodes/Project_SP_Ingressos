// Seleciona todas as seções com a classe 'cinema-cards'
const cinemaSections = document.querySelectorAll(".cinema_sp, .custo_beneficio, .7estrelas");

// Função para atualizar a posição do carrossel de uma seção específica
function updateCarrosselPosition(section, currentIndex) {
    const cards = section.querySelectorAll(".cinema-cards .card"); // Cards dentro da seção
    cards.forEach((card, index) => {
        if (index === currentIndex) {
            card.style.transform = 'translateX(0)'; // Exibe o card atual
        } else if (index < currentIndex) {
            card.style.transform = 'translateX(-100%)'; // Move os cards anteriores para a esquerda
        } else {
            card.style.transform = 'translateX(100%)'; // Move os cards futuros para a direita
        }
        card.style.transition = "transform 0.5s ease-in-out"; // Transição suave
    });
}

// Adiciona os controles para cada seção de carrossel
cinemaSections.forEach((section) => {
    let currentIndex = 0; // Índice inicial para o carrossel desta seção

    // Função para mover para o próximo card
    function moveToNext() {
        currentIndex++; // Avança para o próximo índice
        const totalCards = section.querySelectorAll(".cinema-cards .card").length;
        if (currentIndex >= totalCards) {
            currentIndex = 0; // Se chegar ao fim, volta para o início
        }
        updateCarrosselPosition(section, currentIndex); // Atualiza a posição do carrossel
    }

    // Função para mover para o card anterior
    function moveToPrevious() {
        currentIndex--; // Retrocede para o índice anterior
        const totalCards = section.querySelectorAll(".cinema-cards .card").length;
        if (currentIndex < 0) {
            currentIndex = totalCards - 1; // Se for menor que 0, vai para o último card
        }
        updateCarrosselPosition(section, currentIndex); // Atualiza a posição do carrossel
    }

    // Configuração dos botões de navegação para cada seção
    section.querySelector(".prevButton").addEventListener("click", moveToPrevious);
    section.querySelector(".nextButton").addEventListener("click", moveToNext);

    // Inicializa a posição do carrossel para essa seção
    updateCarrosselPosition(section, currentIndex);
});



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
