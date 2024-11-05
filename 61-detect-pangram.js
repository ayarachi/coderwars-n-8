/* Dia 61
https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
Un pangrama es una oración que contiene cada una de las letras del alfabeto al menos una vez. 
Por ejemplo, la oración "The quick brown fox jumps over the lazy dog" es un pangrama, porque utiliza las letras A a Z al menos una vez (no importa si es mayúscula o minúscula).
Ingresa
Dada una cadena, detecta si es o no un pangrama. 
Retorna
Devuelve True si lo es, False si no lo es. 
Ignora los números y la puntuación.

 */
function isPangram(string) {
  const letras = new Set(string.toLowerCase().match(/[a-z]/g));
  return letras.size === 26 ? true : false;
}

console.log(isPangram("This is not a pangram."));
