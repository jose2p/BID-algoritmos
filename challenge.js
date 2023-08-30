/*Desafío de fin de semana
Este fin de semana, para un desafío, crea un juego de preguntas donde se completen espacios en blanco. 
Pregunta el nombre del usuario, luego refiérete al usuario por su nombre mientras le haces una serie de 
preguntas que has almacenado en un arreglo. Utiliza la función prompt() para obtener cada entrada del usuario
 y compararla con la respuesta que esperabas. Cuando el usuario ingrese "Q" (para salir), o quizás cuando el
  usuario presione [Cancel], sale del juego y se imprimen las estadísticas del juego en la consola: 
  nombre de usuario, número de preguntas respondidas y preguntas correctas.
*/

//Leer datos, nombre o respuesta
async function leerDato(pregunta) {
    const readline = require('readline');
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            rl.close();
            resolve(respuesta);
        });
    });
}
async function weekendChallenge() {
    const nombre = await leerDato('Por favor, ingresa tu nombre: ');
    console.log(`¡Hola, ${nombre}!`);

    const preguntas = [
        "¿Cuánto es 3 x 5?",
        "El mejor jugador del fútbol",
        "El río más largo del mundo",
        // ... Otras preguntas
    ];

    let respuestasCorrectas = 0;

    for (let i = 0; i < preguntas.length; i++) {
        const respuesta = await leerDato(preguntas[i] + ' ');
        if (respuesta.toLowerCase() === respuestasEsperadas[i].toLowerCase()) {
            console.log("¡Correcto!");
            respuestasCorrectas++;
        } else {
            console.log("Incorrecto.");
        }
    }

    console.log(`\n${nombre}, has respondido ${preguntas.length} preguntas y has acertado ${respuestasCorrectas}.`);
}

const respuestasEsperadas = [
    "15",
    "Messi",
    "Amazonas",
    // ... Otras respuestas
];

weekendChallenge();