/*Dia 60 
https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
Comprueba si una cadena tiene la misma cantidad de "x" y "o". El método debe devolver un valor booleano y no distinguir entre mayúsculas y minúsculas. La cadena puede contener cualquier carácter.

Ejemplos de entrada/salida:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */
function XO(str) {
  str = str.toLowerCase();

  const countX = (str.match(/x/g) || []).length;
  const countO = (str.match(/o/g) || []).length;
  return countX === countO;
}
console.log(XO("ooxxx"));

/*str.toLowerCase()
Esto asegura que la función no distinga entre mayúsculas y minúsculas (X y x se consideran iguales, al igual que O y o). 
Usamos str.match(/x/g) para encontrar todas las ocurrencias de x. Si no hay coincidencias, match() devuelve null, por lo que usamos || [] para asegurarnos de que .length funcione sin errores.
Lo mismo aplica para o.
*/
