document.addEventListener("DOMContentLoaded", function () {
    const itemsMenu = document.getElementsByClassName("item-menu");

    for (let i = 0; i < itemsMenu.length; i++) {
        const enlace = itemsMenu[i].querySelector("a"); // accedemos al <a> dentro del <li>

        enlace.style.transition = "background-color 0.3s";

        enlace.addEventListener("mouseover", function () {
            enlace.style.backgroundColor = "#f5c39c"; // color más visible
        });

        enlace.addEventListener("mouseout", function () {
            enlace.style.backgroundColor = ""; // restaurar
        });
    }
});
