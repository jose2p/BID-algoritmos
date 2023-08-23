//Tamaño grande
/* Dado un arreglo, escribe una función que cambie todos los números positivos del arreglo a "grande". Ejemplo: makeItBig([- 1,3,5, -5]) devuelve el mismo arreglo, cambiado a [-1, "big", "big", - 5].*/
function makebig(arreglo) {

    // declaration of variables
    let word = "big"
    let newArreglo = [];

    // for loop initialized to zero to array size
    for (let array = 0; array < arreglo.length; array++) {
    
        // declaration of variable
        let memory = arreglo[array];

        if (arreglo[array] < 0) {
            newArreglo[array] = memory;
        }else{
            newArreglo[array] = word;
        }
    }
    console.log(newArreglo);
}

//Funcion que debe imprimir el valor mas bajo y retornar el mas alto.
function altoBajo(array) {
    //Los dos valores a retornar
    let alto = array[0];
    let bajo = array[0];

    //CicSlo de busqueda del menor y mayor
    for (let index = 0; index < array.length; index++) {
        if (alto < array[index]) {
            alto = array[index];
        }
        else if(bajo > array[index]){
            bajo = array[index];
        }
    }

    //Impresion y retorno de valores
    console.log(bajo);
    return alto;
}

//Funcion que toma un arreglo y imprime el penultimo valor y devolver el primer valor impar
function devolverArreglo(array) {
    //Calcular la cantidad de valores y obtener el penultimo valor.
    const cantidad = array.length;    
    const penultimo = array[cantidad-2]
    let impar;
    //Imprimimr
    console.log(penultimo);
    for (let index = 0; index < array.length; index++) {
        if ((array[index] % 2) != 0 && (array[index]) != 0) {
            impar = array[index];
            return impar;
        }
    }
}

//Vision doble, dado un arreglo devolver multiplicado por 2
function doble(arreglo) {
    let newarray = [];
    for (let index = 0; index < arreglo.length; index++) {
        newarray[index] = (arreglo[index])*2;
    }
    return newarray;
}

//Dado un arreglo de números, crea una función para reemplazar el último valor con el número de valores positivos. Por ejemplo, countPositives([- 1,1,1,1]) cambia el arreglo a [-1,1,1,3] y lo devuelve.
function countPositives(array) {
    let newarray = [];
    let cantidad = array.length
    let positivos = 0;
    //Contar los numeros positivos
    for (let index = 0; index < array.length; index++) {
        if (array[index]>0) {
            positivos += 1;
        }
    }
    newarray = array;
    newarray[cantidad-1] = positivos;
    //Cargar el ultimo valor 
    return newarray;
}

// Funcion que acepte un arreglo y que si trae tres impares seguidos imprima esto es extraño y tres pares seguidos aun más 
function parImpar(arreglo){
    //Variable mensajes
    let msgpar = "¡Aún más!";
    let msgimpar = "¡Esto es extraño!";
    //Variables contadores
    let canPar = 0;
    let canImpar = 0;
    //Recorrido del arreglo
    for (let index = 0; index < arreglo.length; index++) {
        //Si es par suma una cantidad al par y reinicia el contador impar
        if (arreglo[index] % 2 == 0) {
            canPar += 1;
            canImpar = 0;

            //Comprueba si hay 3 impares
            if (canPar == 3) {
                canPar = 0;
                console.log(msgpar);
            }
        //Si es impar, suma una cantidad al contador impar y reinicia el contador par
        }else{
            canImpar += 1;
            canPar = 0;
            if (canImpar == 3) {
                canImpar = 0;
                console.log(msgimpar)
            }
        }
    }
}
//Dado arr, agrega 1 a los elementos impares ([1], [3], etc.), console.log todos los valores y devuelve arr.
function aumentarImpares(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        arr[i]++; // Incrementa en 1 si el número es impar
      }
      console.log(arr[i]); // Muestra el valor en la consola
    }
    return arr; // Devuelve el arreglo modificado
  }
  
  //Se te entrega un arreglo que contiene cadenas. Trabajando dentro de ese mismo arreglo, reemplaza cada cadena con un número (la longitud de la cadena en el índice del arreglo anterior) y devuelve el arreglo.
function longitudAnterior(array) {
    let longitud_cadena = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "string") {
            longitud_cadena = array[i].length;
            array[i] = longitud_cadena;
        }   
    }
    return array;
}

//Crea una función que acepte un arreglo. Devuelve un nuevo arreglo con todos los valores excepto el primero, agregando 7 a cada uno. No alteres el arreglo original.
function addSeven(arr) {
    let newArray = [];
    for (let i = 1; i < arr.length; i++) {
        newArray[i-1] = (arr[i]) + 7 ;
    }
    return newArray;
}
function arrInverso(arr) {
    let temporal;
    for (let i = 0; i < (arr.length)/2; i++) {
        temporal = arr[arr.length-i-1];
        arr[arr.length-i-1] = arr[i];
        arr[i] = temporal;
    }
    return arr;
}
//Perspectiva: Negativa
//Dado un arreglo, crea y devuelve uno nuevo que contenga todos los valores del arreglo  proporcionado en negativo (no simplemente multiplicada por -1). Dado [1, -3, 5], devuelve [-1, -3, -5].

function negativo(array){
    let newarray = [];
    for (let i = 0; i < array.length; i++) {
        newarray[i] = array[i]
        if (array[i] > 0) {
            newarray[i] = (array[i]) * -1;
        }
    }
    return newarray;
}

/*Crea una función que acepte un arreglo  e imprime "delicioso" cada vez que uno de los valores sea igual a "comida". Si no hay elementos "comida" en el arreglo, entonces escribe "Tengo hambre" una vez.*/

function Hambriento(array){
    let exist = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "comida") {
            console.log("delicioso")
            exist = true
        }
    }
    if (exist == false) {
        console.log("Tengo hambre")
    }
}

//Dado un arreglo, intercambia el primero y el último, el tercero y el antepenúltimo, etc. La entrada [true, 42, "Ada", 2, "pizza"] se convierte en ["pizza", 42, "Ada", 2, true]. Cambia [1,2,3,4,5,6] por [6,2,4,3,5,1].
function Intercambio(array) {
    let cambio;
    for (let i = 0; i < (array.length)/2 ; i+=2) {
        cambio = array[i]
        array[i] = array[array.length-i-1]
        array[array.length-i-1] = cambio;
    }
    return arreglo;
}

//Dado el arreglo arr y el número num, multiplica cada valor de arr por num y devuelve el arr cambiado.
function multiplyArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }
    return arr;
}
