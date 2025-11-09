/* 
Aqui vamos a crear una funcion que genere un numero aleatorio
Observe que el numero aleatorio coincida con su correspondiente
letra y me devuelva esa letra.

Que se repita 8 veces

Debemos tener un array de letras+sus numeros ya creado.
Usaremos este a modo de prueba.
*/

// Función principal para letras
export function generador(letrasConSusNumeros) {
    // Array donde almacenamos las 8 letras - LOCAL para evitar acumulación
    let letras_escogidas = [];

    //ejecuta el siguiente codigo mientras...
    do {
        // Generar número aleatorio
        let randomNumber = Math.floor(Math.random() * 104) + 1;
        
        //revisas el objeto
        for (let letra in letrasConSusNumeros) {
            //si el numero incluido en el array de las letras coincide con el numero generado
            if (letrasConSusNumeros[letra].includes(randomNumber)) {
                //incluyeme esa letra en el array de letras escogidas
                letras_escogidas.push(letra);
                break; // Salir del for una vez encontrada la letra
            }
        }
    //...mientras que el array tenga menos de 8 valores
    } while (letras_escogidas.length < 8);

    //devuelveme las letras escogidas
    return letras_escogidas;
}

// Función para símbolos
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

// Ejemplo de uso con datos de prueba (opcional)
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

//console.log("🔤 Módulo generador_solo_letras cargado");
// console.log("Prueba letras:", generador(letrasConSusNumerosEjemplo));
// console.log("Prueba símbolos:", generador2(simbolosConSusNumerosEjemplo));