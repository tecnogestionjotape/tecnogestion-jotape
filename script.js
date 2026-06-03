console.log("TecnoGestión JotaPe cargado correctamente");

// Referencia al botón de volver arriba
const backToTopBtn = document.getElementById('scroll-to-top');

// Control del scroll unificado (Header + Botón)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    // 1. Lógica del Header (Tus animaciones existentes)
    if (window.scrollY > 50) {
        header.style.background = 'rgba(3, 8, 18, 0.9)';
        header.style.padding = '10px 80px';
    } else {
        header.style.background = 'transparent';
        header.style.padding = '20px 80px';
    }

    // 2. Lógica del Botón Volver Arriba
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});