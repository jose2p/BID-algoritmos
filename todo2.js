// Funcion que resibe un dato como entrada y crea un arreglo nuevo desde ese numero
// hasta el 0 de forma regresiva, cuanto mide el arreglo?
function contarHastaCero(num) {
    let arreglo = [];
    for (let i = num; i >= 0; i--) {
      arreglo.push(i);
    }
    return arreglo;
  }
// El arreglo siempre medira uno mas que el numero que se le pasa por parametro.

//Tu función recibirá un arreglo con dos números. Imprime el primer valor y devuelve el segundo.

function ImprimirRetornar(arr) {
    console.log(arr[0])
    return arr[1];
}


// Primero más length
function sumarPrimerValor(arr) {
    let primerValor = arr[0];
    let longitud = arr.length;
    return primerValor + longitud;
  }
// Si el primer valor no es un numero ocurrira una concatenacion


// Valores mayores que el segundo
function MayoresSegundo() {
    arr = [1,3,5,7,9,13]
    let sum = 0;
    arr.forEach(i => {
        if (arr[1] < i) {
            console.log(i)
            sum++
        }
    });
    return sum
}
// Valores mayores que el segundo, generalizados
function MayoresSegundo(arr) {
    let sum = 0;
    if (arr.length >= 2) {
        arr.forEach(i => {
            if (arr[1] < i) {
                console.log(i)
                sum++
            }
        });
        return sum
    }else{
        return "El arreglo no tiene un segundo elemento"
    }
}
// ¿Qué harás si el arreglo tiene solo un elemento? Primero vamos a revisar si solo tiene un elemento o no.


// Esta longitud, ese valor
function createArray(num1, num2) {
    let arr = [];
    for (let i = 0; i < num1; i++) {
      arr.push(num2);
      if (num1 === num2) {
        console.log("¡Jinx!");
      }
    }
    return arr;
  }
//   Ajustar el primer valor  
function acceptArray(arr) {
    const Longitud = arr.length
    if (arr[0]> Longitud) {
        console.log("Demasiado grande")
    }else if (arr[0]< Longitud) {
        console.log("Demasiado pequeño")
    }else {
        console.log("Perfecto")
    }
}

// Fahrenheit a Celsius
function fahrenheitToCelsius(fDegrees) {
    const cDegrees = (fDegrees - 32) * 5 / 9;
    return cDegrees;
  }

//   Celsius a Fahrenheit
function celsiusToFahrenheit(cDegrees) {
    const fDegrees = (cDegrees * 9/5) + 32;
    return fDegrees;
  }
  