import {
    letras,
    simbolos,
    letrasEquivalencia, 
    simbolosEquivalencia
    
} from './Generador_de_arrays.js';

import { generador, generador2 } from './Generador_de_objetos.js';



const nuevasLetras = letrasEquivalencia();
const nuevosSimbolos = simbolosEquivalencia();



const letrasGeneradas = generador(nuevasLetras);


const simbolosGenerados = generador2(nuevosSimbolos);


for (let i = 1; i <= 3; i++) {
    console.log(`\n🔐 Contraseña ${i}:`);
    const letras = generador(nuevasLetras);
    const simbolos = generador2(nuevosSimbolos);
    console.log(`   Combinada: ${letras.join('')}${simbolos.join('')}`);
}


