// Função arrow sempre é uma função anonima
let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno implicito
console.log(dobro(Math.PI))

let  ola = function() {
    return 'Olá'
}

ola = () => 'Olá' // Função que não tem paramentro tem que passar parenteses vazio 
ola = _ => 'Olá' // possui um param
console.log(ola())