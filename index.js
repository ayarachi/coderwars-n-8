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

/* Desafio dia 7
Dado un punto en un plano euclidiano (x e y), devuelve el cuadrante en el que se encuentra el punto: 1, 2, 3 o 4 (número entero). x e y son números enteros distintos de cero, por lo tanto, el punto dado nunca se encuentra en los ejes.
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

/* Desafio dia 8
Dadas 2 cadenas, a y b, devuelve una cadena con la forma short+long+short, con la cadena más corta en el exterior y la cadena más larga en el interior. Las cadenas no tendrán la misma longitud, pero pueden estar vacías (longitud cero).*/
function solution(a, b) {
  let cadena1 = a.length;
  let cadena2 = b.length;
  if (cadena1 > cadena2) {
    return `${b}${a}${b}`;
  } else {
    return `${a}${b}${a}`;
  }
}
//console.log(solution("ar", "lom"));
/*  otra manera de hacerlo 
function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
}
  console.log(solution("ar", "lom"));
*/
/* Desafio numero 9
 Le preguntas a una niña pequeña: "¿Qué edad tienes?". Ella siempre responde: "x años", donde x es un número aleatorio entre 0 y 9. Escribe un programa que devuelva la edad de la niña (0-9) como un entero.

Supón que la cadena de entrada de prueba siempre es una cadena válida. Por ejemplo, la entrada de prueba puede ser "1 año" o "5 años". El primer carácter de la cadena siempre es un número.*/
function getAge(inputString) {
  return Number(inputString[0]);
}
//console.log(getAge("9 años"));

// NIVEL 7

/*Desafio dia 10
Se le proporciona un diccionario/hash/objeto que contiene algunos idiomas y los resultados de su prueba en los idiomas indicados. Devuelve la lista de idiomas en los que su puntuación en la prueba es al menos 60, en orden descendente de las puntuaciones.

Nota: las puntuaciones siempre serán únicas (por lo que no habrá valores duplicados)	
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  [] */

function myLanguages(results) {
  let menos60 = Object.keys(results).filter((clave) => results[clave] >= 60);
  return menos60.sort((a, b) => results[b] - results[a]);
}
//console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }));

/* Desafio dia  11
Crea un programa que filtre una lista de cadenas y devuelva una lista que solo contenga el nombre de tus amigos.

Si un nombre tiene exactamente 4 letras, puedes estar seguro de que debe ser un amigo tuyo. De lo contrario, puedes estar seguro de que no lo es... */
function friend(friends) {
  return friends.filter((element) => element.length === 4);
}
//console.log(friend(["Ryan", "Kieran", "Mark"]));

/* DESAFIO DIA 12 
Escriba una función que duplique cada segundo entero de una lista, comenzando desde la izquierda.

Ejemplo:
[1,2,3,4]
[1,4,3,8]

Para una matriz/lista de entrada:*/
function doubleEveryOther(a) {
  let resultado = [];
  for (let i = a.length - 1; i >= 0; i--) {
    let element = a[i];
    console.log(element);
    if (i % 2 != 0) {
      let doble = element * 2;
      resultado.push(doble);
      //console.log(doble);
    } else {
      resultado.push(element);
    }
  }
  return resultado.reverse();
}

//console.log(doubleEveryOther([1, 2, 3, 4]));
// Esta es otra solucion, debes entender bien esta funcion porque es bien simple.
function doubleEveryOther(a) {
  for (let i = 1; i < a.length; i += 2) {
    a[i] *= 2;
  }
  return a;
}
//console.log(doubleEveryOther([1, 2, 3, 4]));

