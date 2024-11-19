/*DIA 56 
https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript
Tu tarea es escribir la función factorial.
El factorial de un número se define como el producto de todos los enteros positivos desde 1 hasta 𝑛

El factorial de un número  n, denotado como 𝑛!, es el producto de todos los números positivos menores o iguales a 𝑛
Ejemplo: 
4!=4×3×2×1=24
Recursividad:

La recursividad ocurre cuando una función se llama a sí misma para resolver una parte del problema.
Cada llamada recursiva reduce el problema hasta llegar a un caso base, que detiene la recursión.



*/

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Caso base
  } else {
    return n * factorial(n - 1); // Llamada recursiva
  }
}

console.log(factorial(7));

/*
Caso Base:

Si n es igual a 0 o 1, la función retorna 1:
if (n === 0 || n === 1) {
  return 1;
}
Esto es porque por definición:
0!=1 1!=1
Llamada Recursiva:

Si n no es 0 ni 1, la función retorna:
return n * factorial(n - 1);
Esto significa que la función se llama a sí misma con el argumento n - 1. Cada vez que la función se llama, el valor de n se reduce hasta llegar al caso base (0 o 1).

Visualización del Flujo Recursivo
factorial(4) -> 4 * factorial(3)
              -> 4 * (3 * factorial(2))
              -> 4 * (3 * (2 * factorial(1)))
              -> 4 * (3 * (2 * 1))
              -> 4 * 6 = 24
Ahora, las llamadas se resuelven hacia atrás:

factorial(2) = 2 * 1 = 2
factorial(3) = 3 * 2 = 6
factorial(4) = 4 * 6 = 24
Por lo tanto, factorial(4) devuelve 24.


 ¿Qué pasa si no hay un caso base?
Si no se define un caso base, la función se llamaría infinitamente, causando un desbordamiento de pila (stack overflow) y deteniendo el programa.


Solucion encintrada en codewars
const factorial = n => n ? factorial(n - 1) * n : 1;
*/
