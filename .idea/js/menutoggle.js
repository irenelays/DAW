document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    toggle.addEventListener("click", function () { // Si se hace click en toggle, el menú se mostrará o se ocultará (solo en para un widht pequeño)
        menu.classList.toggle("show");
    });
});