const figura = document.getElementById("figura");
const eliminar = document.getElementById("eliminar");
const pantalla = document.getElementById("pantalla");
const contador = document.getElementById("contador");
const mensaje = document.getElementById("mensaje");

const MAX_FIGURAS = 5;


// Cuando se selecciona una figura
figura.addEventListener("change", function () {

    const tipoFigura = figura.value;

    // Si no seleccionó ninguna figura
    if (tipoFigura === "") {
        return;
    }

    // Verificar si ya hay 5 figuras
    if (pantalla.children.length >= MAX_FIGURAS) {

        mensaje.textContent = "No se pueden agregar más figuras";
        mensaje.classList.add("mensaje-error");

        figura.value = "";

        return;
    }

    // Crear una nueva figura
    const nuevaFigura = document.createElement("div");

    // Agregar la clase correspondiente
    nuevaFigura.classList.add(tipoFigura);

    // Agregar la figura a la pantalla
    pantalla.appendChild(nuevaFigura);

    // Actualizar contador
    contador.textContent = `Figuras: ${pantalla.children.length}/5`;

    // Mostrar mensaje
    mensaje.textContent = "Figura agregada correctamente";
    mensaje.classList.remove("mensaje-error");
    mensaje.classList.add("mensaje-exito");

    // Regresar el select a su opción inicial
    figura.value = "";
});


// Eliminar la última figura
eliminar.addEventListener("click", function () {

    const cantidadFiguras = pantalla.children.length;

    if (cantidadFiguras === 0) {

        mensaje.textContent = "No hay figuras para eliminar";
        mensaje.classList.add("mensaje-error");

        return;
    }

    // Seleccionar la última figura
    const ultimaFigura = pantalla.lastElementChild;

    // Eliminarla
    ultimaFigura.remove();

    // Actualizar contador
    contador.textContent = `Figuras: ${pantalla.children.length}/5`;

    mensaje.textContent = "Última figura eliminada";
    mensaje.classList.remove("mensaje-error");
});