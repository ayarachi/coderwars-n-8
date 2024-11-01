/* Dia 59
https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
Dados dos números enteros a y b, que pueden ser positivos o negativos, encuentre la suma de todos los números enteros entre ellos y los incluya y devuélvala. Si los dos números son iguales, devuelva a o b.

Nota: ¡a y b no están ordenados!

Ejemplos (a, b) --> resultado (explicación)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


*/
function getSum(a, b) {
  let resultado = 0;
  let arrNum = [a, b].sort((a, b) => a - b);
  for (let i = arrNum[0]; i <= arrNum[1]; i++) {
    resultado += i;
  }
  return resultado;
}
// solución encontrada en coderwars
// console.log(getSum(0, -1));
// function GetSum(a,b)
// {
//   return (Math.abs(a - b) + 1) * (a+b) / 2;
// }
// Math.abs(a - b) calcula la diferencia absoluta entre a y b, dándonos la distancia entre ellos.
// + 1 asegura que ambos números, a y b, estén incluidos en el conteo.
// Esta expresión calcula el número de términos (n) en la secuencia de números entre a y b.
// (a + b):
// Esto representa la suma de los extremos de la secuencia, es decir, el primer y último número.
// En una secuencia de enteros desde a hasta b, la suma de los extremos repetida n veces da el resultado total de la suma.
// Dividir entre 2 (/ 2):

// La división entre 2 es parte de la fórmula de la suma aritmética, ya que calcula el valor promedio de los extremos multiplicado por el número de términos.
