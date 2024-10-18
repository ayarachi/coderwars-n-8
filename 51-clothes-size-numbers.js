/*Dia 51
https://www.codewars.com/kata/667dfbaa4570b2db26aedc8c/train/javascript

Tienes la talla internacional de ropa como texto (xs, s, xxl).
Tu objetivo es devolver la talla europea como un número de esa talla.

Ten en cuenta que hay una cantidad arbitraria de modificadores (x), excluyendo la talla m, y la entrada puede ser cualquier cadena.

Linealidad
La talla base para mediana (m) es 38.
(entonces, pequeña (s) es 36 y grande (l) es 40)

La escala es lineal; el modificador x continúa eso sumando o restando 2 de la talla resultante.

(Para las tallas donde el modificador x hace que la talla total sea negativa, trátalo como correcto y devuelve una talla negativa)

Casos no válidos
La función debe manejar tallas incorrectas o no válidas.

La entrada válida tiene cualquier talla base (s/m/l) y cualquier cantidad de modificadores (x) antes de la talla base (como xxl).
Ten en cuenta que no puedes aplicar el modificador para la talla m, ¡considera ese caso como no válido!
Cualquier otro valor no está permitido y debe considerarse inválido (Ninguno para Python, 0, falso para Go, nulo para JavaScript).

Ejemplos inválidos: xxx, sss, xm, otra cadena

Ejemplos válidos
xs: 34
s: 36
m: 38
l: 40
xl: 42

Explicación del código
¿Qué hace esto?
Usamos una expresión regular para asegurarnos de que la entrada sea válida.

Explicación del patrón /^(xs|xl|x*l|x*s|m)$/:

^: El inicio de la cadena.
xs: Acepta exactamente la talla "xs".
xl: Acepta exactamente la talla "xl".
x*l: Acepta combinaciones como "xl", "xxl", "xxxl".
x*s: Acepta combinaciones como "xs", "xxs", "xxxs".
m: Acepta exactamente "m".
$: El final de la cadena.
Si la entrada no coincide con este patrón, la función devuelve null y no continúa.


 */

function sizeToNumber(size) {
  // Validar que el tamaño coincida con los patrones permitidos
  const validPattern = /^(xs|xl|x*l|x*s|m)$/;
  if (!validPattern.test(size)) return null; // Si no coincide, devolvemos null

  const xCount = (size.match(/x/g) || []).length; // Contar las "x"

  // Definir los valores base para las tallas
  const baseValues = {
    xs: 34,
    s: 36,
    m: 38,
    l: 40,
    xl: 42,
  };

  // Devolvemos el valor directamente si es una talla sin "x" extra
  if (baseValues[size] !== undefined) {
    return baseValues[size];
  }

  // Si la talla es "xxl", "xxxl", etc., aplicamos ajustes para "l"
  if (size.endsWith("l")) {
    return 40 + xCount * 2;
  }

  // Si la talla es "xxs", "xxxs", etc., aplicamos ajustes para "s"
  return 36 - xCount * 2;
}

// Ejemplos de uso
console.log(sizeToNumber("xs")); // 34
console.log(sizeToNumber("s")); // 36
console.log(sizeToNumber("m")); // 38
console.log(sizeToNumber("l")); // 40
console.log(sizeToNumber("xl")); // 42
console.log(sizeToNumber("xxl")); // 44
console.log(sizeToNumber("xxxs")); // 32
console.log(sizeToNumber("xxxxl")); // 48
console.log(sizeToNumber("xm")); // null (entrada inválida)
console.log(sizeToNumber("abc")); // null (entrada inválida)

console.log(sizeToNumber("xl"));
/*Solución encontrada en apx function sizeToNumber(size) {
  if (size == "s") return 36;
  if (size == "m") return 38;
  if (size == "l") return 40;
  const x = size.match(/x/g)?.length;
  if (/^x+s$/.test(size)) return 36 - (x * 2);
  if (/^x+l$/.test(size)) return 40 + (x * 2);
  return null
} */
