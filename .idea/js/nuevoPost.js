// Acceso a elementos
const ventana = document.getElementById('emergenteAddPost');
const btnAbrir = document.querySelector('#addpost a');
const btnCerrar = document.getElementById('cerrarEmergente');
const btnPublicar = document.getElementById('btnPublicar');

// Abrir ventana emergente
btnAbrir.addEventListener('click', (e) => {
    e.preventDefault(); // Evita ir al enlace
    ventana.style.display = 'block';
});

// Cerrar con la X
btnCerrar.addEventListener('click', () => {
    ventana.style.display = 'none';
});

// Cerrar haciendo clic fuera
window.addEventListener('click', (e) => {
    if (e.target === ventana) {
        ventana.style.display = 'none';
    }
});

// Publicar (simulado)
btnPublicar.addEventListener('click', () => {
    alert('Publicación subida (falta backend)');
    ventana.style.display = 'none';
});