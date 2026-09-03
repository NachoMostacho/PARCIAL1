const personaje = document.querySelector("#personaje");

const animacion = personaje.animate(
    [
        {
            backgroundImage: "url(../img/1-01.png)",
            offset: 0
        },
        {
            backgroundImage: "url(../img/2-01.png)",
            offset: 1 / 6,
            transform: "translatex(100px)"
        },
        {
            backgroundImage: "url(../img/3-01.png)",
            offset: 2 / 6,
            transform: "translatex(200px)"
        },
        {
            backgroundImage: "url(../img/4-01.png)",
            offset: 3 / 6,
            transform: "translatex(300px)"
        },
        {
            backgroundImage: "url(../img/6-01.png)",
            offset: 4 / 6,
            transform: "translatex(400px)"
        },
        {
            backgroundImage: "url(../img/5-01.png)",
            offset: 5 / 6,
            transform: "translatex(500px)"
        },
        {
            backgroundImage: "url(../img/1-01.png)",
            offset: 1,
            transform: "translatex(600px)"
        }
    ],
    {
        duration: 600,
        iterations: Infinity,
        easing: "steps(6, end)"
    }
);

animacion.play();