/* DESAFIO DIA 13
Tu tarea es crear una función que pueda tomar cualquier número entero no negativo como argumento y devolverlo con sus dígitos en orden descendente. Básicamente, reorganiza los dígitos para crear el número más alto posible.
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

//console.log(descendingOrder(42145));
/* Paso a paso:
String(n):

Convierte el número n en una cadena de texto.
Por ejemplo, si n es 42145, String(n) convierte este número en la cadena "42145".
.split(''):

Convierte la cadena en un array de caracteres (dígitos).
"42145".split('') convierte la cadena en el array ['4', '2', '1', '4', '5'].
.sort():

Ordena los elementos del array en orden ascendente (alfabéticamente).
['4', '2', '1', '4', '5'].sort() ordena los dígitos como ['1', '2', '4', '4', '5'].
.reverse():

Invierte el orden de los elementos en el array, colocando los elementos en orden descendente.
['1', '2', '4', '4', '5'].reverse() cambia el orden a ['5', '4', '4', '2', '1'].
.join(''):

Combina los elementos del array de nuevo en una sola cadena.
['5', '4', '4', '2', '1'].join('') convierte el array en la cadena "54421".
parseInt(..., 10):

Convierte la cadena de texto resultante de nuevo en un número entero.
parseInt("54421", 10) convierte la cadena "54421" en el número 54421.
Resultado:
La función completa toma un número, ordena sus dígitos en orden descendente y luego lo convierte de nuevo en un número entero.
*/

/*  Desafío dia 14
John estaba en clase de matemáticas y se aburrió, así que decidió doblar un origami a partir de una hoja de papel rectangular a × b (a > b). Su primer paso es hacer un trozo de papel cuadrado a partir del trozo de papel rectangular inicial doblando la hoja a lo largo de la bisectriz del ángulo recto y cortando la parte sobrante.
Después de mover el trozo de papel cuadrado a un lado, John quería hacer aún más cuadrados. Tomó la tira de papel restante (a-b) × b y continuó con el proceso hasta que le quedó un trozo de papel cuadrado.

Tu tarea es determinar cuántos trozos de papel cuadrados puede hacer John. Para: a = 2, b = 1, el resultado debería ser 2.

Dado a = 2 y b = 1, John puede doblar un 1 × 1 y luego otro 1 × 1.

Por lo tanto, la respuesta es 2.

Para: a = 10, b = 7, el resultado debería ser 6.

Tenemos a = 10 y b = 7. El siguiente es el orden de los cuadrados que dobla John: 7 × 7, 3 × 3, 3 × 3, 1 × 1, 1 × 1 y 1 × 1.



*/
function folding(a, b) {
  let contador = 1;
  while (a !== b) {
    console.log(`a=${a} b=${b}`);
    let temporario;

    // Ordenar los valores
    if (a < b) {
      temporario = a;
      a = b;
      b = temporario;
    }

    // Calcular los valores nuevos
    temporario = a;
    a = b;
    b = temporario - b;

    contador += 1;
    if (contador > 10);
  }
  return contador;
}
//console.log(folding(1000, 999));
// Esta es otra manera de resolverla que tengo que leer el codigo e intentar entenderlo
function folding(a, b) {
  if (b == 0) {
    return 0;
  } else {
    return 1 + folding(Math.max(b, a - b), Math.min(b, a - b));
  }
}
//console.log(folding(1000, 999));

/*Desafio dia 15
Historia Ben tiene una idea muy simple para obtener ganancias: compra algo y lo vende nuevamente. Por supuesto, esto no le daría ninguna ganancia si simplemente lo comprara y lo vendiera al mismo precio. En cambio, lo comprará al precio más bajo posible y lo venderá al más alto.

Tarea Escribe una función que devuelva tanto el número mínimo como el máximo de la lista/matriz dada.

Ejemplos (Entrada --> Salida) [1,2,3,4,5] --> [1,5] [2334454,5] --> [5,2334454] [1] --> [1,1 ] Observaciones Todas las matrices o listas siempre tendrán al menos un elemento, por lo que no es necesario verificar la longitud. Además, tu función siempre obtendrá una matriz o una lista, no tienes que verificar si es nula, indefinida o similar.
 */
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
console.log(minMax([1, 2, 3, 4, 5]));
