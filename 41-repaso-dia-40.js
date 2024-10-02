/*Dados dos números enteros positivos m (ancho) y n (alto), complete una lista (o matriz) bidimensional de tamaño m por n de la siguiente manera:

(1) Todos los elementos en la primera y última fila y columna son 1.

(2) Todos los elementos en la segunda y penúltima fila y columna son 2, excluyendo los elementos del paso 1.

(3) Todos los elementos en la tercera y penúltima fila y columna son 3, excluyendo los elementos de los pasos anteriores.

Y así sucesivamente...

Ejemplos
Dado m = 5, n = 8, su función debería devolver=>
[[1, 1, 1, 1, 1],
[1, 2, 2, 2, 1],
[1, 2, 3, 2, 1],
[1, 2, 3, 2, 1],
[1, 2, 3, 2, 1],
[1, 2, 3, 2, 1],
[1, 2, 2, 2, 1],
[1, 1, 1, 1, 1]] 
pasos
Crear la matriz de tamaño de n * m(n=filas, m = columnas), inicializada en ceros
Calcular cuantas capas hay 
Llenar cada capa, iterar sobre cada capa, desde la ma externa k = 0 hasta las mas interna 
Rellenar la fila superior e inferiror de la capa
Rellenar la columna izquierda y derecha de la capa k
*/

function createBox(m, n) {
  let matriz = Array.from({ length: n }, () => Array(m).fill(0));
  let capas = Math.ceil(Math.min(m, n) / 2);

  for (let k = 0; k < capas; k++) {
    for (let i = k; i < m - k; i++) {
      matriz[k][i] = k + 1; //Fila superior
      matriz[n - k - 1][i] = k + 1; // Fila inferior
    }
    for (let i = k; i < n - k; i++) {
      matriz[i][k] = k + 1; //columna izquierda
      matriz[i][m - k - 1] = k + 1; //columna derecha
    }
  }
  return matriz;
}
console.log(createBox(5, 8));
