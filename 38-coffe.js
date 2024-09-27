/* DIA 38
https://www.codewars.com/kata/595d54bddddd7cf91800008c/train/javascript

Tarea: escribir una función "café" que acepte una cadena como parámetro y devuelva esa cadena con cada instancia de café en mayúsculas.

Entrada: cadena. La palabra "café" puede aparecer más de una vez. Puede tener algunas letras mayúsculas o estar ya en mayúsculas. También puede haber puntuación en la cadena. No será parte de otra palabra como "Coffeeburger", que de todos modos no es una palabra.

Salida: cadena con todas las instancias de café en mayúsculas:

Ejemplos:

Entrada: "¿Solo tomé dos tazas de café esta mañana? Necesito más". 
Salida:=> "¿Solo tomé dos tazas de CAFÉ esta mañana? Necesito más".

Entrada: "¡Café! ¡Cómprame un CAFÉ!"
 Salida: =>"¡CAFÉ! ¡Cómprame un CAFÉ!"
 */
function coffee(str) {
  return str.replace(/\bcoffee\b/gi, "COFFEE");
}
console.log(coffee("¿Solo tomé dos tazas de coffee esta mañana? Necesito más"));

/*
str.replace(): Indica que vamos a reemplazar algo en la cadena str.

/\bcafé\b/gi: Esta es la expresión regular que describe cómo buscar la palabra "café" en la cadena. Desglosemos la expresión:

\b: Este es un límite de palabra. Sirve para asegurarte de que estás buscando la palabra completa "café" y no solo parte de una palabra más grande. Por ejemplo, evita que coincida con una palabra como "Coffeeburger" o "CaféLatte". Solo coincidirá con "café" por sí misma.
café: Es la palabra que estamos buscando.
\b: Al tener otro límite de palabra después de "café", garantizamos que solo coincida con la palabra "café" completa y no con variaciones que formen parte de otra palabra.
g: Significa global. Esto asegura que todas las apariciones de "café" en la cadena serán reemplazadas, no solo la primera que se encuentre.
i: Significa insensible a mayúsculas y minúsculas (case-insensitive). Esto permite que "café", "Café", "CAFÉ", etc., se detecten sin importar su capitalización.
"CAFÉ": Esta es la cadena que reemplazará cada instancia de "café" que la expresión regular encuentre. Cada vez que el patrón de la expresión regular coincida, será reemplazado por "CAFÉ" en mayúsculas.

Resultado: La función devuelve una nueva cadena donde todas las instancias de la palabra "café" (en cualquier forma de mayúsculas o minúsculas) han sido reemplazadas por "CAFÉ".

EXPRESIONES REGULARES 
Las expresiones regulares son una forma de definir patrones para buscar, validar, y manipular texto.
Son muy útiles para realizar tareas complejas de búsqueda y reemplazo.
Componentes clave de una expresión regular
Límites (\b):

Sirven para delimitar el principio o el final de una palabra. Por ejemplo, \bcafé\b solo coincide con "café" como palabra completa, no con "cafetería" o "CaféLatte".
Modificadores (flags):

g (global): Busca todas las coincidencias, no solo la primera.
i (insensitive): Ignora mayúsculas y minúsculas durante la búsqueda.
m (multilínea): Permite que las expresiones regulares trabajen sobre múltiples líneas.
Metacaracteres: Estos caracteres tienen un significado especial y te ayudan a construir patrones más avanzados:

. (punto): Coincide con cualquier carácter excepto saltos de línea.
\d: Coincide con cualquier dígito (número del 0 al 9).
\w: Coincide con cualquier letra, número o guion bajo (palabras).
\s: Coincide con cualquier espacio en blanco (espacio, tabulación, salto de línea).
Cuantificadores:

*: Coincide con cero o más repeticiones del patrón anterior.
+: Coincide con uno o más repeticiones.
?: Coincide con cero o uno (opcional).
{n}: Coincide con exactamente n repeticiones.
Grupos y alternancias:

Paréntesis (): Permiten agrupar partes de la expresión regular.
| (alternancia): Sirve para representar "o" en las coincidencias. Por ejemplo, gato|perro coincide con "gato" o "perro".
*/
