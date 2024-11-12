/*Dia 66 
https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
Dada una lista de números enteros, determina si la suma de sus elementos es par o impar.

Da tu respuesta como una cadena que coincida con "par" o "impar".

Si la matriz de entrada está vacía, considérala como: [0] (matriz con un cero).

Ejemplos:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
 */
function oddOrEven(array) {
  let suma = array.reduce(
    (acumulador, valoractual) => acumulador + valoractual,
    0
  );
  console.log(suma);

  return suma % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0, -1, -5]));

/*Suma de Elementos: reduce suma todos los elementos. Si el arreglo está vacío, reduce devuelve 0.
Verificar la Paridad: Se determina si la suma es par o impar usando % 2.
 */
