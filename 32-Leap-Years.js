/*Dia 32(ayer no hice mi ejercicio diario )
En este kata, simplemente debes determinar si un año determinado es bisiesto o no. En caso de que no conozcas las reglas, aquí están: los años divisibles por 4 son bisiestos, pero los años divisibles por 100 no son bisiestos, pero los años divisibles por 400 sí lo son.
Los años evaluados están en el rango 1600 ≤ año ≤ 4000. 
Resumen
Si es divisible por 4: podría ser bisiesto.
Si también es divisible por 100, no es bisiesto a menos que sea divisible por 400.*/
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
console.log(isLeapYear(2020));

/*otra solucion sacada de coderwars 
function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}*/
