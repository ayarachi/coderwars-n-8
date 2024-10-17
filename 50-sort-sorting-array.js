/* Dia 50 
https://www.codewars.com/kata/59dc8288fc3c49cc3f000039/train/javascript
Ordena una matriz según los índices de otra matriz.
Se garantiza que las dos matrices tengan el mismo tamaño y que la matriz de ordenación tenga todos los índices necesarios.
sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']
    
sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
Objetivo: Reordenar initialArray según los índices especificados en sortingArray.

i es el índice actual en el bucle.
initialArray[i] es el elemento que queremos reubicar.
sortingArray[i] es la posición donde debemos colocar el elemento.
resultado[sortingArray[i]] = initialArray[i]; asigna el elemento a la posición correcta en resultado.
    */
function sort(initialArray, sortingArray) {
  let resultado = [];
  for (let i = 0; i < sortingArray.length; i++) {
    resultado[sortingArray[i]] = initialArray[i];
  }
  return resultado;
}
console.log(sort(["z", "x", "y"], [0, 2, 1]));
/*Otra manera de hacerlo sacada de coderwars
const sort = (initialArray, sortingArray) =>
  initialArray.map((_, idx) => initialArray[sortingArray.indexOf(idx)]); */
