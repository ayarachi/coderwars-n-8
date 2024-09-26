/* Dia 37
https://www.codewars.com/kata/558f9f51e85b46e9fa000025/train/javascript
Halla la diferencia entre el cuadrado de la suma de los primeros n números naturales (1 <= n <= 100) y la suma de sus cuadrados.
Por ejemplo, cuando n = 10:

El cuadrado de la suma de los números es:

(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)² = 55² = 3025
La suma de los cuadrados de los números es:

1² + 2² + 3² + 4² + 5² + 6² + 7² + 8² + 9² + 10² = 385
Por lo tanto, la diferencia entre el cuadrado de la suma de los primeros diez números naturales y la suma de los cuadrados de esos números es: 3025 - 385 = 2640

 */

function differenceOfSquares(n) {
  let suma = 0;
  let cuadrado = 0;
  for (let i = 0; i <= n; i++) {
    cuadrado += i ** 2;
    suma += i;
  }
  return suma ** 2 - cuadrado;
}
console.log(differenceOfSquares(10));
