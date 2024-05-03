let valor // variavel declarada porém não foi inicializada, ou seja declaramos mas não setamos o valor (undefine)
console.log(valor)

valor = null //variavel declarada e setada como vazio, ausência de valor
console.log(valor)
//console.log(valor.toString()) //ERRO!

const produto = {}
console.log(produto.preco)//o objeot produto acessou o atributo, porém ele não está declarado
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null//sem preço
console.log(!!produto.preco)
console.log(produto)

