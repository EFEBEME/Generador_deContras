/* =========DESCRIPCIÓN:

Programa para crear una contraseña aleatoria que incluya letras y símbolos, de
16 caracteres.

Añadidas las funciones de SALT y Hash
===============================================================================*/

/*=========PASOS:

//Importar Arrays de LETRAS y SÍMBOLOS
//Importar las funciones letrasEquivalencias y símbolosEquivalencias

import {
    letras,
    simbolos,
    letrasEquivalencia, 
    simbolosEquivalencia
    
} from './Generador_de_arrays.js';


//Importar las funciones que escogen 8 letras y 8 símbolos aleatoriamenre de los Arrays
import { generador, generador2 } from './Generador_de_objetos.js';


//Crear las variables donde vamos a guardar los Objetos letra:numero y símbolo:numero
//con sus correspondientes numeros
const nuevasLetras = letrasEquivalencia();
const nuevosSimbolos = simbolosEquivalencia();


//Crear las variables donde vamos a guardar las 8 letras y símbolos
const letrasGeneradas = generador(nuevasLetras);
const simbolosGenerados = generador2(nuevosSimbolos);


//Juntar las letras y simbolos en un solo String
let final_password = letrasGeneradas.join('') + simbolosGenerados.join('');

//Imprimir el resultado en la consola
console.log(`Generated password: ${final_password}`)



//Llegados a este punto veremos algo así en la consola: jpfhgnri@.!?@!_$




/*==≈====≈=======
FUNCION DE BARAJA
===============*/

//creamos un array que contiene las letras y numeros de la contraseña
let final_password_array = final_password.split('');

//iniciamos un bucle para que recorra el array
for(let i = final_password_array.length - 1; i > 0; i--){

        // generamos un numero aleatorio que quepa dentro de la longitud del array
        let j = Math.floor(Math.random() * (i + 1));

        //modificamos el array, intercambiando la posicion del indice i del bucle padre, con la posicion del indice j generada aleatoriamente
        [final_password_array[i], final_password_array[j]] = [final_password_array[j], final_password_array[i]];
} 
//generamos una variable que guarde el array como un String
let shuffled_password = final_password_array.join('');

//imprimimos la contraseña barajada
console.log(`The shuffled password is: ${shuffled_password}`);


/*
===============================================================================================================
                                    HASH
===============================================================================================================

*/


//creamos una funcion y la llamamos Hash, que procesara el parametro str que introduzcamos
function Hash(str) {

    //creamos la variable Hash que luego utilizaremos
    let hash = 0;

        //iniciamos un bucle tan largo como el parametro que introduzcamos en la funcion == longitud de password
        for (let i = 0; i < str.length; i++) {

            // creamos la variable char. en la posicion i de la longitud del str se introduce su valor Unicode A = 65, B = 66, etc.
            const char = str.charCodeAt(i);

            // cambiamos el valor de la variable hash.

            // [hash << 5] - equivale a multiplicar el hash por 2 al poder de 5 = 32

            // [(hash << 5) - hash] - Esto es [hash * 32 - hash], que matemáticamente es [hash * 31]
            // Multiplicar por 31 es un truco clásico en hash functions

            //Finalmente, sumamos char (el código numérico del carácter actual).
            hash = ((hash << 5) - hash) + char;

            //Es una forma rápida de forzar que JavaScript trate hash como un entero de 32 bits con signo.
            // En JavaScript, todos los números son técnicamente de 64 bits flotante (Number).
            // Al usar & con un solo número, JS lo convierte automáticamente a 32 bits enteros antes de hacer la operación.
            hash = hash & hash; // convert to 32-bit integer
        }
    

    // >>> es el operador de desplazamiento a la derecha sin signo en JavaScript.
    // Toma un número de 32 bits y lo interpreta como un entero sin signo (unsigned).

    // EJEMPLO: let hash = -12345;
    // console.log(hash);        // -1234
    // console.log(hash >>> 0);  // 4294954951

    //.toString(16) → lo convierte en cadena hexadecimal

    return (hash >>> 0).toString(16); // >>>0 makes it unsigned

}

const password = 'rock'+ shuffled_password;
const hashed = Hash(password);

console.log("Password:", password);
console.log("Simple hash:", hashed);


/*
=====================================================================
SHA256
=====================================================================
*/

async function hashSHA256(str) {
    // Convert string to bytes
    const encoder = new TextEncoder();
    const data = encoder.encode(str);

    // Compute SHA-256 hash
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    // Convert bytes to hex string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

// Example usage:
hashSHA256(shuffled_password).then(hash => console.log(`SHA256 Hash: ${hash}`));
