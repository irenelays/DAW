# DAW
EJECUTAR SERVIDOR: py -m http.server 8000
CAMBIAR:
- FORO: arreglar que al ampliar el aside, el contenido al ampliarlo se vea correcto y no cause overflow. 
  -> también hay que arreglar el media
- BLOG: si se amplia demasiado, las fotos se desbordan, además de que se superpixelado.
  -> arreglar el aside, cuando se amplia tambien causa overflow por la derecha
- INICIARSESION/CREARCUENTA: responsivo cuando se amplia la pantalla, loscampos se desajustan poner @media
- GESTIONAR PERFIL: arreglar todo. Cuando se amplia mucho se desajusta widht 80%. rev

PREGUNTAR:
  - en html si es correcto la líne de bloque de código que abaruq easí la de línea a mirar blog
  - index en raiz y en /paginas ???



- quitar menuREsaltaritems y ponerlo en css
- falta entonces lo de los metodos DOM revisar
  
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
