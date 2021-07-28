// Criando array de forma literal 
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // Vai dizer que o valor é undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // E possivel passar objetos dentro de um array
console.log(valores)

console.log(valores.pop()) // Retira ultimo elemento do array
delete valores[0] // Exclui o valor do array pelo index passado.
console.log(valores)

console.log(typeof valores) // Array no JavaScript e de tipo Object