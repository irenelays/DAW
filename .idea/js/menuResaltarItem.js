document.addEventListener("DOMContentLoaded", function () {
    const items = document.getElementsByClassName("menu-item");

    for (let i = 0; i < items.length; i++) {
        const enlace = items[i].querySelector("a");

        enlace.addEventListener("mouseover", function () {
            enlace.classList.add("hover");
        });

        enlace.addEventListener("mouseout", function () {
            enlace.classList.remove("hover");
        });
    }
});
