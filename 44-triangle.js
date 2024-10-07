/* DIA 44
https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
Implementa una función que acepte 3 valores enteros a, b, c. 
La función debe devolver verdadero si se puede construir un triángulo con los lados de la longitud dada y falso en cualquier otro caso.

(En este caso, todos los triángulos deben tener una superficie mayor que 0 para ser aceptados).

Ejemplos: Entrada -> Salida 
1,2,2 -> verdadero 
4,2,3 -> verdadero 
2,2,2 -> verdadero 
1,2,3 -> falso
-5,1,3 -> falso
0,2,3 -> falso 
1,2,9 -> falso */

function isTriangle(a, b, c) {
  //Esta condición verifica si alguno de los tres lados es menor o igual a 0,es importante porque un triángulo no puede tener lados con longitud 0 o negativa.
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
    //establece que la suma de dos lados de un triángulo siempre debe ser mayor que el tercer lado.
  } else if (a + b > c && a + c > b && b + c > a) {
    return true;
  } // Retorna false si alguna de las desigualdades no se cumple
  return false;
}
console.log(isTriangle(2, 2, 2));

/*Reglas para formar un triángulo:
Para que tres lados puedan formar un triángulo, deben cumplir con una condición llamada la desigualdad triangular. Esta regla establece que la suma de las longitudes de dos lados debe ser siempre mayor que el tercer lado. Así que para tres lados a, b y c, las siguientes tres condiciones deben cumplirse:

a + b > c
a + c > b
b + c > a 

Solución encontrada en APX
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}
*/
