// Fecha objetivo: 22 de abril de 2025 a las 21:00
let fecha = new Date("04/22/2025 21:00:00");
let msFecha = fecha.getTime();

let parrafoDias = document.querySelector("#dias");
let parrafoHoras = document.querySelector("#horas");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoSegundos = document.querySelector("#segundos");
let spanFecha = document.querySelector("#fecha");
let cuentaAtras = document.querySelector("#cuenta-atras");

// Mostrar la fecha en formato legible
spanFecha.innerText = fecha.toLocaleDateString() + " 21:00";

// Iniciar el intervalo para la cuenta regresiva
let intervalo = setInterval(() => {

    // Obtener el tiempo actual en milisegundos
    let hoy = new Date().getTime();

    // Calcular la diferencia entre la fecha objetivo y la actual
    let distancia = msFecha - hoy;

    // Unidades de tiempo en milisegundos
    let msPorDia = 1000 * 60 * 60 * 24;
    let msPorHora = 1000 * 60 * 60;
    let msPorMinuto = 1000 * 60;
    let msPorSegundo = 1000;

    // Calcular días, horas, minutos y segundos restantes
    let dias = Math.floor(distancia / msPorDia);
    let horas = Math.floor((distancia % msPorDia) / msPorHora);
    let minutos = Math.floor((distancia % msPorHora) / msPorMinuto);
    let segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo);

    // Mostrar los resultados en los elementos correspondientes
    parrafoDias.innerText = dias;
    parrafoHoras.innerText = horas < 10 ? "0" + horas : horas;
    parrafoMinutos.innerText = minutos < 10 ? "0" + minutos : minutos;
    parrafoSegundos.innerText = segundos < 10 ? "0" + segundos : segundos;

    // Verificar si ya hemos llegado a la fecha objetivo
    if (distancia < 0) {
        clearInterval(intervalo);
        cuentaAtras.innerHTML = "<p class='grande'>¡Ya llegamos!</p>"
    }

}, 1000); // Intervalo de 1 segundo
