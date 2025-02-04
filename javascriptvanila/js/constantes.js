export const PI = Math.PI;

export let usuario = "Jon";
const password = "qwerty";
// PAra poder hacer la export default de unca constante promero se define y luego se exporta en default, solamente las funciones y las clases(class las de azucar sintanctico acuerdate) son las que funcionan del tiron las declaradas
// export default password;
const hello = () => console.log("Hola");
// Para tener una funcion que se ejecute por  defecto cuando mandas a llamar dicho modulo procedemos con:
// Solo puedes tener una exportacion default
export default function saludar() {
  console.log("Hola Modulos +ES6");
}

export class Saludar {
  constructor() {
    console.log("Hola clases +ES6");
  }
}
