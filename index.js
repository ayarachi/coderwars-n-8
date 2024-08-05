console.log("Archivo cargado");

/*El ácido desoxirribonucleico, el ADN, es la principal molécula de almacenamiento de información en los sistemas biológicos. Está compuesto por cuatro bases de ácidos nucleicos: guanina ('G'), citosina ('C'), adenina ('A') y timina ('T')

El ácido ribonucleico, ARN, es la principal molécula mensajera de las células. El ARN difiere ligeramente del ADN en su estructura química y no contiene timina. En el ARN, la timina se reemplaza por otro ácido nucleico, uracilo ('U')

Cree una función que traduzca una cadena de ADN determinada en ARN
Por ejemplo://

"GCAT" => "GCAU"
La cadena de entrada puede tener una longitud arbitraria; en particular, puede estar vacía. Se garantiza que todas las entradas serán válidas, es decir, cada cadena de entrada solo estará compuesta por 'G', 'C', 'A' y/o 'T'*/

function DNAtoRNA(dna) {
  //Convertir la cadena en un arreglo:
  let rna = dna.split("");
  for (let i = 0; i < rna.length; i++) {
    if (rna[i] === "T") {
      rna[i] = "U";
    }
  }
  //Convertir el arreglo de vuelta a una cadena usando join :
  return rna.join("");
}
//console.log(DNAtoRNA("GCAT"));
// Esta es la manera de resolver con métodos
/*function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }*/
/* Desafio dia 1 
 Complete la función que devuelve el día de la semana según el número ingresado: 1 devuelve "Domingo" 2 devuelve "Lunes" 3 devuelve "Martes" 4 devuelve "Miércoles" 5 devuelve "Jueves" 6 devuelve "Viernes" 7 devuelve "Sábado" En caso contrario devuelve "Incorrecto, ingrese un número entre 1 y 7"
  */
function whatday(num) {
  let nombreDelDia;
  switch (num) {
    case 1:
      nombreDelDia = "Sunday";
      break;
    case 2:
      nombreDelDia = "Monday";
      break;
    case 3:
      nombreDelDia = "Tusdey";
      break;
    case 4:
      nombreDelDia = "Wednesday";
      break;
    case 5:
      nombreDelDia = "Thursday";
      break;
    case 6:
      nombreDelDia = "Friday";
      break;
    case 7:
      nombreDelDia = "Sunday";
      break;

    default:
      nombreDelDia = "Wrong, please enter a number between 1 and 7";
  }
  return nombreDelDia;
}
//console.log(whatday(8));

/* Desafío dia 2
Cree una función que devuelva el valor multiplicado por 50 y aumentado por 6. Si el valor ingresado es una cadena, debe devolver "Error".*/
function problem(x) {
  if (typeof x === "string") {
    return "Error";
  }
  return x * 50 + 6;
}
console.log(problem("RyanIsCool"));

/*Desafio dia 3
Se proporciona una función Kata que acepta dos parámetros en el siguiente orden: matriz, elemento y devuelve el índice del elemento si se encuentra y "No se encuentra" en caso contrario. Su tarea es acortar el código tanto como sea posible para cumplir con los estrictos requisitos de recuento de caracteres de Kata. (no más de 161) Puede asumir que todos los elementos de la matriz son únicos. */
function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Not found";
}
