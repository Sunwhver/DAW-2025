const inicio = () => {
    console.log('inicio');
}

const fim = () => {
    console.log('fim');
}

const processa = (ini, final) => {
    ini();
    final ();
}

processa(inicio, fim);

processa (() =>{

    console.log('inicio 2');
}, () => {
    console.log('fim 2');}
);