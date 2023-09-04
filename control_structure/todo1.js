//Funcion que sume todos los numeros naturales hasta el numero pasado por parametro
function sigma(inclusive) {
    //Crear variable suma;
    let suma = 0;
    //Sumar todos los numeros
    for (let i = 1; i <= inclusive; i++) {
        suma += i;
    }
    //Devolver el numero
    return suma;
}

//Funcion que multiplique todos los numeros naturales hasta el numero pasado por parametro
function factorial(inclusive) {
    //Crear variable factorial;
    let factorial = 1;
    //Factorial del numero
    for (let i = 1; i <= inclusive; i++) {
        factorial *= i;
    }
    //Devolver el numero
    return factorial;
}

//Arte de estrellas, realiza 3 funciones, una que ponga los asteriscos al inicio y luego espacios, 
//(tener en cuenta tienes 75 espacios), otra al centro y otra a la izquierda

//Funcion que pone las estrellas a la izquierda
function drawLeftStars(num) {
    let texto = "";
    if (num > 75) {
        console.log("Error: solo dispones de 75 espacios de texto")
    } else {
        for (let i = 0; i < num; i++) {
            texto = texto + "*"
        }
        for (let i = 0; i < 75 - num; i++) {
            texto = texto + " "
        }
        console.log(texto)
    }
}
//Al centro
function drawRightStars(num) {
    let texto = "";
    if (num > 75) {
        console.log("Error: solo dispones de 75 espacios de texto")
    } else {
        for (let i = 0; i < 75 - num; i++) {
            texto = texto + " "
        }
        for (let i = 0; i < num; i++) {
            texto = texto + "*"
        }
        console.log(texto)
    }
}
function drawCenteredStars(num) {
    let texto = "";
    const ESPACIO = 74
    let contador = 0;
    if (num > 75) {
        console.log("Error: limite de caracteres no permitido")
    } else {
        for (let i = 0; i <= (ESPACIO / 2) - (num / 2); i++) {
            texto = texto + " "
            contador = i;
        }
        for (let i = 0; i < num; i++) {
            texto = texto + "*"
        }
        contador = contador + num + 1;
        for (contador; contador < 75; contador++) {
            texto = texto + " "
        }
        console.log(texto)
    }
}

function drawLeftChars(num,char) {
    let texto = "";
    if (num > 75) {
        console.log("Error: solo dispones de 75 espacios de texto")
    } else {
        for (let i = 0; i < num; i++) {
            texto = texto + char
        }
        for (let i = 0; i < 75 - num; i++) {
            texto = texto + " "
        }
        console.log(texto)
    }
}
function drawRightChars(num,char) {
    let texto = "";
    if (num > 75) {
        console.log("Error: solo dispones de 75 espacios de texto")
    } else {
        for (let i = 0; i < 75 - num; i++) {
            texto = texto + " "
        }
        for (let i = 0; i < num; i++) {
            texto = texto + char
        }
        console.log(texto)
    }
}
function drawCenteredChars(num,char) {
    let texto = "";
    const ESPACIO = 74
    let contador = 0;
    if (num > 75) {
        console.log("Error: limite de caracteres no permitido")
    } else {
        for (let i = 0; i <= (ESPACIO / 2) - (num / 2); i++) {
            texto = texto + " "
            contador = i;
        }
        for (let i = 0; i < num; i++) {
            texto = texto + char
        }
        contador = contador + num + 1;
        for (contador; contador < 75; contador++) {
            texto = texto + " "
        }
        console.log(texto)
    }
}
