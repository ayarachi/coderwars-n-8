/* Dia 55
https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript
¡Oh, no! El número se ha mezclado con el texto. Tu objetivo es recuperar el número del texto. ¿Puedes devolver el número a su estado original?

Tarea
Tu tarea es devolver un número a partir de una cadena.

Detalles
Recibirás una cadena de números y letras mezclados. Tienes que devolver todos los números de esa cadena en el orden en que aparecen. */

function filterString(value) {
  return Number(
    value
      .split("")
      .filter((element) => !isNaN(element))
      .join("")
  );
}

console.log(filterString("aa1bb2cc3dd"));
