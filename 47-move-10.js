/*DIA 47
https://www.codewars.com/kata/57cf50a7eca2603de0000090/train/javascript
Mueve cada letra de la cadena proporcionada 10 letras hacia adelante en el alfabeto.

Si pasa de 'z', comienza de nuevo en 'a'.

La entrada será una cadena con una longitud > 0. 
 "testcase"=> "docdmkco";
"codewars"=>"mynogkbc";
"exampletesthere"=>"ohkwzvodocdrobo";
  })
explicación  En JavaScript, cada carácter tiene un código ASCII asociado. Las letras minúsculas 'a' a 'z' tienen códigos ASCII del 97 al 122.

*/
function moveTen(s) {
  let resultado = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    // element.charCodeAt(0): Obtiene el código ASCII del carácter actual. - 97: Restas 97 para que la letra 'a' corresponda al índice 0. Esto te da la posición de la letra en el alfabeto (0-25).
    let codigoAscii = element.charCodeAt(0) - 97;
    //codigoAscii + 10: Desplazas la letra 10 posiciones hacia adelante,% 26: Usas el operador módulo para asegurarte de que, si se pasa de la letra 'z', vuelva a empezar desde 'a'.
    let nuevaPosicion = (codigoAscii + 10) % 26;
    //nuevaPosicion + 97: Vuelves a ajustar el código ASCII para obtener la nueva letra.String.fromCharCode(...): Convierte el código ASCII en el carácter correspondiente.resultado.push(...): Agregas la nueva letra al array resultado.
    resultado.push(String.fromCharCode(nuevaPosicion + 97));
  }
  return resultado.join("");
}
console.log(moveTen("testcase"));

/*solución encomntrada en coderwar
function moveTen(s){
  return s.split('').map(e => e.charCodeAt(0) + 10 > 122? String.fromCharCode(e.charCodeAt(0) - 16) 
  : String.fromCharCode(e.charCodeAt(0) + 10)).join('');
} */
