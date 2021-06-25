const peso1 = 1.0
const peso2 = Number('2.0') // Converte string em Number

console.log(peso1,peso2)

// Valores sem numero quebrados são considerados valores inteiro no JS
// Para que o valor seja tratado como ponto flutuante deve ser 1.1, 2.5 e etc...
console.log(Number.isInteger(peso1)) // Este método validar se o valor é um valor inteiro
console.log(Number.isInteger(peso2)) 

const avalicao1 = 9.871
const avalicao2 = 6.871

const total = avalicao1 * peso1 + avalicao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // O método toFixed(params) server para limiutar as casas decimais
console.log(media.toString()) // O método toString() converte o valor em uma string
console.log(media.toString(2)) // É possivel converter um valor de uma string em Binario
console.log(typeof media)

console.log(typeof Number)