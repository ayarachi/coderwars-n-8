/*DIA 40
https://www.codewars.com/kata/63b84f54693cb10065687ae5/train/javascript
Dados dos números enteros positivos m (ancho) y n (alto), complete una lista (o matriz) bidimensional de tamaño m por n de la siguiente manera:

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

Dado m = 10, n = 9, su función debería devolver =>
[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
 [1, 2, 3, 3, 3, 3, 3, 3, 2, 1], 
 [1, 2, 3, 4, 4, 4, 4, 3, 2, 1], 
 [1, 2, 3, 4, 5, 5, 4, 3, 2, 1], 
 [1, 2, 3, 4, 4, 4, 4, 3, 2, 1], 
 [1, 2, 3, 3, 3, 3, 3, 3, 2, 1], 
 [1, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]

Esta función crea una matriz bidimensional de tamaño m por n, que se llena con números concéntricos (de afuera hacia adentro), formando "capas" numeradas.


*/

function createBox(m, n) {
  // Crear la matriz de tamaño n por m (n filas, m columnas) inicializada con ceros
  let matriz = Array.from({ length: n }, () => Array(m).fill(0));

  // Calcular cuántas capas hay
  let capas = Math.ceil(Math.min(m, n) / 2); // Usamos Math.ceil para asegurarnos de manejar los casos correctamente

  // Llenar cada capa =>Qué hace: Itera sobre cada capa, desde la más externa (k=0) hasta la más interna.
  for (let k = 0; k < capas; k++) {
    // Rellenar la fila superior e inferior de la capa k
    for (let i = k; i < m - k; i++) {
      matriz[k][i] = k + 1; // Fila superior
      matriz[n - k - 1][i] = k + 1; // Fila inferior
    }

    // Rellenar la columna izquierda y derecha de la capa k
    for (let i = k; i < n - k; i++) {
      matriz[i][k] = k + 1; // Columna izquierda
      matriz[i][m - k - 1] = k + 1; // Columna derecha
    }
  }

  return matriz;
}
console.log(createBox(5, 8));
