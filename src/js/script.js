// ===== Menu Hambúrguer =====
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

// ===== Dropdown Menu (Mobile) =====
const dropdown = document.querySelector('.dropdown');
const dropdownLink = document.querySelector('.dropdown > .nav-link');

dropdownLink.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) { // Apenas no mobile
        e.preventDefault(); // Evita o comportamento padrão do link
        dropdown.classList.toggle('active'); // Abre/fecha o dropdown
    }
});

// ===== Scroll Suave com Deslocamento Manual =====
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o comportamento padrão do link

        // Obtém o ID da seção alvo
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calcula a posição do elemento alvo
            const offset = 60; // Altura do menu fixo
            const targetPosition = targetElement.offsetTop - offset;

            // Rola a página até a posição calculada
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Adiciona rolagem suave
            });

            // Fecha o menu no mobile
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navbar.classList.remove('active');
            }
        }
    });
});

// ===== Inicializar Swiper (Carrossel de Serviços) =====
const swiperServices = new Swiper('#services .swiper-container', {
    loop: true, // Ativa o loop infinito
    autoplay: {
        delay: 5500, // Muda de slide a cada 5.5 segundos
        disableOnInteraction: false, // Continua o autoplay após interação do usuário
    },
    pagination: {
        el: '#services .swiper-pagination', // Elemento onde o pagination será renderizado
        clickable: true, // Permite clicar nos pontos para mudar de slide
    },
    navigation: {
        nextEl: '#services .swiper-button-next', // Classe da seta de próxima
        prevEl: '#services .swiper-button-prev', // Classe da seta de anterior
    },
    slidesPerView: 1, // Mostra 1 slide por vez em todas as telas
    spaceBetween: 20, // Espaçamento entre os slides
    centeredSlides: true, // Centraliza o slide ativo
    on: {
        // Reinicia o autoplay após interação do usuário
        slideChange: function () {
            this.autoplay.stop(); // Para o autoplay
            this.autoplay.start(); // Reinicia o autoplay
        },
    },
});

// ===== Galeria em Tela Cheia =====
const galleryImages = document.querySelectorAll('.gallery-image');
const galleryVideos = document.querySelectorAll('.gallery-video');
const fullscreenOverlay = document.querySelector('.fullscreen-overlay');
const fullscreenImage = document.querySelector('.fullscreen-image');
const fullscreenVideo = document.querySelector('.fullscreen-video');
const closeBtn = document.querySelector('.close-btn');

// Função para abrir imagem ou vídeo em tela cheia
function openFullscreen(element) {
    if (element.tagName === 'IMG') {
        fullscreenImage.src = element.src;
        fullscreenImage.style.display = 'block';
        fullscreenVideo.style.display = 'none';
    } else if (element.tagName === 'VIDEO') {
        fullscreenVideo.src = element.querySelector('source').src;
        fullscreenVideo.style.display = 'block';
        fullscreenImage.style.display = 'none';
    }
    fullscreenOverlay.style.display = 'flex';
}

// Função para fechar a tela cheia
function closeFullscreen() {
    fullscreenOverlay.style.display = 'none';
    fullscreenVideo.pause(); // Pausa o vídeo ao fechar
}

// Adiciona eventos para as imagens
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        openFullscreen(image);
    });
});

// Adiciona eventos para os vídeos
galleryVideos.forEach(video => {
    video.addEventListener('click', () => {
        openFullscreen(video);
    });
});

// Fecha ao clicar no botão "X"
closeBtn.addEventListener('click', closeFullscreen);

// Fecha ao clicar fora da imagem/vídeo
fullscreenOverlay.addEventListener('click', (e) => {
    if (e.target === fullscreenOverlay) {
        closeFullscreen();
    }
});