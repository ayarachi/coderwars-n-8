/*DIA 43
https://www.codewars.com/kata/5a4ff3c5fd56cbaf9800003e/train/javascript
En este kata, la función devuelve una matriz/lista de números sin su último elemento. La función ya está escrita para ti y las pruebas básicas pasan, pero las pruebas aleatorias fallan. Tu tarea es averiguar por qué y solucionarlo.

¡Buena suerte!

Consejo: ten cuidado con los efectos secundarios.=> esto se refiere a no modificar el arr original.
Primero hice el ejercicio con el método pop que elimima el ultimo elemento de un arr, pero  no pasaba los test justamente porque modificaba el arr original, seguidamente apliquué el metodo slice que resulto correcto para pasar los test 

 */

function withoutLast(arr) {
  return arr.slice(0, -1); // Devuelve una copia desde el primer elemento hasta el penúltimo
}

console.log(withoutLast([85, 45, 43, 21, 22, 92])); // Resultado: [85, 45, 43, 21, 22]
