let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 

console.log(!!isAtivo) // Negação logica 
// ! = Negação logica: Se você tem um valor verdadeiro e ele se torna falso.. vice e versa
// !! =  Volta o valor original

console.log('os verdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![]) // Arrey 
console.log(!!{}) // Objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log()
console.log('os falsos.......')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 ||' ')) //Contexto de operações logicas

let nome = 'Lucas'

console.log(nome || 'Desconhecido') 