/* Dia 53

Dada una cadena (string) en minúsculas que solo tiene caracteres alfabéticos y ningún espacio, 
devuelve el valor más alto de las subcadenas de consonantes. 
Las consonantes son todas las letras del alfabeto excepto "aeiou".

Asignaremos los siguientes valores: a = 1, b = 2, c = 3, .... z = 26.

Por ejemplo,
 para la palabra "zodíacos", tachemos las vocales. Obtenemos: "z o d ia c"

"zodiac" -> 26
Las subcadenas consonánticas son: "z", "d" y "c" con valores "z" = 26, "di" = 4 y "c" = 3. El más alto es 26.

"strength" -> 57
Las subcadenas consonánticas son: "str" ​​y "ngth" con valores "str" ​​= 19 + 20 + 18 = 57 y "ngth" = 14 + 7 + 20 + 8 = 49. El más alto es 57.

Para C: no mute la entrada.

Más ejemplos en casos de prueba. ¡Buena suerte! */
function valorSubcadena(subcadena) {
  let suma = 0;
  for (let i = 0; i < subcadena.length; i++) {
    const codigoAscii = subcadena.charCodeAt(i);
    const valorLetra = codigoAscii - 96;
    suma += valorLetra;
  }
  return suma;
}

function solve(s) {
  let valorMax = 0;
  let vocales = ["a", "e", "i", "o", "u"];
  let subCadConsonantes = "";

  for (let i = 0; i < s.length; i++) {
    const letra = s[i];
    if (!vocales.includes(letra)) {
      subCadConsonantes += letra;
    } else {
      // Es vocal, procesamos la subcadena de consonantes actual
      if (subCadConsonantes.length > 0) {
        const valorActual = valorSubcadena(subCadConsonantes);
        if (valorActual > valorMax) {
          valorMax = valorActual;
        }
        // Reiniciamos la subcadena de consonantes
        subCadConsonantes = "";
      }
    }
  }

  // Procesar la última subcadena si la cadena termina con consonantes
  if (subCadConsonantes.length > 0) {
    const valorActual = valorSubcadena(subCadConsonantes);
    if (valorActual > valorMax) {
      // Reemplazamos valorMaxi por valorMax
      valorMax = valorActual;
    }
  }
  return valorMax;
}

console.log(solve("zodiac"));

/*solución encontrada en la plataforma
function solve(s) {
  var alph = ' abcdefghijklmnopqrstuvwxyz';
        var x = s.split(/[aeiou]/g);
        let res = x.map(el => el.split('').reduce((a,b)=>a+alph.indexOf(b),0))
        return Math.max(...res);
  } */
