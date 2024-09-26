/* Dia 35
https://www.codewars.com/kata/61c78b57ee4be50035d28d42/train/javascript
Este kata requiere que escribas una función que fusione dos cadenas. Para ello, fusiona el final de la primera cadena con el comienzo de la segunda cuando coinciden exactamente.
*/
function mergeStrings(first, second) {
  let resultado = "";
  for (let i = 0; i <= first.length; i++) {
    if (first.slice(i) === second.slice(0, first.length - i)) {
      resultado = first + second.slice(first.length - i);
      break;
    }
  }
  return resultado;
}

console.log(mergeStrings("abaab", "aabab"));

/*first.slice(i): Este método extrae una subcadena de first, comenzando en la posición i hasta el final de la cadena. Esto crea un sufijo de first que será comparado.
Ejemplo: Si i = 2 y first = 'abaab', entonces first.slice(2) será 'baab'.
second.slice(0, first.length - i): Esto extrae un prefijo de la cadena second que tiene la misma longitud que el sufijo extraído de first.
Ejemplo: Si i = 2 y first = 'abaab', second.slice(0, first.length - i) será 'aab' (tomando los primeros 4 caracteres de second).
La condición en este if verifica si el sufijo de first y el prefijo de second coinciden. Si lo hacen, significa que encontramos un solapamiento.
Actualización del resultado y salida del bucle:
resultado = first + second.slice(first.length - i);
break;
Si encontramos una coincidencia en el if, actualizamos resultado. La lógica aquí es:
Mantenemos toda la cadena first.
Añadimos la parte de second que no se solapa con first. Esto lo logramos tomando solo la porción de second que está después del prefijo coincidente (second.slice(first.length - i)).
Luego usamos break para salir del bucle, porque ya encontramos el punto de coincidencia más largo, y no necesitamos seguir buscando.
Devolución del resultado: */
