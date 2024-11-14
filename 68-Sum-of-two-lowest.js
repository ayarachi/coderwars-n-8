/*Dia 68
Sum of two lowest positive integers 
Crea una función que devuelva la suma de los dos números positivos más bajos dada una matriz de un mínimo de 4 números enteros positivos. No se pasarán números flotantes ni números enteros no positivos.

Por ejemplo, cuando se pasa una matriz como [19, 5, 42, 2, 77], el resultado debe ser 7.
*/
function sumTwoSmallestNumbers(numbers) {
  let sortedArr = [...numbers].sort((a, b) => a - b);
  return sortedArr[0] + sortedArr[1];
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
/*Ordenar el Arreglo: Primero, puedes hacer una copia del arreglo y ordenarlo en orden ascendente para encontrar fácilmente los dos números más pequeños. */
