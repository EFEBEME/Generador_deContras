/* =========DESCRIPCIÓN:

Programa para elegir 8 letras de manera aleatoria del Objeto indice del
modulo anterior (archivo - generador_de_arrays.js)
=========================================================================*/

/*==========PASOS:*/

//Datos demo:
const letrasConSusNumerosEjemplo = {
    "a": [62, 102, 87, 36],
    "b": [49, 43, 21, 86],
    "c": [91, 67, 101, 56]
};

const simbolosConSusNumerosEjemplo = {
    ".": [5, 18, 25, 3],
    "!": [30, 6, 20, 11],
    "_": [13, 8, 26, 2]
};


//Crear la funcion que seleccionará 8 numeros a partir de un parametro
//Parametro = Objeto {letras: numero, numero, numero, numero}
export function generador(letrasConSusNumerosEjemplo) {

    
    // Crear un Array donde almacenamos las 8 letras
    let letras_escogidas = [];

    
    //Comenzar un bucle que se repetira hasta alcanzar 8 letras
    do {

        
        // Generar número aleatorio y guardarlo dentro de la variable randomNumber
        let randomNumber = Math.floor(Math.random() * 104) + 1;

        
        //Iniciar un bucle que recorra el parametro de la funcion
        for (let letra in letrasConSusNumeros) {

            
            //Establecer una condicion para encontrart coincidencias entre el 
            //numero aleatorio y los valores del parametro
            if (letrasConSusNumeros[letra].includes(randomNumber)) {

                
                //Encontrar la clave de dicho valor coincidente y guardarla en el
                //Array letras_escogidas
                letras_escogidas.push(letra);

                
                //Salir del for una vez encontrada la letra
                break; 
            }
        }

        
    //Repetir hasta el el Array alcance las 8 letras
    } while (letras_escogidas.length < 8);

    
    //Retornar el resultado final
    return letras_escogidas;
}



//Exactamente mismo procedimiento para los símbolos
export function generador2(simbolosConSusNumeros) {
    let simbolos_escogidos = [];

    do {
        let randomNumber2 = Math.floor(Math.random() * 32) + 1;
        
        for (let simbolo in simbolosConSusNumeros) {
            if (simbolosConSusNumeros[simbolo].includes(randomNumber2)) {
                simbolos_escogidos.push(simbolo);
                break;
            }
        }
    } while (simbolos_escogidos.length < 8);

    return simbolos_escogidos;
}



//console.log("🔤 Módulo generador_solo_letras cargado");
// console.log("Prueba letras:", generador(letrasConSusNumerosEjemplo));
// console.log("Prueba símbolos:", generador2(simbolosConSusNumerosEjemplo));
