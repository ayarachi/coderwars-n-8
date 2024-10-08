/* Dia 45
https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript
Si a = 1, b = 2, c = 3 ... z = 26

Entonces l + o + v + e = 54

y f + r + i + e + n + d + s + h + i + p = 108

Entonces la amistad es el doble de fuerte que el amor :-)

Tu tarea es escribir una función que calcule el valor de una palabra en función de la suma de las posiciones alfabéticas de sus caracteres.

La entrada siempre estará formada únicamente por letras minúsculas y nunca estará vacía. */
function wordsToMarks(string) {
  let resultado = 0;
  for (let i = 0; i < string.length; i++) {
    let elemento = string[i];
    let valorPorLetra = elemento.charCodeAt(0) - 96;
    resultado += valorPorLetra;
  }

  return resultado;
}
console.log(wordsToMarks("friends"));

/*function wordsToMarks(string){
    return [...string].map(e => e.charCodeAt(0)-96).reduce((a,b) => a+b);
  }
Desglose del código:
[...string]:

El operador spread (...) descompone el string en un array de caracteres.
Ejemplo: Si string = "friends", el resultado será ['f', 'r', 'i', 'e', 'n', 'd', 's'].
map(e => e.charCodeAt(0) - 96):

El método map() crea un nuevo array donde a cada elemento del array original se le aplica una transformación.
En este caso, e => e.charCodeAt(0) - 96:
e es cada letra en el array.
charCodeAt(0) obtiene el código ASCII de la letra.
- 96 ajusta el valor del código ASCII para que 'a' sea 1, 'b' sea 2, etc.
Resultado: Se genera un nuevo array con los valores correspondientes a cada letra.
Ejemplo: Para "friends", después de map(), el array sería [6, 18, 9, 5, 14, 4, 19].
reduce((a, b) => a + b):

El método reduce() toma un array y lo reduce a un solo valor, en este caso, sumando todos los elementos.
La función (a, b) => a + b toma dos valores del array, los suma y devuelve el resultado, que luego se usa en la siguiente iteración hasta que todos los elementos se suman.
Ejemplo: Para [6, 18, 9, 5, 14, 4, 19], reduce() devolvería 75, que es la suma de todos esos números.
Resumen del flujo:
[...string]: Convierte el string en un array de caracteres.
map(): Convierte cada letra en su valor numérico correspondiente.
reduce(): Suma todos los valores resultantes y devuelve el total.
Ejemplo con "friends":
Paso 1: ['f', 'r', 'i', 'e', 'n', 'd', 's']
Paso 2: [6, 18, 9, 5, 14, 4, 19] (valores de cada letra)
Paso 3: 6 + 18 + 9 + 5 + 14 + 4 + 19 = 75
Este enfoque es más conciso y funcional, utilizando las capacidades de JavaScript para trabajar con arrays de manera más "elegante".*/
