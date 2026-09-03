const input_texto = document.querySelector("#input-texto");
const texto = document.querySelector("#texto");
const contenedor = document.querySelector("#contenedor");


function actualizarTexto()
{
  texto.textContent = input_texto.value;
 
}

function actualizarCantidad(){
    
    contenedor.innerHTML = " ";
    for(let i = 0; i< cantidad.value; i++){
        crearImagen();
    }
}

function crearImagen()
{
    const imagen = document.createElement("img");
    imagen.src = "img/image.jpeg";
    document.body.appendChild(imagen)
}