/*https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript
Escriba una función que convierta cualquier oración en una oración V A P O R W A V E. Una oración V A P O R W A V E convierte todas las letras en mayúsculas y agrega 2 espacios entre cada letra (o carácter especial) para crear este efecto V A P O R W A V E.

Tenga en cuenta que los espacios deben ignorarse en este caso.

Ejemplos */

function vaporcode(string) {
  let resultado = string.toUpperCase().replace(/\s+/g, "").split("").join("  ");
  return resultado;
}
console.log(vaporcode("Lets go to the movies"));
/*Explicación paso a paso:

string.toUpperCase()

Convierte toda la cadena a mayúsculas.
Ejemplo: "Lets go to the movies" se convierte en "LETS GO TO THE MOVIES".
.replace(/\s+/g, '')

Elimina todos los espacios en blanco (incluyendo espacios, tabs, etc.).
La expresión regular /\s+/g busca uno o más espacios en blanco en toda la cadena.
Después del reemplazo, la cadena sería: "LETSGOTOTHEMOVIES".
.split('')

Divide la cadena en un array donde cada elemento es un carácter individual.
Resultado: ['L', 'E', 'T', 'S', 'G', 'O', 'T', 'O', 'T', 'H', 'E', 'M', 'O', 'V', 'I', 'E', 'S'].
.join(' ')

Une los elementos del array en una cadena, insertando dos espacios entre cada carácter.
Resultado final: "L E T S G O T O T H E M O V I E S". */
