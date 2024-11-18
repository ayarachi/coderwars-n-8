/*Dia 70 
The Coupon Code
Data time
https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript

A tu tienda online le gusta regalar cupones para ocasiones especiales. 
Algunos clientes intentan engañar al sistema ingresando códigos no válidos o usando cupones vencidos.

Tarea Tu misión: 
Escribe una función llamada checkCoupon que verifique que un código de cupón sea válido y no esté vencido.

Un cupón deja de ser válido el día DESPUÉS de la fecha de vencimiento. Todas las fechas se pasarán como cadenas en este formato: "MES, FECHA, AÑO".
Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
 */
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const current = new Date(currentDate);
  const expiration = new Date(expirationDate);
  if (enteredCode === correctCode && current <= expiration) {
    return true;
  } else return false;
}
console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014"));
/*En JavaScript, las fechas en formato de cadena (como "September 5, 2014") no pueden compararse correctamente utilizando operadores como <=, >=, <, o >, porque esas comparaciones funcionan directamente con números, y las cadenas no se convierten automáticamente en valores numéricos para esta operación. */
