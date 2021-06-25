const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes... 
console.log(`1 + 1 = ${1 + 1}`)


// Função Arrow 
const up = texto => texto.toUpperCase() // Função que converte o texto em letras MAISCULAS
console.log(`Ei... ${up('cuidado')}!`)
