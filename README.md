# Ejercicios Coderwars

En este repositorio realizo prácticas diarias de problemas de lógica.

## Indicaciones para revisión de código.

1. Checkout `main``
   ```
   git checkout main
   ```
1. Crear una rama
   ```
   git checkout -b <dia>-<nombre>
   ```
1. Crear para cada ejercicio un archivo nuevo js.
   ```
   touch <dia>-<nombre>.js
   ```
1. Hacer el ejercicio
1. Añadir a GitHub
   ```
   git status
   git add .
   git commit -m "comentario"
   git push --set-upstream origin <dia>-<nombre>
   ```
1. Ir a GitHub y crear un pull request y asignar a alguien para revisar.
1. Responder a los comentarios de la revisión y hacer las modificaciones necesarias al código.
1. Si haces cambios se debe repetir el proceso de añadir a GitHub
1. Si todo esta listo en GitHub hacer merge y borar la rama en Github.
1. En la consola hacer
   ```
   git checkout main
   git pull
   git -d <dia>-<nombre>
   ```
