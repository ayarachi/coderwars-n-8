/*Dia 72
Completa la función que acepta un parámetro de cadena e invierte cada palabra de la cadena. Se deben conservar todos los espacios en la cadena.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}
console.log(reverseWords("This is an example!"));
/*Como esta funcionando 
1.en el primer split divide el string en un arreglo de palabras
2. Luego mapea cada palabra y aplica nuevamente split para dividirla en caracteres
3. Aplica reverse()para invertir el oreden de los caracteres
4. Luego une los caracteres invertidos cn join ("")
5. Por último une el arreglo de palabras invertidas  en un solo string con espaciosn entre ellas con join(" ")
*/
