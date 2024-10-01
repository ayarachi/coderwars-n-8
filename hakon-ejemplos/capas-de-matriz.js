// Esta versión enfoca en la matamatica.
// Solo toca cada posición una vez.
// Se funcióna pasando por cada posición de la matriz y
// calculando que valor debería tener en esa posición.
// La calculación del valor tiene que ver con si pasó
// el medio verticalmente o el medio horizontalmente.
function runMathVersion(height, width) {
  if (height < 1 || width < 1) {
    throw new Error('Height and width must each be at least 1');
  }

  const result = [];

  for (let row = 1; row <= height; row++) {
    result.push([]);  // Create row for result

    for (let col = 1; col <= width; col++) {
      // Determine the offsets from the edge of the matrix
      const offsetHorizontal = row <= Math.ceil(height / 2) ? row : height - (row - 1);
      const offsetVertical= col <= Math.ceil(width / 2) ? col : width - (col - 1);

      const value = Math.min(offsetHorizontal, offsetVertical);

      result[row - 1].push(value);  // Push column onto row
    }
  }

  return result;
}

// Esta versión es mas facil entender. Es basado
// En la idea de llenar la matriz capa por capa.
// Empieza con marcadores de los bordes superior,
// inferior, izquierda, y derecha de la matriz.
// Corre reduciendolos hasta que cruzan.
function runIterativeVersion(height, width) {
  if (height < 1 || width < 1) {
    throw new Error('Height and width must each be at least 1');
  }

  // Create [height x width] matrix
  const result = Array(height).fill().map(() => Array(width).fill(0));

  let top = 0;
  let bottom = height - 1;
  let left = 0;
  let right = width - 1;

  while (top <= bottom && left <= right) {
    const layer = top + 1;

    // Fill the left and right column
    for (let i = top; i <= bottom; i++) {
      result[i][left] = layer;
      result[i][right] = layer;
    }

    // Fill the top and bottom row
    for (let j = left; j <= right; j++) {
      result[top][j] = layer;
      result[bottom][j] = layer;
    }

    // Move layer inward
    top++;
    bottom--;
    left++;
    right--;
  }

  return result;
}

// Esta función es para imprimir una matriz en la consola.
function printMatrix(m) {
  if (!m || m.length < 1) {
    throw new Error('Must pass a matrix');
  }

  console.log();
  console.log(`${m.length}x${m[0].length}:`);
  console.log();
  m.forEach(row => {
    console.log(row.join(', '));
  });
  console.log();
}

const m = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
printMatrix(m);

console.log('Math version');
printMatrix(runMathVersion(8, 8));
printMatrix(runMathVersion(5, 6));
printMatrix(runMathVersion(9, 9));

console.log('Iterative version');
printMatrix(runIterativeVersion(8, 8));
printMatrix(runIterativeVersion(5, 6));
printMatrix(runIterativeVersion(9, 9));

