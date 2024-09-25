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
