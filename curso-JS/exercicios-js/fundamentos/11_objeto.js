 const prod1 = {}//instancia de um objeto
prod1.nome = "Celular ultra mega";
prod1.preco = 4998,90;
prod1['Desconto legal'] = 0.40; //evitar atributos com espaço

console.log(prod1);

/**
 * Objeto é um conjunto de pares chave: valor
 * Declaração de um objeto em js:
 */
const prod2 ={
    nome: "Camisa polo",
    preco: 79.99
}
console.log(prod2)

//json <> de objeto
`{
    "nome": "Camisa polo",
    "preco": 79.99
}`
