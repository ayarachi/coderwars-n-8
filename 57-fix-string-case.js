/*DIA 57 
En este Kata, se le proporcionará una cadena que puede tener letras mayúsculas y minúsculas mezcladas y su tarea es convertir esa cadena a solo minúsculas o solo a mayúsculas en función de lo siguiente:

Realice la menor cantidad de cambios posible.
Si la cadena contiene la misma cantidad de letras mayúsculas y minúsculas, convierta la cadena a minúsculas.
Por ejemplo:
solve("coDe") = "code". Caracteres en minúscula > mayúsculas. Cambie solo la "D" a minúscula.
solve("CODe") = "CODE". Caracteres en mayúscula > minúsculas. Cambie solo la "e" a mayúscula.
solve("coDE") = "code". Mayúsculas == minúsculas. Cambie todo a minúsculas. */

function solve(str) {
  let totalMay = 0; // Contador de mayúsculas
  let totalMin = 0; // Contador de minúsculas

  // Contar cuántas letras son mayúsculas y cuántas son minúsculas
  for (let i = 0; i < str.length; i++) {
    const letra = str[i];
    if (letra === letra.toUpperCase() && letra !== letra.toLowerCase()) {
      totalMay += 1;
    } else if (letra === letra.toLowerCase() && letra !== letra.toUpperCase()) {
      totalMin += 1;
    }
  }

  // Decidir qué hacer según los contadores
  if (totalMay > totalMin) {
    return str.toUpperCase(); // Más mayúsculas: todo a mayúsculas
  } else {
    return str.toLowerCase(); // Más minúsculas o empate: todo a minúsculas
  }
}

console.log(solve("codE"));
