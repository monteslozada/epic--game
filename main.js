
alert('bienvenidos a game store');
let consolaIngresada;
const carrito=[];
let precioTotal=0;
const precioCambio= 1000;
let seguirCambiando=true;

while (consolaIngresada !== "1" && consolaIngresada !== "2") {
  consolaIngresada = prompt("¿Tiene un juego de PS4 o Xbox One?\n1. PS4\n2. Xbox One");
}

do {
  let juegosCompatibles;
  if (consolaIngresada === "1") {
    let lanzamientoIngresado;
    while (isNaN(lanzamientoIngresado)) {
      lanzamientoIngresado = parseInt(prompt("Ingrese el año de lanzamiento del juego que desea cambiar:"));
    }
    juegosCompatibles = juegosPS4.filter((juego) => juego.lanzamiento === lanzamientoIngresado);
  } else if (consolaIngresada === "2") {
    let lanzamientoIngresado;
    while (isNaN(lanzamientoIngresado)) {
      lanzamientoIngresado = parseInt(prompt("Ingrese el año de lanzamiento del juego que desea cambiar:"));
    }
    juegosCompatibles = juegosXboxOne.filter((juego) => juego.lanzamiento === lanzamientoIngresado);
  }

  while (juegosCompatibles.length === 0) {
    alert("Lo siento, no hay juegos compatibles.");
    let lanzamientoIngresado;
    while (isNaN(lanzamientoIngresado)) {
      lanzamientoIngresado = parseInt(prompt("Ingrese el año de lanzamiento del juego que desea cambiar:"));
    }
    if (consolaIngresada === "1") {
      juegosCompatibles =  let = juegosPS4.filter((juego) => juego.lanzamiento === lanzamientoIngresado);
    } else if (consolaIngresada === "2") {
      juegosCompatibles = let = juegosXboxOne.filter((juego) => juego.lanzamiento === lanzamientoIngresado);
    }
  }

  const listaJuegos = juegosCompatibles.map((juego, index) => `${index + 1}. ${juego.nombre}`).join("\n");
  const juegoElegido = parseInt(prompt(`Los juegos compatibles con el año de lanzamiento ingresado son:\n${listaJuegos}\nElija un número:`));

  while (isNaN(juegoElegido) || juegoElegido < 1 || juegoElegido > juegosCompatibles.length) {
    alert("El número ingresado no es válido.");
    const listaJuegos = juegosCompatibles.map((juego, index) => `${index + 1}. ${juego.nombre}`).join("\n");
    juegoElegido = parseInt(prompt(`Los juegos compatibles con el año de lanzamiento ingresado son:\n${listaJuegos}\nElija un número:`));
  }

  const juegoSeleccionado = juegosCompatibles[juegoElegido - 1];
  carrito.push(juegoSeleccionado);
  precioTotal+=precioCambio;
  seguirCambiando = confirm("¿Desea seguir cambiando otro juego?");
} while (seguirCambiando);

let juegosSeleccionados="";
carrito.forEach((juego, index) => juegosSeleccionados+= `${index + 1}. ${juego.nombre}\n`);

alert(`Los juegos seleccionados son:\n${juegosSeleccionados}\nEl total de los cambios es $${precioTotal}.`);
