/* =========DESCRIPCIÓN:

Programa para crear un Objeto con LETRAS que tengan atribuidas 4 numeros (ej.: a = 2, 55, 35, 78)
Los numeros son generados de manera totalmente aleatoria.
===============================================================================*/

/*==========PASOS:*/

//Crear un Array con las LETRAS que quieras utilizar
export let letras = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
];


// Crear un Array con SÍMBOLOS - FALTABA EXPORTAR
export let simbolos = [
    '.', '!', '_', '@', '$', '%', '*', '+'
];


//Crear la funcion que asigna los numeros a las LETRAS
export function letrasEquivalencia(){

    
    //Crear un Objeto vacío donde se guardaran las LETRAS con sus numeros
    const índice = {};

    
    //Crear una variable donde se guardarán los numero que ya han salido, para
    //repetirlos
    let duplicados = new Set();
    

    //Crear una bucle-FOR que vaya LETRA por LETRA por el Array
    for( let letra of letras){

        
        /*Crear un nuevo Array donde se almacenarán los 4 numeros que más
        adelante se asignarán a la LETRA por el que está pasando el bucle*/
        let numeros = [];
        

        //Crear un bucle para que corra 4 veces
        for(let i = 0; i < 4; i++){

            
            //Crear variable donde se guardará el numero generado aleatoriamente
            let numero_aleatorio;

            
            //Comenzar un bucle que genera un numero aleatorio del 1 -104
            do {
                numero_aleatorio = Math.floor(Math.random() * 104) + 1;

                
                //Repetir la funcion de nuevo si el numero ya se ha generado anteriormente
                //Repetir hasta que cada uno de los numeros sea único
            } while(duplicados.has(numero_aleatorio));
            
                
            //Guardar los numeros que se van generando en el saco de duplicados
            duplicados.add(numero_aleatorio);

            //Guardar los 4 numeros del bucle "for(let i = 0; i < 4; i++)" en el Array numeros
            numeros.push(numero_aleatorio);
        }

        /*Añadir la letra y los 4 numeros guardados en el array dentro del Objeto indice*/
        indice[letra] = numeros; 
    }
    //Devolver el resultado final
    return indice;
}

//Exactamente mismo procedimiento para los símbolos
export function simbolosEquivalencia(){
    const indice = {};
    let duplicados = new Set();

    for( let simbolo of simbolos){
        let numeros = [];

        for(let i = 0; i < 4; i++){
            let numero_aleatorio;
            
            do {
                numero_aleatorio = Math.floor(Math.random() * 32) + 1;
            } while(duplicados.has(numero_aleatorio));
                
            duplicados.add(numero_aleatorio);
            numeros.push(numero_aleatorio);
        }

        indice[simbolo] = numeros; 
    }
    
    return indice;
}

export default letras;

// Estos console.log se ejecutarán cuando importes el módulo
/*
console.log("🔤 Módulo Generador_de_arrays cargado");
console.log("Letras equivalencias:", JSON.stringify(letrasEquivalencia(), null, 2));
console.log("Símbolos equivalencias:", JSON.stringify(simbolosEquivalencia(), null, 2));
*/
