/* 
Programa para crear un objeto con letras 
y simbolos que tengan atribuidos 3 numeros,
generados de manera aleatorio. 
3 numeros del 1 al 100

*/

//crear un array con las letras y los simbolos que quieras utilizar
let letras_Y_simbolos = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', '.', '!', '_', '@', '$', '%', '*', '+'
];

//creas la funcion que asigna los numeros a las letras
function crearEquivalencia(){

    //creas un objeto que guarde las letras y signos con sus numeros
    let indice = {};

    //creas una bucle que vaya letra por letra por el array
    for(let i = 0; i < letras_Y_simbolos.length; i++){

        /*creas un nuevo array para almacenar los 3 numeros que
        asignaras a la letra/simbolo por el que esta pasando el bucle*/
        let numeros = [];

        //creas un bucle para que corra 3 veces
        for(let e = 0; e < 3; e++){
            //creas variable y le asignas la funcion de crear numero
            let numero_aleatorio = Math.floor(Math.random() * 100) + 1;

            //guardas los 3 numero en el array numeros
            numeros.push(numero_aleatorio);
        }

        /*modificas el objeto 'indice' para anadirle la letra\simbolo
        y los 3 numeros guardados en el array*/
        indice[letras_Y_simbolos[i]] = numeros; 
    }
    //devuelves el indice ya creado
    return indice
}
//llamas a la funcion para que se genere el objeto 'indice'
console.log(crearEquivalencia());


/*
=======================================================================
=======================================================================
*/
/*
Hemo generado un indice con la funcion anterior, y desde la
consola del navegador la hemos copida y pegado aqui.
*/


let diccionario = {
    "!": [90, 16, 15],
    '$': [71, 51, 20],
    '%': [18, 92, 46],
    '*':[1, 11, 31],
    '+':[8, 91, 47],
    '.': [84, 27, 42],
    '@': [30, 51, 22],
    'a': [1, 57, 90],
    'b': [78, 41, 90],
    'c': [9, 34, 77],
    'd': [25, 87, 28],
    'e': [3, 85, 53],
    'f': [52, 73, 40],
    'g': [86, 29, 97],
    'h': [31, 68, 61],
    'i': [47, 32, 51],
    'j': [64, 20, 93],
    'k': [67, 74, 50],
    'l': [26, 35, 55],
    'm': [3, 23, 43],
    'n': [71, 94, 70],
    'o': [63, 42, 10],
    'p': [41, 92, 5],
    'q': [44, 87, 66],
    'r': [93, 74, 31],
    's': [35, 75, 96],
    't': [66, 39, 15],
    'u': [25, 14, 94],
    'v': [79, 63, 84],
    'w': [8, 35, 35],
    'x': [1, 98, 89],
    'y': [23, 89, 10],
    'z': [9, 92, 47],
    '_': [27, 83, 58],
}