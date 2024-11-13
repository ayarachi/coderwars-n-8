/* Dia 67 
https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
Su equipo está escribiendo un nuevo y sofisticado editor de texto y le han encomendado la tarea de implementar la numeración de líneas.

Escriba una función que tome una lista de cadenas
 y devuelva cada línea precedida por el número correcto.

La numeración comienza en 1. El formato es n: cadena.
Observe los dos puntos y el espacio entre ellas.
"Este formato solo se logra con Template Literals "
Examples: (Input --> Output)


[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
 */

const number = function (array) {
  let resultado = [];

  for (let i = 0; i < array.length; i++) {
    const letra = array[i];
    resultado.push(`${i + 1}: ${letra}`);
  }
  return resultado;
};
console.log(number(["a", "b", "c"]));

/*Interpolación de Cadenas (Template Literals):

En JavaScript, las template literals (delimitadas por comillas invertidas ` `) permiten crear cadenas de texto dinámicas, incorporando variables o expresiones dentro de la cadena.
El resultado de ``${i + 1}: ${letra}``` crea una cadena que combina el número (índice + 1), seguido de dos puntos y el valor del elemento.
Por ejemplo, si i es 0 y letra es "a", el resultado será "1: a".
 */
