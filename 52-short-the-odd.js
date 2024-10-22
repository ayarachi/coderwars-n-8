/* DIA1 5
https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

Se le proporcionará una serie de números.(Ingresa un arr)
Debe devolver un arr donde esten  ordenenados  los números de la siguiente manera
impares en orden ascendente y dejar los números pares en sus posiciones originales.
Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/
function sortArray(array) {
  let impares = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element % 2 != 0) {
      impares.push(element);
      impares.sort((a, b) => a - b);
    }
  }
  let resultado = [];
  let indiceImpar = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element % 2 === 0) {
      resultado.push(element);
    } else {
      resultado.push(impares[indiceImpar]);
      indiceImpar++;
    }
  }

  return resultado;
}
console.log(sortArray([5, 8, 6, 3, 4]));
