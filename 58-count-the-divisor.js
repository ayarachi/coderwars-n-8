/*Dia 58
https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
Cuente la cantidad de divisores de un entero positivo n.

Las pruebas aleatorias llegan hasta n = 500000, pero las pruebas fijas llegan a valores superiores.

Ejemplos (entrada --> salida)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
 */

function getDivisorsCnt(n) {
  let countDivisor = 0;

  let limite = Math.sqrt(n); // retorna la raiz cuadrada de n
  for (let i = 1; i <= limite; i++) {
    if (n % i === 0) {
      countDivisor += 1;
      if (i !== n / i) {
        countDivisor += 1;
      }
    }
  }
  return countDivisor;
}
console.log(getDivisorsCnt(10));
