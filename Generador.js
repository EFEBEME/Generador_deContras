/* 
Programa para crear un objeto con letras que tengan atribuidas 4 numeros,
Numeros generados de manera aleatoria.
4 numeros del 1 al 104.


El problema que enfrentamos es que los numeros generados aleatoriamente acaban por repetirse.
Y mas de 1 letra termina por tener el mismo numero que otra. Lo que impide que funcione correctamente.
en el momento de generar el numero debemos revisar si ya ha salido.
Si no ha salido antes se a;ade al - let numero -
si SI ha salido antesse repite la generacion de numero
repitiendo el proceso hasta hayar un numero no repetido
DO WHILE
el inconveniente que encuentro es que podrian repetirse los mismos numeros una y otra vez-
realentizando el proceso.


*/

//crear un array con las letras que quieras utilizar
let letras_Y_simbolos = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
];

//creas la funcion que asigna los numeros a las letras
function crearEquivalencia(){

    //creas un objeto que guarde las letras con sus numeros
    const indice = {};
    let duplicados = new Set();

    //creas una bucle que vaya letra por letra por el array
    for( let letra of letras_Y_simbolos){

        /*creas un nuevo array para almacenar los 4 numeros que se
        asignaran a la letra por el que esta pasando el bucle*/
        let numeros = [];

        //creas un bucle para que corra 4 veces
        for(let i = 0; i < 4; i++){

            //creas variable y le asignas la funcion de crear numero
            let numero_aleatorio;
            
            do {
                numero_aleatorio = Math.floor(Math.random() * 104) + 1;
            } while(duplicados.has(numero_aleatorio));
                
            duplicados.add(numero_aleatorio);

            //guardas los 3 numero en el array numeros
            numeros.push(numero_aleatorio);
        }

        /*modificas el objeto 'indice' para anadirle la letra\simbolo
        y los 3 numeros guardados en el array*/
        indice[letra] = numeros; 
    }
    //devuelves el indice ya creado
    return indice
}
//llamas a la funcion para que se genere el objeto 'indice'
console.log(JSON.stringify(crearEquivalencia(), null, 4));

/*
=======================================================================
=======================================================================
*/