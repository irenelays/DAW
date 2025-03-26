// JES6
const ventana = document.getElementById('emergenteAddPost');
const btnAbrir = document.querySelector('#addpost a');
const btnCerrar = document.getElementById('cerrarEmergente');
const btnPublicar = document.getElementById('btnPublicar');

function resetearFormulario() {
    document.getElementById('imagenPost').value = ''; // Resetea la imagen seleccionada
    document.querySelector('.container-emergente textarea').value = ''; // Limpia la descripción
}

// Abrir ventana emergente
btnAbrir.addEventListener('click', (e) => {
    e.preventDefault(); // Evita ir al enlace
    ventana.style.display = 'block';
});

// Cerrar con la X
btnCerrar.addEventListener('click', () => {
    ventana.style.display = 'none';
});

btnPublicar.addEventListener('click', () => {
    alert('Publicación subida (falta backend)');
    ventana.style.display = 'none';
    resetearFormulario(); // Limpia el contenido
});
