const arrayValor = [1, 2, 3, 4, 5, 6];
console.log(arrayValor);

const arrayObjects = [
    {nome: 'diana', idade: 18, presidente: false},
    {nome: 'Lula da silva', idade: 80, presidente: true}
];
console.log(arrayObjects);

arrayObjects.push(
    {nome: 'Dilma Russeff', idade: 63, presidente: false}
)

console.log('Depois: ', arrayObjects)