/* DIA 40
https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/javascript
Se colocan dos cuentas rojas entre cada dos cuentas azules. 
Hay N cuentas azules. 
Después de observar la disposición que aparece a continuación, calcule la cantidad de cuentas rojas.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implemente count_red_beads(n) (en PHP count_red_beads($n); en Java, Javascript, TypeScript, C, C++ countRedBeads(n)) de modo que devuelva la cantidad de cuentas rojas.
Si hay menos de 2 cuentas azules, devuelva 0. */

// debo retornar un n
function countRedBeads(n) {
  if (n === 0) {
    return 0;
  }
  let resta = n - 1;
  return resta * 2;
}

/*otra solución de coderwar
function countRedBeads(n) {
  return n < 2 ? 0 : 2 * n - 2;
}
*/
