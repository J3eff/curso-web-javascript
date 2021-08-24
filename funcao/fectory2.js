function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('arroz', 13.50))
console.log(criarProduto('Notebook', 2199.49))