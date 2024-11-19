/*Dia 71 
Return String of First Characters
En este ejercicio, se pasa una cadena a un método y se debe devolver una nueva cadena con el primer carácter de cada palabra de la cadena.
For example:

"This Is A Test" ==> "TIAT"
Las cadenas solo contendrán letras y espacios, con exactamente 1 espacio entre palabras y sin espacios iniciales ni finales.

 */
function makeString(s) {
  let primerasLetras = s.match(/\b\w/g);
  return (primerasLetras || []).join("");
}
console.log(makeString("This Is A Test"));
/*Explicación
Buscar Primeras Letras:

Usamos s.match(/\b\w/g) para obtener un arreglo de las primeras letras de cada palabra.
Convertir el Arreglo en un String:

Con .join(""), concatenamos las letras en un solo string sin espacios ni separadores.
Manejo de Casos Vacíos:

Si no se encuentran palabras (por ejemplo, si el string está vacío), match devuelve null.
Usamos el operador lógico || para devolver un arreglo vacío ([]) en lugar de null, asegurando que .join("") no falle.
 */
