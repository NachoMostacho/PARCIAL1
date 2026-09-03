const formulario = document.querySelector("#formulario");
const Input_file = document.querySelector("#file-image");

function ObtenerDatos()
{
    console.log("datos");
 const datosFormulario = new FormData(formulario);

 const datos  = Object.fromEntries(datosFormulario.entries());
 
 if (datos.nombre !== "" && datos.apellido !=="" && datos.correo !== "")
 {
    if(Input_file.files[0])
    {
        if (Input_file.files[0].type === "image/jpeg" ||
            Input_file.files[0].type === "image/png"){
            const imagen = Input_file.files[0];
            const lectorImagen = new FileReader();
            lectorImagen.onload = (dato) =>{
                console.log(dato.target.result);
                const url = dato.target.result;
                crearTarjeta(datos, url);
            }

            lectorImagen.readAsDataURL(imagen);
        }
    }
    
 }
}

function crearTarjeta(datos, urlImagen)
{
const tarjeta = document.createElement("div");
    const nombre = document.createElement("p");
    const apellido = document.createElement("p");
    const correo = document.createElement("p");
    const imagen = document.createElement("img");

    nombre.textContent = datos.nombre;
    apellido.textContent = datos.apellido;
    correo.textContent = datos.correo;
    imagen.src = urlImagen

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(apellido);
    tarjeta.appendChild(correo);
    tarjeta.appendChild(imagen);

    document.body.appendChild(tarjeta);
}


//.   ()=>   Funcion flecha, es lo mismo que declarar una function