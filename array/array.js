// Array no JavaScript e um objeto indexado
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //undefined 

aprovados[3] = 'Paulo'
aprovados.push('Abia') // Adiciona novo elemento na ultima posição
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Orderna a lista
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') //  Remove e adiciona itens 
// splice(INDICE, E quantos vão ser apagados apartir do INDICE.)
console.log(aprovados)

// Array é uma estrutura dinamica.
// //    é uma estrutura indexada.
// //    é um Objeto.
// //    acessar um indice que não existe === undefined

