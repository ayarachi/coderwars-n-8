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
//console.log(problem("RyanIsCool"));

/*Desafio dia 3
Se proporciona una función Kata que acepta dos parámetros en el siguiente orden: matriz, elemento y devuelve el índice del elemento si se encuentra y "No se encuentra" en caso contrario. Su tarea es acortar el código tanto como sea posible para cumplir con los estrictos requisitos de recuento de caracteres de Kata. (no más de 161) Puede asumir que todos los elementos de la matriz son únicos.El codigo tiene que tener no mas de 85 caracteres */
// a= array, e= element todo reducido lo menos posible
// indexOf() El método indexOf() busca un elemento en un array y devuelve su índice. Si no lo encuentra, devuelve -1, por lo que puedes manejar esto para devolver "Not found"
function find(a, e) {
  return a.indexOf(e) !== -1 ? a.indexOf(e) : "Not found";
}
//console.log(find([2, 3, 5, 7, 11], 1));

/* Desafio dia 4
Dados tres números enteros a, b y c, devuelve el número más grande obtenido después de insertar los operadores +, * y paréntesis (). En otras palabras, prueba cada combinación de a, b y c con los operadores, sin reordenar los operandos, y devuelve el valor máximo.

Ejemplo
Con los números 1, 2 y 3, estas son algunas expresiones posibles:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
El valor máximo que se puede obtener es 9.*/

/*function expressionMatter(a, b, c) {
  let resultado = [];
  let forma1 = a * (b + c);
  resultado.push(forma1);
  let forma2 = a * b * c;
  resultado.push(forma2);
  let forma3 = a + b * c;
  resultado.push(forma3);
  let forma4 = (a + b) * c;
  resultado.push(forma4);
  let forma5 = a + b + c;
  resultado.push(forma5);
  return Math.max(...resultado);
}*/
//console.log(expressionMatter(2, 1, 2));
// codigo refactorizado
function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
}
//console.log(expressionMatter(1, 1, 1));

/*
Desafio dia 5 
Crea una función que tome un número entero como argumento y devuelva "Par" para números pares o "Impar" para números impares*/
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
//console.log(evenOrOdd(-748));
//código refactorizado

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
//console.log(evenOrOdd(-748));
/* Desafio dia 6 
Dada una cadena, debes devolver una cadena en la que cada carácter (sensible a mayúsculas y minúsculas) se repita una vez.*/
function doubleChar(str) {
  let resultado = "";
  for (let i = 0; i < str.length; i++) {
    resultado += str[i] + str[i];
  }
  return resultado;
}
//console.log(doubleChar("abcd"));

/* Dado un punto en un plano euclidiano (x e y), devuelve el cuadrante en el que se encuentra el punto: 1, 2, 3 o 4 (número entero). x e y son números enteros distintos de cero, por lo tanto, el punto dado nunca se encuentra en los ejes.
Pasos para Determinar el Cuadrante
Observa los signos de las coordenadas x e y:

Si x > 0 y y > 0, el punto está en el Cuadrante 1.
Si x < 0 y y > 0, el punto está en el Cuadrante 2.
Si x < 0 y y < 0, el punto está en el Cuadrante 3.
Si x > 0 y y < 0, el punto está en el Cuadrante 4.
Aplica esta lógica a cualquier punto:

Ejemplo (1, 2):

Aquí, x = 1 y y = 2.
Ambos son positivos, así que el punto está en el Cuadrante 1
Ejemplos (1, 2) => 1 (3, 5) => 1 (-10, 100) => 2 (-1, -9) => 3 (19, -56) => 4*/
function quadrant(x, y) {
  if (x > 0 && y > 0) {
    return 1;
  }
  if (x < 0 && y > 0) {
    return 2;
  }
  if (x < 0 && y < 0) {
    return 3;
  }
  if (x > 0 && y < 0) {
    return 4;
  }
}
//console.log(quadrant(1, 2));
/*Dadas 2 cadenas, a y b, devuelve una cadena con la forma short+long+short, con la cadena más corta en el exterior y la cadena más larga en el interior. Las cadenas no tendrán la misma longitud, pero pueden estar vacías (longitud cero).*/
function solution(a, b) {
  let cadena1 = a.length;
  let cadena2 = b.length;
  if (cadena1 > cadena2) {
    return `${b}${a}${b}`;
  } else {
    return `${a}${b}${a}`;
  }
}
console.log(solution("ar", "lom"));
/*  otra manera de hacerlo 
function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
}
  console.log(solution("ar", "lom"));
*/
