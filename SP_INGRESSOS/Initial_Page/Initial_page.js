document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todas as seções com a classe 'cinema-cards' e seus respectivos controles
    const cinemaSections = document.querySelectorAll(".cinema_sp, .custo_beneficio, .7estrelas");
    
    // Função para atualizar a posição do carrossel de uma seção específica
    function updateCarrosselPosition(slider, currentIndex) {
        const slides = slider.querySelectorAll(".cinema-cards .card");
        const totalSlides = slides.length;

        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.style.transform = 'translateX(0)'; // Exibe o slide atual
            } else if (index < currentIndex) {
                slide.style.transform = 'translateX(-100%)'; // Move os slides anteriores para a esquerda
            } else {
                slide.style.transform = 'translateX(100%)'; // Move os slides futuros para a direita
            }
            slide.style.transition = "transform 0.5s ease-in-out"; // Transição suave
        });

        // Atualiza os indicadores do carrossel
        const indicators = slider.querySelectorAll(".slider-indicators button");
        indicators.forEach((indicator, idx) => {
            indicator.classList.toggle("active", idx === currentIndex);
        });
    }

    cinemaSections.forEach((section) => {
        const slider = section.querySelector(".slider"); // Carrossel específico
        let currentIndex = 0; // Índice inicial para o carrossel desta seção
        const slides = slider.querySelectorAll(".cinema-cards .card");
        const totalSlides = slides.length;

        // Função para mover para o próximo slide
        function moveToNext() {
            currentIndex = (currentIndex + 1) % totalSlides; // Avança para o próximo índice, retorna ao início se ultrapassar o número de slides
            updateCarrosselPosition(slider, currentIndex);
        }

        // Função para mover para o slide anterior
        function moveToPrevious() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Retrocede para o índice anterior, volta ao último slide se for menor que 0
            updateCarrosselPosition(slider, currentIndex);
        }

        // Adiciona os eventos para os botões de navegação
        const prevButton = section.querySelector(".slider-prev");
        const nextButton = section.querySelector(".slider-next");

        prevButton.addEventListener("click", moveToPrevious);
        nextButton.addEventListener("click", moveToNext);

        // Adiciona a navegação pelos indicadores
        const indicators = section.querySelectorAll(".slider-indicators button");
        indicators.forEach((indicator, idx) => {
            indicator.addEventListener("click", () => {
                currentIndex = idx;
                updateCarrosselPosition(slider, currentIndex);
            });
        });

        // Inicializa a posição do carrossel para essa seção
        updateCarrosselPosition(slider, currentIndex);
    });

    // Gerenciar o comportamento do botão do footer durante o scroll
    const footerButton = document.querySelector('footer button');
    document.addEventListener("scroll", function () {
        if (window.scrollY > 100) {  // Quando o scroll passar de 100px
            footerButton.style.opacity = '1'; // O botão aparece
        } else {
            footerButton.style.opacity = '0'; // O botão desaparece
        }
    });
});
