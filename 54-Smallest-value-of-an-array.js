/* Dia 54 
https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
Escriba una función que pueda devolver el valor más pequeño de una matriz o el índice de ese valor. 
El segundo parámetro de la función indicará si debe devolver el valor o el índice.

Suponga que el primer parámetro siempre será una matriz llena con al menos 1 número y sin duplicados. 
Suponga que el segundo parámetro será una cadena que contenga uno de dos valores: 'valor' e 'índice'.
 Some examples:

([1,2,3,4,5], "value") should return 1
([1,2,3,4,5], "index") should return 0
*/
function min(arr, toReturn) {
  let mini = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (toReturn === "value") {
      return mini;
    } else if (mini === arr[i]) {
      return i;
    }
  }
}
console.log(min([1, 2, 3, 4, 5], "index"));

/*Solución encontrada en la plataforma 
*La función Math.min() recibe una lista de argumentos.
*Como Math.min() no puede recibir directamente un array, usamos el spread operator (...) para expandir los elementos del array como argumentos individuales.
*indexOf() busca un valor específico dentro del array y devuelve el índice de la primera aparición del valor.

*Aquí se usa un operador ternario para tomar una decisión según el valor de outer.
*Si outer es 'index', se devuelve el índice del valor mínimo.
*Si outer no es 'index', se devuelve el valor mínimo directamente.


function min( array, outer ) {
  return outer === 'index' ? array.indexOf(Math.min(...array)) : Math.min(...array)
} 
  
*/
