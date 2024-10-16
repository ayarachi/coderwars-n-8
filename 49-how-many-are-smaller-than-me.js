/* Dia 49
https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript
Escriba una función que, dada una matriz arr,
 devuelva una matriz 
 que contenga en cada índice i la cantidad de números que son menores que arr[i] a la derecha.
For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
*/
function smaller(nums) {
  let resultado = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    resultado.push(count);
  }
  return resultado;
}
console.log(smaller([5, 4, 3, 2, 1]));
//Solución encontrada en coderwar
//const smaller = nums => nums.map((x, i) => nums.slice(i).filter(y => x > y).length);
