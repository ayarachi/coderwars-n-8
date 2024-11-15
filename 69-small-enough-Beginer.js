/*Dia 69
https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
Se le proporcionará una matriz y un valor límite. Debe comprobar que todos los valores de la matriz sean inferiores o iguales al valor límite. Si es así, devuelva verdadero. De lo contrario, devuelva falso.

Puede asumir que todos los valores de la matriz son números.
 */
function smallEnough(a, limit) {
  let array = [];
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    if (a[i] <= limit) {
      array.push(a[i]);
    }
  }
  return array.length === a.length ? true : false;
}
console.log(smallEnough([66, 101], 200));
/*
Solución encontrada en la coderwars
function smallEnough(a, limit){
  return Math.max(...a) <= limit
} */
