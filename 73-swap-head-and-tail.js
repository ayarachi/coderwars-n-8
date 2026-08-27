/*Dia 70 
Necesita intercambiar la cabeza y la cola de la matriz especificada:

la cabeza (la primera mitad) de la matriz se mueve hasta el final, la cola (la segunda mitad) se mueve hasta el principio.
El elemento intermedio, si existe, permanece en la misma posición.

Devuelve una nueva matriz. No modifique la entrada.

Por ejemplo:
[ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 \----/   \----/         
  head     tail 

[ -1, 2 ]  => [ 2, -1 ] 
[ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]  */

function swapHeadAndTail(arr) {
  let n = arr.length;
  let mitad = Math.floor(n / 2);
  let head = arr.slice(0, mitad);
  let tail = n % 2 === 0 ? arr.slice(mitad) : arr.slice(mitad + 1);
  let medio = arr[mitad];
  let resultado = [...tail, ...(n % 2 === 1 ? [medio] : []), ...head];

  return resultado;
}
console.log(swapHeadAndTail([1, 2, -3, 4, 5, 6, -7, 8]));

/*version simplificada
function swapHeadAndTail(arr) {
  const mitad = Math.floor(arr.length / 2);
  const medio = arr.length % 2 === 1 ? [arr[mitad]] : [];
  return [...arr.slice(mitad + (arr.length % 2)), ...medio, ...arr.slice(0, mitad)];
}
*/
