// ============================================================
//  TAREA — Videojuego: Piedra, Papel o Tijera
//  Tu código va en este archivo.
//  Leé el README.md para entender los requisitos.
// ============================================================

// ------------------------------------------------------------
//  PISTAS INICIALES (borrá los comentarios cuando termines)
// ------------------------------------------------------------

// Las opciones posibles del juego:
const opciones = ["piedra", "papel", "tijera"];

// Función que se llama al clickear un botón (ya está en el HTML):
// jugar("piedra") / jugar("papel") / jugar("tijera")

// Para mostrar algo en pantalla:
// document.getElementById("resultado").textContent = "texto";

// Para actualizar el puntaje del jugador:
// document.getElementById("puntajeJugador").textContent = número;

// Los emojis para mostrar la elección:
// 🪨 → piedra | 📄 → papel | ✂️ → tijera

// ------------------------------------------------------------
//  TU CÓDIGO EMPIEZA AQUÍ
// ------------------------------------------------------------
let puntajeJugador = 0;
let puntajeComputadora = 0;
let puntajeEmpates = 0;

let juegoReiniciado = false;

function jugar(eleccionJugador) {
  const elementoJugador = document.getElementById("eleccionJugador");
  const elementoPC = document.getElementById("eleccionPC");
  const elementoResultado = document.getElementById("resultado");

  const emojiJugador = obtenerEmojiJugador(eleccionJugador);

  const numeroAleatorio = obtenerNumeroAleatorio();
  const emojiPC = obtenerEmojiPC(numeroAleatorio);

  elementoJugador.textContent = emojiJugador;
  elementoPC.textContent = emojiPC;

  const resultadoRonda = obtenerResultadoRonda(emojiJugador, emojiPC);

  elementoResultado.textContent = resultadoRonda;

  const mensajeFinal = verificarGanadorJuego();

  if (mensajeFinal) {
    elementoResultado.textContent = mensajeFinal;
  }

  actualizarEstadoBotones(juegoReiniciado);
}

function obtenerNumeroAleatorio() {
  return Math.floor(Math.random() * 3) + 1;
}

function obtenerEmojiPC(numero) {
  switch (numero) {
    case 1:
      return "🪨";

    case 2:
      return "📄";

    case 3:
      return "✂️";
  }
}

function obtenerEmojiJugador(opcion) {
  switch (opcion) {
    case "piedra":
      return "🪨";

    case "papel":
      return "📄";

    case "tijera":
      return "✂️";
  }
}

function obtenerResultadoRonda(emojiJugador, emojiPC) {
  const jugadaJugador = convertirEmojiATexto(emojiJugador);
  const jugadaPC = convertirEmojiATexto(emojiPC);

  if (jugadaJugador === jugadaPC) {
    actualizarPuntaje("empate");
    return "¡Empate!";
  }

  if (
    (jugadaJugador === "papel" && jugadaPC === "piedra") ||
    (jugadaJugador === "tijera" && jugadaPC === "papel") ||
    (jugadaJugador === "piedra" && jugadaPC === "tijera")
  ) {
    actualizarPuntaje("jugador");
    return "¡Ganaste!";
  }

  actualizarPuntaje("computadora");
  return "¡Perdiste!";
}

function actualizarPuntaje(ganador) {
  switch (ganador) {
    case "jugador":
      puntajeJugador++;
      document.getElementById("puntajeJugador").textContent = puntajeJugador;
      break;

    case "empate":
      puntajeEmpates++;
      document.getElementById("puntajeEmpate").textContent = puntajeEmpates;
      break;

    case "computadora":
      puntajeComputadora++;
      document.getElementById("puntajePC").textContent = puntajeComputadora;
      break;
  }
}

function verificarGanadorJuego() {
  if (puntajeJugador === 2) {
    return "¡Fin del juego! Ganaste la partida";
  }

  if (puntajeComputadora === 2) {
    return "¡Fin del juego! Ganó la computadora";
  }

  return null;
}

function actualizarEstadoBotones(juegoReiniciado) {
  const botones = document.getElementsByClassName("btn-opcion");

  if (juegoReiniciado) {
    for (let i = 0; i < botones.length; i++) {
      botones[i].disabled = false;
    }

    document.getElementById("resultado").textContent = "";

    return;
  }

  if (puntajeJugador === 2 || puntajeComputadora === 2) {
    for (let i = 0; i < botones.length; i++) {
      botones[i].disabled = true;
    }
  }
}

function reiniciar() {
  puntajeJugador = 0;
  puntajeComputadora = 0;
  puntajeEmpates = 0;

  document.getElementById("eleccionJugador").textContent = "❓";
  document.getElementById("eleccionPC").textContent = "❓";

  document.getElementById("puntajeJugador").textContent = 0;
  document.getElementById("puntajeEmpate").textContent = 0;
  document.getElementById("puntajePC").textContent = 0;

  document.getElementById("resultado").textContent = "";

  juegoReiniciado = true;

  actualizarEstadoBotones(juegoReiniciado);

  juegoReiniciado = false;
}

function convertirEmojiATexto(emoji) {
  switch (emoji) {
    case "🪨":
      return "piedra";

    case "📄":
      return "papel";

    case "✂️":
      return "tijera";
  }
}
