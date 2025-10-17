const value1 = true;
const value2 = false;


/*Thruty/Falsy -> variáveis vazias ou om valor zero, se submeter a um teste lógico, ficam boolean*/

if (value1) {
    console.log('verdadeiro');
} else {
    console.log('Falso');
}
//saída: verdadeiro

if (!value1) {
    console.log('verdadeiro');
} else {
    console.log('Falso');
}
//saída: falso
// o ! é de negação

const value3 = '';

if (!value3) {
    console.log('verdadeiro');
} else {
    console.log('Falso');
}

//saída: falso
// não é booleana, mas o teste lógico é booleano (os 0 e 1/ ligado e desligado)

//Operador ternário
(logica) ? (entao) : (senao);

const resultado = value3 ? 'Verdadeiro' : 'Falso';
console.log(resultado);
//saída: falso