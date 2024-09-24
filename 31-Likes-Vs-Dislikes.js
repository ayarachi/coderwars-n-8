/* DIA 31
YouTube tenía un botón de Me gusta y otro de No me gusta, que permitía a los usuarios expresar sus opiniones sobre un contenido en particular. Estaba configurado de tal manera que no se puede dar Me gusta y No me gusta a un video al mismo tiempo. Hay otras dos reglas interesantes que se deben tener en cuenta sobre la interfaz: Al presionar un botón, que ya está activo, se deshará la presión. Si presiona el botón Me gusta después de presionar el botón No me gusta, el botón Me gusta sobrescribe el estado "No me gusta" anterior. Lo mismo se aplica al revés.

Tarea Cree una función que tome una lista de entradas de botón y devuelva el estado final.

Ejemplos likeOrDislike([Dislike]) => Dislike 
likeOrDislike([Like,Like]) => Nothing 
likeOrDislike([Dislike,Like]) => Like 
likeOrDislike([Like,Dislike,Dislike]) => Nothing
 Notas Si no hay ningún botón activo actualmente, devuelve Nothing.
Si la lista está vacía, devuelve Nothing. */

const Like = "Like";
const Dislike = "Dislike";

function likeOrDislike(buttons) {
  let estadoActual = "Nothing";
  for (let i = 0; i < buttons.length; i++) {
    botonPresionado = buttons[i];
    if (estadoActual === botonPresionado) {
      estadoActual = "Nothing";
    } else {
      estadoActual = botonPresionado;
    }
  }
  return estadoActual;
}
console.log(likeOrDislike([Dislike, Like]));
