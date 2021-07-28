let valor // não inicializada
console.log(valor) // Undefined

valor = null // Não tem nem um valor e não esta apontando para nem um lugar na memoria. - AUSENCIA DE VALOR 
console.log(valor) 

// console.log(valor.toString()) // Erro

const produto = {}
// Vai apresentar undefined pois o PREÇO não esta definido dentro do PRODUTO
// Só podemos acessar o valores dentro do objeto desde que o que venha antes do .(ponto) estaja definido
console.log(produto.preco) 

produto.preco = 3.50
console.log(produto)


produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // caso queria tirar algo de dentro o objeto.
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
