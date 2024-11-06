/* Dia 62 is isogram?
https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
Un isograma es una palabra que no tiene letras repetidas, consecutivas o no consecutivas. Implemente una función que determine si una cadena que contiene solo letras es un isograma. Suponga que la cadena vacía es un isograma. Ignore las mayúsculas y minúsculas.
Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
 */

function isIsogram(str) {
  const letras = new Set(str.toLowerCase());
  return letras.size === str.length;
}
console.log(isIsogram("aba"));

//El objeto Set le permite almacenar valores únicos de cualquier tipo, ya sea valores primitivos o referencias a objetos.
//Los objetos Set son colecciones de valores. Puede iterar a través de los elementos de un conjunto en orden de inserción. Un valor en un Set solo puede ocurrir una vez; es único en la colección del Set.
