/*
En este kata, el objetivo es comparar cada par de números enteros de dos matrices y devolver una nueva matriz de números grandes.

Nota: ambas matrices tienen las mismas dimensiones.

Ejemplo:
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); => Devuelve [23, 64, 53, 17, 88] */

function getLargerNumbers(a, b) {
  let resultado = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      resultado.push(a[i]);
    } else {
      resultado.push(b[i]);
    }
  }
  return resultado;
}
console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]));

/* Otra solución encontrada en apx

function getLargerNumbers(a, b) {
  return a.map((x, i) => Math.max(x, b[i]));
} */
