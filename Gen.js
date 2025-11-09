/* 
Titulo: Añadida funcion de baraja
*/

//importamos los arrays de letras y simbolos
//+ importamos las funciones que asignas numeros a letras y simbolos
//se importa desde el archivo que define las funciones
import {
    letras,
    simbolos,
    letrasEquivalencia, 
    simbolosEquivalencia
    
} from './Generador_de_arrays.js';

//importamos las funciones que saca un array de 8 letras y 8 simbolos aleatoriamente
import { generador, generador2 } from './Generador_de_objetos.js';


//creamos las variables donde vamos a guardar los arrays de letras y simbolos
//con sus correspondientes numeros
const nuevasLetras = letrasEquivalencia();
const nuevosSimbolos = simbolosEquivalencia();


//creamos las variables donde vamos a guardar las 8 letras y simbolos elegidos aleatoriamente
const letrasGeneradas = generador(nuevasLetras);
const simbolosGenerados = generador2(nuevosSimbolos);


//juntamos las letras y simbolos en un solo String
let final_password = letrasGeneradas.join('') + simbolosGenerados.join('');

//imprimimos el resultado en la consola
console.log(`Generated password: ${final_password}`)




/*
FUNCION DE BARAJA
*/

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
    