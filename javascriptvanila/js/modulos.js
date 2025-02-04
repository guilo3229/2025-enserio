import saludar, { Saludar, PI, usuario } from "./constantes.js";
// Podemos ponerle otro nombre mas corto para ailizar
import { aritmetica as calculos } from "./aritmetica.js";
console.log("Archivo modulos.js");
// No hace falta que exportes todo , puedes exporta solamente lo que tu necesites
console.log(PI, usuario);

// console.log(aritmetica.sumar(5, 2));
// console.log(aritmetica.restar(5, 2));
console.log(calculos.sumar(5, 2));
console.log(calculos.restar(5, 2));
saludar();
const saludo = new Saludar();
saludo;
