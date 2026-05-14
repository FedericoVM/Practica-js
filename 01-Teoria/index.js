//  Demo de let
// function demoLet() {
//   let a = 10;

//   a = 20;

//   return a;
// }

// Demo de const
// function demoConst() {
//   const a = 10;

//   // a = 20; // Esto generará un error

//   return a;
// }

// Demo de var
// var a = 10;
// console.log("[A]:", a);
// function demoVar() {
//   console.log("[Dentro A]:", a);
//   a = 16;
//   console.log("[Dentro B]:", a);

//   a = 20;
//   console.log("[Dentro C]:", a);

//   return a;
// }

// console.log("[Final A]:", a);
// console.log(demoLet());
// console.log(demoConst());
// console.log(demoVar());

// console.log(nombreFantasma); // Imprime: undefined (¡Debería dar error, pero no lo da!)
// var nombreFantasma = "Casper";

// console.log(nombreSeguro); // 🚨 ERROR ROJO: Cannot access 'nombreSeguro' before initialization
// let nombreSeguro = "Iron Man";

// hacerMagia(); // Se ejecuta perfectamente e imprime: "¡Abracadabra!"

// function hacerMagia() {
//   console.log("¡Abracadabra!");
// }

// String (Texto)
// let saludo = "Hola mundo";
// let saludo2 = 'Hola mundo';
// let saludo3 = `Hola mundo`;

// Number (Números para matemáticas)
// let precio = 99.99;
// let cantidad = 5;

// Boolean (Interruptor ON/OFF)
// let esMayorDeEdad = true;
// let estaLogueado = false;

// Null (Ausencia intencional de valor - Vaciaste la caja a propósito)
// let resultado = null;

// Undefined (Variable declarada pero sin valor - Te olvidaste de meter algo)
// let sinAsignar;
// console.log(sinAsignar); // undefined

// NaN (Not a Number - Error matemático famoso)
// let calculoRaro = "Manzana" / 2;
// console.log(calculoRaro); // NaN (¡Te avisa que intentaste hacer mates con texto!)

// console.log(typeof "texto");
// console.log(typeof 123);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null === {}); // Esto es un error común: typeof null devuelve "object", pero null no es un objeto real. Es un error histórico en JavaScript.

// console.log(0 == false); // true (comparación débil, convierte ambos a un tipo común)
// console.log("" == false);

// console.log(1 == true);

//Igualdad débil (El Patovica Relajado - EVITAR)
// console.log("[IGUALDAD DÉBIL]:", 5 == "5"); // true   ← Hace coerción de tipo ("Parece un 5, pasá").

// Igualdad estricta (El Patovica Estricto - Recomendada SIEMPRE)
// console.log("[IGUALDAD ESTRICTA]:", 5 === 5); // true
// console.log("[IGUALDAD ESTRICTA]:", 5 === "5"); // false  ← Compara Valor Y Tipo de dato.
// let notaA = 62;

// Clasic metodo de if-else (El Guardián del Semáforo)
// if (notaA >= 90) {
//   return console.log("Excelente");
// } else if (notaA >= 80) {
//   return console.log("Aprobado");
// } else if (notaA >= 60) {
//   return console.log("Te salvaste por los pelos");
// } else {
//   return console.log("REPROBADO");
// }

// if (notaA >= 90) return console.log("Excelente");
// else if (notaA >= 80) return console.log("Aprobado");
// else if (notaA >= 60) return console.log("Te salvaste por los pelos");
// else return console.log("REPROBADO");

// let dia = "sabado";

// switch (dia) {
//   case "lunes":
//     console.log("Inicio de semana");
//     break;
//   case "miercoles":
//     console.log("Cortando la semana");
//     break;
//   case "viernes":
//     console.log("Por fin es viernes y el cuerpo lo sabe");
//     break;
//   default:
//     console.log("Día normal");
// }

// function saludar(nombre) {
//   return "Hola, " + nombre + "!";
//   // return `Hola, ${nombre}! y mi edad es ${edad}`;
// }

// console.log(saludar("Neri"));
// console.log(saludar("Juan"));

// 1. Function Declaration (la clásica)
// function sumar(a, b) {
//   return a + b;
// }

// // 2. Function Expression (guardada en una variable)
// const restar = function (a, b) {
//   return a - b;
// };

// // 3. Arrow Function (la moderna, más corta)
// const multiplicar = (a, b) => a * b;

// console.log(sumar(5, 3)); // 8
// console.log(restar(5, 3)); // 2
// console.log(multiplicar(5, 3)); // 15

// volar(); // 🚨 ERROR: Cannot access 'volar' before initialization

// const volar = () => {
//   console.log("¡Whoosh!");
// };
// let contador = 0;

// while (contador < 5) {
//   console.log("[VALOR DEL CONTADOR ANTES:]", contador);
//   console.log("Vuelta:", contador);
//   // contador = contador + 1;

//   // contador += 1;

//   contador++;
//   console.log("[VALOR DEL CONTADOR DESPUÉS:]", contador);
// }

for (let indice = 0; indice < 5; indice++) {
  console.log("[VALOR DEL INDICE FOR ANTES:]", indice);
  console.log("\n Vuelta: \n", indice);
  console.log("[VALOR DEL INDICE FOR DESPUÉS:]", indice);
}

"perro".toUpperCase(); // -> "PERRO"
"perro".toLowerCase(); // -> "perro"
