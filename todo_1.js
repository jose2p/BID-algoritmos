// Configuracion e intercambio 
function Intercambio() {
    let myNumber = 42
    let myName = "Alvaro"
    let myIntercambio = myNumber
    myNumber = myName
    myName = myIntercambio

}
// Imprimir -52 a 1066
function Hola(){
    for (let index = -52; index < 1067; index++) {
        console.log(index)
    }
}

// No te preocupe, sé feliz
function beCheerful() {
    console.log("Buenos días")
}
for (let index = 0; index < 98; index++) {
    beCheerful();
}
// Múltiplos de tres, pero no todos
for (let index = -300; index < 1; index = index + 3) {
    if (index != -3 && index != -6) {
        console.log(index)
    }
}
// Dices que es tu cumpleaños...
// Si 2 números dados representan tu mes y día de nacimiento en cualquier orden, registra "¿Cómo lo supiste?",
//  de lo contrario registra "Un día cualquiera...".
// Dia de cumpleaños == 21, mes de cumpleaños == 10
function cumpleañ(x, y) {
    if (x == 10 && y == 21) {
        console.log("Como lo supiste")
    } else if (x == 21 && y == 10) {
        console.log("Como lu supiste")
    } else {
        console.log("Un dia cualquiera")
    }
}



// Año bisiesto

// Escribe una función que determine si un año determinado es bisiesto. 
// Si un año es divisible por cuatro, es un año bisiesto, a menos que sea divisible por 100. 
// Sin embargo, si es divisible por 400, entonces lo es.

function Bisiesto(año) {
    if (año % 4 === 0) {
        if (año % 100 !== 0) {
            console.log("Es un año bisiesto")
        } else if (año % 100 === 0) {
            if (año % 400 === 0) {
                console.log("Es un año bisiesto")
            }
        }
    }
}
// Imprimir y contar

// Imprime todos los múltiplos enteros de 5, de 512 a 4096. Después, también registra cuántos había.
function Imprimir_Contar() {
    let contar = 0
    for (let index = 512; index < 4096; index++) {
        if (index % 5 === 0) {
            console.log(index)
            contar = contar + 1
        }
    }
}

// Múltiplos de seis

// Imprime múltiplos de 6 hasta 60.000, utilizando un WHILE.
function Multiplo() {
    let x = 0
    while (x === 60000) {
        if (x % 6 === 0) {
            console.log(x)
        }
        x = x + 1
    }
}
// Contando, a la manera del Dojo

// Imprime los números enteros del 1 al 100. Si es divisible por 5, 
// imprime "Codificando" en su lugar. Si es por 10, también imprime "Dojo". 
function Dojo() {
    for (let index = 1; index <= 100; index++ ){
        if (index % 5 === 0) {
            console.log("Codificando");
            if (index % 10 === 0) {
                console.log("Dojo")
            }
        }
        else{
            console.log(index)
        }
    }
}
// ¿Qué sabes?

// Tu función recibirá un parámetro de entrada incoming. Por favor, console.log este valor. 
function RetornarParametro(incoming) {
    console.log(incoming)
}
// Guau, es enorme...

// Agrega números enteros impares de -300,000 a 300,000, y console.log la suma final. ¿Existe un atajo?
function Sumar() {
    x = -300000;
    suma = 0
    while (x === 300000) {
        if (x % 2 !== 0) {
            suma = suma + x;
        }
        x++
    }
    console.log(suma)
}
// Cuenta regresiva cada cuatro

// Registra números positivos a partir de 2016, contando hacia atrás cada cuatro números (excluye 0), sin un bucle FOR.

function regresiva() {
    x = 2016
    while (x > 0){
        console.log(x)
        x = x - 4
    }
}
// Cuenta regresiva flexible

// Basado en el anterior ejercicio: “Cuenta regresiva cada cuatro”
// , dado lowNum, highNum, mult, print múltiplos de mult desde highNum hasta lowNum,
//  usando un FOR. Para (2,9,3), imprime 9 6 3 (en líneas sucesivas).

function regresiva_flexible() {
    let lowNum = 1
    let highNum = 20
    let mult = 2
    for (let index = highNum; index >= lowNum; index--) {
        if (index % mult === 0) {
            console.log(index)
        }
    }
}
// La cuenta regresiva final

// Esto se basa en "Cuenta regresiva flexible". Los nombres de los parámetros no son tan útiles, 
// pero el problema es esencialmente idéntico; ¡no te dejes engañar! Dados 4 parámetros (param1, param2, param3, param4),
// imprime los múltiplos de param1, comenzando en param2 y extendiéndose hasta param3. 
// Una excepción: si un múltiplo es igual a param4, omítelo (no lo imprimas). Haz esto usando un WHILE. 
// Dado (3,5,17,9), imprime 6,12,15 (que son todos los múltiplos de 3 entre 5 y 17, y excluyendo el valor 9). 

function regresiva_final(param1,param2,param3,param4) {
    let imprimir;
    let contador = 0
    while (contador <= param3) {
        imprimir = param1 * contador;
        if (imprimir !== param4 && imprimir >= param2 && imprimir <= param3) {
            console.log(imprimir)
        }
        contador++;
    }
}