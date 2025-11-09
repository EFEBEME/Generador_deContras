/* 
Programa para crear un objeto con letras que tengan atribuidas 4 numeros,
Numeros generados de manera aleatoria.
4 numeros del 1 al 104.
*/

//crear un array con las letras que quieras utilizar
export let letras = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
];

// Array con símbolos - FALTABA EXPORTAR
export let simbolos = [
    '.', '!', '_', '@', '$', '%', '*', '+'
];

//creas la funcion que asigna los numeros a las letras
export function letrasEquivalencia(){
    //creas un objeto que guarde las letras con sus numeros
    const indice = {};
    let duplicados = new Set();

    //creas una bucle que vaya letra por letra por el array
    for( let letra of letras){
        /*creas un nuevo array para almacenar los 4 numeros que se
        asignaran a la letra por el que esta pasando el bucle*/
        let numeros = [];

        //creas un bucle para que corra 4 veces
        for(let i = 0; i < 4; i++){
            //creas variable y le asignas la funcion de crear numero
            let numero_aleatorio;
            
            //genera numeros aleatorios hasta que sea unico. SIN REPETIRSE
            do {
                numero_aleatorio = Math.floor(Math.random() * 104) + 1;
            } while(duplicados.has(numero_aleatorio));
                
            // mete los numeros unicos generados en el saco de duplicados
            duplicados.add(numero_aleatorio);

            //guardas los 4 numeros en el array numeros
            numeros.push(numero_aleatorio);
        }

        /*modificas el objeto 'indice' para anadirle la letra\simbolo
        y los 4 numeros guardados en el array*/
        indice[letra] = numeros; 
    }
    //devuelves el indice ya creado
    return indice;
}

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