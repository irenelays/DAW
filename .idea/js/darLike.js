document.addEventListener("DOMContentLoaded", () => {
    const botonesLike = document.querySelectorAll(".like-btn");

    botonesLike.forEach(boton => {
        boton.addEventListener("click", () => {
            const estrella = boton.querySelector(".estrella");
            const srcActual = estrella.getAttribute("src");

            if (srcActual.includes("Norellena")) {
                estrella.setAttribute("src", "../imagenes/estrellarellena.svg");
            } else {
                estrella.setAttribute("src", "../imagenes/estrellaNorellena.svg");
            }
        });
    });
});
