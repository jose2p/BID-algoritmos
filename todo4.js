/*Stan aprendió algo hoy: que la disminución directa de la longitud de un arreglo (.length) lo acorta inmediatamente en esa cantidad. Dado el arreglo arr y el número X, elimina todos excepto los últimos elementos X, y devuelve arr (modificado y más corto). Dado ([2,4,6,8,10], 3), cambia el arreglo dado a [6,8,10] y devuélvelo.*/
arreglo = [1, 2, 3, 4, 5, 6, 7];
function Ultimos(arr, x) {
    let longitud = arr.length
    for (let i = 0; i < longitud - x; i++) {
        arr.splice(0,1); 
    }
    return arr;
}

//El Sr. Cerise enseña matemáticas en la escuela secundaria. Escribe una función que asigne e imprima una calificación en letra, dado un número entero que represente una puntuación de 0 a 100. Aquellos que obtienen 90+ obtienen una "A", 80-89 obtienen una "B", 70-79 es una "C", 60-69 deben obtener una "D" y menos de 60 reciben una "F". Por ejemplo, con 88, deberías registrar "Puntuación: 88. Calificación: B.” Con el puntaje 61, registra la cadena "Puntaje: 61. Calificación: D".
function asignarCalificacion(puntuacion) {
  let calificacion;

  if (puntuacion >= 90) {
    calificacion = "A";
  } else if (puntuacion >= 80) {
    calificacion = "B";
  } else if (puntuacion >= 70) {
    calificacion = "C";
  } else if (puntuacion >= 60) {
    calificacion = "D";
  } else {
    calificacion = "F";
  }

  return calificacion;
}

