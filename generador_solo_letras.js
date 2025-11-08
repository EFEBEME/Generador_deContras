/* 
Aqui vamos a crear una funcion que genere un numero aleatorio
Observe que el numero aleatorio coincida con su correspondiente
letra y me devuelva esa letra.

Que se repita 8 veces

Debemos tener un array de letras+sus numeros ya, a modo de prueba
*/

const letrasConSusNumeros = {
    "a": [62, 102, 87, 36],
    "b": [49, 43, 21, 86],
    "c": [91, 67, 101, 56],
    "d": [69, 68, 10, 17],
    "e": [82, 59, 71, 11],
    "f": [28, 99, 24, 61],
    "g": [22, 9, 38, 2],
    "h": [8, 26, 80, 57],
    "i": [55, 100, 32, 41],
    "j": [42, 12, 98, 4],
    "k": [78, 53, 34, 47],
    "l": [70, 97, 92, 66],
    "m": [35, 81, 52, 29],
    "n": [74, 96, 58, 1],
    "o": [13, 40, 6, 16],
    "p": [63, 60, 51, 44],
    "q": [79, 45, 46, 95],
    "r": [94, 90, 33, 103],
    "s": [83, 89, 85, 84],
    "t": [20, 88, 75, 25],
    "u": [18, 104, 50, 23],
    "v": [73, 30, 3, 39],
    "w": [65, 76, 77, 14],
    "x": [15, 37, 5, 48],
    "y": [64, 72, 7, 27],
    "z": [54, 93, 19, 31]
}

//variable donde luego guardaremos el numero aleatorio generado
let randomNumber;

//funcion de numero aleatorio, que guarda el numero en la variable creada justo ahora
function randomNum(){
    randomNumber = Math.floor(Math.random() * 100) + 1
    return randomNumber
}

//array donde almacenamos las 8 letras que vayan tocando
let letras_escogidas = [];




//funcion que genera el numero; lee el array; coge la letra y la guarda
//bucle de 8
function generador(){
    //ejecuta el siguiente codigo mientras...
    do{
        //llamo a la funcion de crear numero aleatorio
        randomNum();
        //revisas el objeto
        for (letra in letrasConSusNumeros){
            //si el numero incluido en el array de las letras coincide con el numero generado
            if (letrasConSusNumeros[letra].includes(randomNumber)){
                //incluyeme esa letra en el array de letras escogidas
                letras_escogidas.push(letra);
                
            }
        }
    //...mientras que el array tenga menos de 8 valores
    } while (letras_escogidas.length < 8);

    //devuelveme las letras esocgidas
    return letras_escogidas;
    
}

//imprime la funcion 'generador' que estoy llamando ahora
console.log(generador());


