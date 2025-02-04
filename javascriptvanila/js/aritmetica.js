export function sumar(a, b) {
  return a + b;
}
export function restar(a, b) {
  return a - b;
}

// Puedo crear todas lsa funciones en un objeto y enviarlo por ejemplo

export const aritmetica = {
  sumar,
  restar,
};
