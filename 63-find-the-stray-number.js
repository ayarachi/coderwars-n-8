/* Dia 63 find the stray number 
https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
Se le proporciona una matriz de números enteros de longitud impar, en la que todos son iguales, excepto un único número.

Complete el método que acepta dicha matriz y devuelve ese único número diferente.

¡La matriz de entrada siempre será válida! (odd-length >= 3)
Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

 */
function stray(numbers) {
  if (numbers.length % 2 !== 0) {
    let stray = numbers.find(
      (num) => numbers.indexOf(num) === numbers.lastIndexOf(num)
    );
    return stray;
  }
}
console.log(stray([1, 1, 2]));

/*indexOf(num): Devuelve la posición del primer lugar donde aparece num en el array.
lastIndexOf(num): Devuelve la posición del último lugar donde aparece num en el array.
Si un número aparece solo una vez en el array, entonces la primera vez que aparece y la última vez son la misma posición, porque no hay más ocurrencias de ese número. En otras palabras, si indexOf(num) === lastIndexOf(num), eso significa que el número num solo aparece una vez en el array. */
