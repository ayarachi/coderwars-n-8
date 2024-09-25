/*Dia 36 
Tu plan
Cuando un minuto es divisible por tres, el reloj dirá la palabra "Fizz".
Cuando un minuto es divisible por cinco, el reloj dirá la palabra "Buzz".
Cuando un minuto es divisible por ambos, el reloj dirá "Fizz Buzz", con dos excepciones:
A la hora en punto, en lugar de "Fizz Buzz", la puerta del reloj se abrirá y el cuco saldrá y "cucú" entre una y doce veces, según la hora.
A la media hora, en lugar de "Fizz Buzz", la puerta del reloj se abrirá y el cuco saldrá y "cucú" sólo una vez.
Con minutos que no son divisibles por tres o cinco, al principio tenías la intención de que el reloj dijera los números como Fizz Buzz, pero luego decidiste, al menos para la versión 1.0, que el reloj emitiera un sonido de "tictac" suave y sutil para que tuviera un poco más de naturaleza de reloj y un poco menos de ruido.
Tu entrada será una cadena que contenga valores de hora y minutos en formato de 24 horas, separados por dos puntos y con ceros a la izquierda. Por ejemplo, 1:34 pm sería "13:34".

El valor de retorno será una cadena que contiene la combinación de sonidos de Fizz, Buzz, Cuckoo y/o tick que el reloj necesita hacer en ese momento, separados por espacios. Tenga en cuenta que, aunque la entrada está en formato de 24 horas, los cuckoos de los relojes de cuco están en formato de 12 horas.
*/
function fizzBuzzCuckooClock(time) {
  let [horas, minutos] = time.split(":").map(Number); //debes separar la cadena de entrada en horas y minutos.
  console.log(horas, minutos);
  // Convertir a formato de 12 horas
  if (horas === 0) {
    horas = 12; // Medianoche es 12 en formato de 12 horas
  } else if (horas > 12) {
    horas = horas - 12; // Convierte formato de 24 a 12 horas
  }
  if (minutos === 0) {
    return "Cuckoo ".repeat(horas).trim(); //"cuco"tantas veces como la hora
  }
  if (minutos === 30) {
    return "cuckoo";
  }
  if (minutos % 3 === 0 && minutos % 5 === 0) {
    return "Fizz Buzz";
  } else if (minutos % 3 === 0) {
    return "Fizz";
  } else if (minutos % 5 === 0) {
    return "Buzz";
  } else {
    return "tick";
  }
}
console.log(fizzBuzzCuckooClock("21:00"));

/*Otra solución encontrada en coderwar
function fizzBuzzCuckooClock(time) {
  let [hour, minute] = time.split(':');
  return minute ==  0 ? "Cuckoo ".repeat(hour % 12 || 12).trim() :
    minute      == 30 ? "Cuckoo" : 
    minute % 15 ==  0 ? "Fizz Buzz" :
    minute % 3  ==  0 ? "Fizz" :
    minute % 5  ==  0 ? "Buzz" : 
                        "tick";
} */
