 // pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'

console.log(pessoa)

// pessoa -> 456 -> {...}  
//pessoa = { nome: 'Ana' } // Não pode atribuir um novo objeto

Object.freeze(pessoa) // metodo que congela o objeto pessoa, não consegue mais mexer no objeto

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)

