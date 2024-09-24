/*DIA 33
https://www.codewars.com/kata/52f3a8e1f85fadcdf7001e31/train/javascript
Tienes que definir una función para calcular la división de dos números factoriales. Esto puede ser útil para números grandes.

En matemáticas, el factorial del entero n se escribe como n!. Es igual al producto de n por cada entero que lo precede. Por ejemplo: 5! = 5 * 4 * 3 * 2 * 1 = 120.

Algunas pistas: Podemos ver que (n + 1)! = (n + 1) * n!. Por lo tanto (n + 1)! / n! = (n + 1)

Sabemos que 0! = 1 (porque n! = (n + 1)! / (n + 1) por lo tanto 0! = 1! / 1 = 1)

Y tu solución debería poder calcular n! / d!.

*** Por favor, no te preocupes por los parámetros. Solo recibirás números enteros positivos, y el primero será mayor que el segundo.
// - n y d serán BigInts positivos y también n > d. No es necesario comprobar nada de eso. */

function factorialDivision(n, d) {
  let result = 1n; //  BigInt para manejar números grandes
  for (let i = n; i > d; i--) {
    result *= BigInt(i); // Multiplicar solo los números entre n y d+1
  }
  return result; //
}
/*Explicación del Código:
Solo multiplicamos los números entre n y d+1:

En lugar de calcular el factorial completo de n y d, multiplicamos solo los números desde n hasta d+1. Esto reduce el número de operaciones a solo n - d multiplicaciones.
Usamos BigInt para manejar números grandes:

Dado que los números involucrados son muy grandes, usamos BigInt para manejar las multiplicaciones sin perder precisión.
Ejemplo de cómo funciona:
Para factorialDivision(94906265, 94906263):

En lugar de calcular el factorial completo de 94906265! y 94906263!, simplemente multiplicamos:
94906265
×
94906264
94906265×94906264
Esto evita realizar las enormes multiplicaciones necesarias para calcular 94906265!.
Comparación de Complejidad:
Cálculo de Factoriales Completos: Requiere O(n) multiplicaciones tanto para n! como para d!, lo cual es extremadamente lento para números grandes.
Optimización con Cancelación: Solo necesita O(n - d) multiplicaciones, lo que reduce drásticamente la cantidad de trabajo, especialmente cuando n es cercano a d. */

//Yo entendia eesta resolucion, pasa los test en coderwars pero el tiempo de ejecución es demasiaso
/*function factorialDivision(n, d) {
    // Calcular el factorial de n usando BigInt
    let factorialN = 1n; // Inicializar como BigInt
    for (let i = n; i > 1n; i--) { // Bucle usando BigInt
      factorialN *= i;
    }
  
    // Calcular el factorial de d usando BigInt
    let factorialD = 1n; // Inicializar como BigInt
    for (let i = d; i > 1n; i--) { // Bucle usando BigInt
      factorialD *= i;
    }
  
    // Dividir n! por d!
    return factorialN / factorialD; // La división también usa BigInt
  }
  */
