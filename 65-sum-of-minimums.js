/*Dia 65
Dada una lista 2D (anidada) (matriz, vector, etc.) de tamaño m * n, su tarea es encontrar la suma de los valores mínimos en cada fila.

Por ejemplo:
[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
Por lo tanto, la función debería devolver 26 porque la suma de los mínimos es
1 + 5 + 20 = 26.
nota: Siempre se le proporcionar%C3%A1 una lista no vac%C3%ADa que contiene valores positivos.


 */
function sumOfMinimums(arrs) {
  let sumaTotal = 0;
  for (let i = 0; i < arrs.length; i++) {
    const array = arrs[i];
    let min = Math.min(...array);
    sumaTotal += min;
  }
  return sumaTotal;
}
console.log(
  sumOfMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100],
  ])
);
