document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const postsContainer = document.getElementById("posts");

    // Permitir desmarcar un radio (truco para hacerlos opcionales)
    let lastChecked = null;
    document.querySelectorAll('input[type="radio"][name="tematica"]').forEach(radio => {
        radio.addEventListener("click", function () {
            if (this === lastChecked) {
                this.checked = false;
                lastChecked = null;
            } else {
                lastChecked = this;
            }
        });
    });

    function renderPosts(posts) {
        postsContainer.innerHTML = "";

        if (posts.length === 0) {
            postsContainer.innerHTML = "<p>No hay entradas disponibles.</p>";
            return;
        }

        for (const post of posts) {
            const wrapper = document.createElement("div");
            wrapper.className = "wrapper";

            wrapper.innerHTML = `
                <a href="enconstruccion.html">
                    <div class="post">
                        <img src="${post.imagen}" alt="Img ${post.titulo}">
                        <div class="texto">
                            <h3>${post.titulo}</h3>
                            <p>${post.autor}</p>
                            <p>${new Date(post.fecha).toLocaleDateString()}</p>
                        </div>
                    </div>
                </a>
            `;

            postsContainer.appendChild(wrapper);
        }
    }

    // Mostrar todos los posts al inicio
    fetch("../js/posts.json")
        .then(res => res.json())
        .then(data => {
            data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
            renderPosts(data);
        })
        .catch(err => {
            postsContainer.innerHTML = "<p>Error al cargar los posts.</p>";
            console.error(err);
        });

    // Filtro al enviar formulario
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const radioTematica = document.querySelector('input[name="tematica"]:checked');
        const tematica = radioTematica ? radioTematica.value : null;

        const mes = document.getElementById("mes").value;
        const anho = document.getElementById("anho").value;

        fetch("../js/posts.json")
            .then(res => res.json())
            .then(posts => {
                const filtrados = posts.filter(post => {
                    const fecha = new Date(post.fecha);
                    const postMes = fecha.toLocaleString("default", { month: "long" }).toLowerCase();
                    const postAnho = fecha.getFullYear().toString();

                    const coincideTematica = tematica ? post.tematica === tematica : true;
                    const coincideMes = mes ? postMes === mes : true;
                    const coincideAnho = anho ? postAnho === anho : true;

                    return coincideTematica && coincideMes && coincideAnho;
                });

                filtrados.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

                renderPosts(filtrados);
            })
            .catch(err => {
                postsContainer.innerHTML = "<p>Error al aplicar el filtro.</p>";
                console.error(err);
            });
    });
});
