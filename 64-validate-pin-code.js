/*Los cajeros automáticos permiten códigos PIN de 4 o 6 dígitos y los códigos PIN no pueden contener nada más que exactamente 4 o 6 dígitos.

Si se pasa a la función una cadena de PIN válida, devuelve verdadero; de lo contrario, devuelve falso.

Ejemplos (Entrada --> Salida)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
 */
function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  const regex = /^\d+$/;
  return regex.test(pin);
}
console.log(validatePIN("123a"));
/*Expresión Regular:

const regex = /^\d+$/; define una expresión regular que coincide solo si pin está compuesto exclusivamente por dígitos (\d).
regex.test(pin) verifica el pin contra esta expresión regular y retorna true solo si pin contiene únicamente dígitos sin ningún carácter adicional (como signos o puntos).
^\d+$ asegura que todos los caracteres son dígitos (\d).
^ y $ delimitan el inicio y fin, para que no haya caracteres adicionales como signos, letras o puntos decimales.

 */
