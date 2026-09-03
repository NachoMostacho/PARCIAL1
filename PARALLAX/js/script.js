const titulo = document.querySelector("#titulo");
const montañas = document.querySelector("#montañas");
const perrito = document.querySelector("#perrito");
const hojas = document.querySelector("#hojas");
const contenedor = document.querySelector("#contenedor_parallax");

const duracion = 1000;

const animacion = [ 
    titulo.animate(
    [
        { transform: "translateX(0)" },
        { transform: "translateX(-100vw)" }
],
    {
        duration: duracion,
        fill: "both",
        easing: "linear"
    }
),
montañas.animate(
    [
        {transform: "translateY(0)"},
        {transform: "translateY(40vw)"}
    ],
    {
        duration: duracion,
        fill: "both",
        easing: "linear"
    }
),
perrito.animate(
    [
        {transform: "translateY(0)"},
        {transform: "translateY(-60vw)"}
    ],
    {
        duration: duracion,
        fill: "both",
        easing: "linear"
    }
),
hojas.animate(
    [
        {transform: "translateY(0)"},
        {transform: "translateY(40vw)"}
    ],
    {
        duration: duracion,
        fill: "both",
        easing: "linear"
    }
)
]

/*animacion.pause();
animacion.play();
animacion.cancel();
animacion.reverse();*/

for(let i = 0; i < animacion.length; i++) {
    animacion(i).pause();
}

/* Calcular el progreso de la animacion */

function actualizarParallax(){
    const distancia = contenedor.offsetheight;
    const progreso = Math.min(window.scrollY / distancia, 1);
    const tiempo = progreso * distancia;

    animacion.forEach((elemento)=>{
        elemento.currentTime = tiempo;
    })

}

window.addEventListener("scroll", actualizarParallax);
actualizarParallax();