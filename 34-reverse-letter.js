/*dia 34 reverese-letter
Tarea
Dada una cadena str, inviértala y omita todos los caracteres no alfabéticos.

Ejemplo
Para str = "krishan", la salida debería ser "nahsirk".

Para str = "ultr53o?n", la salida debería ser "nortlu".

Entrada/Salida
[entrada] cadena str
Una cadena consta de letras latinas en minúscula, dígitos y símbolos.

[salida] una cadena
 */
function reverseLetter(str) {
  let arr = str.split("");

  let resultado = arr.filter(
    (element) =>
      (element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90) ||
      (element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122)
  );
  return resultado.reverse().join("");
}
console.log(reverseLetter("hola5¡"));

//otra solución sacada de coderwar
//reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');
