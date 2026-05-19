/* ==========================================================================
   02 — Condicionales | 10 Katas
   Completá cada función RETORNANDO el valor pedido.
   ⚠️  NO uses console.log() — las funciones deben RETORNAR el resultado.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 11 — Signo del Número
   Dado un número, retorná "positivo", "negativo" o "cero".
-------------------------------------------------------------------------- */
function signoNumero(numero) {
  // TU CÓDIGO AQUÍ 👇
  if (numero > 0) {
    return "positivo";
  } else if (numero < 0) {
    return "negativo"
  } else {
    return "cero";
  }
}

/* --------------------------------------------------------------------------
   KATA 12 — Año Bisiesto
   Dado un año, retorná true si es bisiesto, o false si no lo es.
   Regla: divisible por 4, EXCEPTO los divisibles por 100,
   a menos que también sean divisibles por 400.
-------------------------------------------------------------------------- */
function esBisiesto(anio) {
  // TU CÓDIGO AQUÍ 👇
  if ( anio % 4 === 0 && anio % 100 != 0 || (anio % 100 === 0) && (anio % 400 === 0) ) {
    return true;
  } else {
    return false;
  }
}

/* --------------------------------------------------------------------------
   KATA 13 — Tipo de Día
   Dado el nombre de un día en español (ej: "lunes"), retorná:
   "laborable" si va de lunes a viernes, o "fin de semana" si es sábado/domingo.
-------------------------------------------------------------------------- */
function tipoDia(dia) {
  // TU CÓDIGO AQUÍ 👇
  if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes" ) {
    return "laborable";
  } else if (dia === "sábado" || dia === "domingo") {
    return "fin de semana";
  }
}

/* --------------------------------------------------------------------------
   KATA 14 — Precio de Entrada al Cine
   Dado una edad, retorná el precio de la entrada:
   - Menores de 12 años: 500
   - Entre 12 y 64 años: 1200
   - 65 años o más: 700
-------------------------------------------------------------------------- */
function precioEntrada(edad) {
  // TU CÓDIGO AQUÍ 👇
  if (edad < 12 && edad > 0 ) {
    return 500;
  } else if ( edad >= 12 && edad <= 64 ) {
    return 1200;
  } else {
    return 700;
  }
}

/* --------------------------------------------------------------------------
   KATA 15 — ¿Tiene Contenido?
   Dado un string, retorná "Tiene contenido" si tiene más de 0 caracteres,
   o "Vacío" si no.
-------------------------------------------------------------------------- */
function tieneContenido(texto) {
  // TU CÓDIGO AQUÍ 👇
  if (texto.length != 0) {
    return "Tiene contenido";
  } else {
    return "Vacío";
  }
}

/* --------------------------------------------------------------------------
   KATA 16 — ¿Puede Conducir?
   Dado una edad y un boolean (si aprobó el teórico), retorná:
   - "Puede sacar el registro" si tiene 18+ años Y aprobó el teórico.
   - "Menor de edad" si tiene menos de 18.
   - "Sin teórico aprobado" si tiene 18+ pero no aprobó el teórico.
-------------------------------------------------------------------------- */
function puedeConducir(edad, aproboTeorico) {
  // TU CÓDIGO AQUÍ 👇
  if (edad > 18) {
    if (aproboTeorico) {
      return "Puede sacar el registro"
    } else {
      return "Sin teórico aprobado";
    }
  } else {
    return "Menor de edad";
  }
}

/* --------------------------------------------------------------------------
   KATA 17 — Número a Día de la Semana
   Dado un número del 1 al 7, retorná el nombre del día correspondiente.
   (1 = lunes, 2 = martes, 3 = miércoles, 4 = jueves, 5 = viernes, 6 = sábado, 7 = domingo)
   Si el número no está entre 1 y 7, retorná "Día inválido".
-------------------------------------------------------------------------- */
function numeroDia(numero) {
  // TU CÓDIGO AQUÍ 👇
  switch (numero) {
    case 1:
      return "lunes";
      break;

    case 2:
      return "martes";
      break;

    case 3:
      return "miércoles";  
      break;

    case 4:
      return "jueves";
      break;

    case 5:
      return "viernes";
      break;

    case 6:
      return "sábado";
      break;

    case 7:
      return "domingo";
      break;        

    default:
      return "Día inválido";
      break;
  }
}

/* --------------------------------------------------------------------------
   KATA 18 — Clasificar IMC
   Dado el peso (kg) y la altura (m), calculá el IMC y retorná:
   - "Bajo peso"  → IMC < 18.5
   - "Normal"     → IMC de 18.5 a 24.9
   - "Sobrepeso"  → IMC de 25 a 29.9
   - "Obesidad"   → IMC >= 30
-------------------------------------------------------------------------- */
function clasificarIMC(peso, altura) {
  // TU CÓDIGO AQUÍ 👇
  let IMC = peso / (altura * altura);
  if (IMC < 18.5 && IMC > 0) {
    return "Bajo peso";
  } else if (IMC >= 18.5 && IMC <= 24.9) {
    return "Normal";
  } else if (IMC >= 25 && IMC <= 29.9) {
    return "Sobrepeso"
  } else {
    return "Obesidad";
  }
}

/* --------------------------------------------------------------------------
   KATA 19 — Valor por Defecto
   Si el nombreUsuario es null, undefined o un string vacío "",
   retorná "Anónimo". De lo contrario, retorná el nombre tal cual.
-------------------------------------------------------------------------- */
function valorPorDefecto(nombreUsuario) {
  // TU CÓDIGO AQUÍ 👇
  if(!nombreUsuario) {
    return "Anónimo";
  } else {
    return nombreUsuario;
  }
}

/* --------------------------------------------------------------------------
   KATA 20 — Sistema de Notas
   Dado una nota numérica, retorná la calificación:
   - 90 a 100 → "Sobresaliente"
   - 75 a 89  → "Notable"
   - 60 a 74  → "Aprobado"
   - 0 a 59   → "Reprobado"
-------------------------------------------------------------------------- */
function calificarNota(nota) {
  // TU CÓDIGO AQUÍ 👇
  if (nota >= 0 && nota <= 59) {
    return "Reprobado";
  } else if (nota >= 60 && nota <= 74) {
    return "Aprobado";
  } else if (nota >= 75 && nota <= 89) {
    return "Notable";
  } else if (nota >= 90 && nota <= 100) {
    return "Sobresaliente";
  }
}

// 🚨 ¡NO TOCAR ESTA LÍNEA!
module.exports = {
  signoNumero,
  esBisiesto,
  tipoDia,
  precioEntrada,
  tieneContenido,
  puedeConducir,
  numeroDia,
  clasificarIMC,
  valorPorDefecto,
  calificarNota,
};
