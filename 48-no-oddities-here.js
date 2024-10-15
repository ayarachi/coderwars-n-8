/*DIA 48
https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript
Escriba una función pequeña que devuelva los valores de una matriz que no sean impares.Todos los valores de la matriz serán números enteros. Devuelva los valores correctos en el orden en que se dan.
 ingreso [0,1,2,3]=>[0,2]
 comencé uyilizando el método .map() lo cual no me brindaba lo que queria , ya que transforma cada elemento del arreglo original en un nuevo valor, resultando en un arreglo de la misma longitud pero con los valores transformados. En tu caso, estás comprobando si cada elemento es par, lo que devuelve un arreglo de valores booleanos.

Para obtener solo los números pares, debes utilizar el método .filter() en lugar de .map(). El método .filter() crea un nuevo arreglo con todos los elementos que cumplen una condición determinada.
*/
function noOdds(values) {
  return values.filter((element) => element % 2 === 0);
}
console.log(noOdds([0, 1, 2, 3]));
