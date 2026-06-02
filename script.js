// Por ahora dejamos el script para futuras animaciones o validaciones
console.log("TecnoGestión JotaPe cargado correctamente");

// Ejemplo: Cambiar el header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(3, 8, 18, 0.9)';
        header.style.padding = '10px 80px';
    } else {
        header.style.background = 'transparent';
        header.style.padding = '20px 80px';
    }
});