/* DIA 30: https://www.codewars.com/kata/5a254114e1ce0ecf6a000168/train/javascript

Supongamos que comenzaste a almacenar elementos en una ubicación cuadrada que se expande progresivamente, de esta manera para los primeros 9 números:
Y de esta manera para la expansión hasta incluir hasta los primeros 25 números:

Puedes notar fácilmente que la primera capa (y la más interna) contiene solo un número (01), la segunda (inmediatamente alrededor de ella) contiene 8 números (números en el rango 02-09) y así sucesivamente.

Tu tarea es crear una función que, dado un número n, simplemente devuelva la cantidad de capas necesarias para almacenar hasta n (incluido).

Advertencia: siempre y solo obtendrás números enteros positivos, ¡pero prepárate para números más grandes en las pruebas!

 */
function layers(n) {
  if (n <= 0) {
    throw new Error("n debe ser mayor o igual a 1");
  }
  // Empezamos con el primer número impar
  let layer = 1;
  // El cuadrado del primer número impar es 1 (1^2)
  let k = 1; // indica el fin de la primera capa
  // Continuar hasta encontrar un cuadrado mayor o igual que n
  while (k * k < n) {
    // Aumentamos el número impar en 2 para obtener el siguiente impar
    k += 2;
    // Incrementamos el número de capas, ya que cada impar representa una capa
    layer += 1;
  }

  return layer;
}

console.log(layers(25));
