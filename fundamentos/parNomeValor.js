//par nome/valor
const saudacao = 'Opa'; // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa'; // contexto léxico 2
    return saudacao;
}

// o que é contexto léxico? 
// R: é o contexto/local no qual a sua variavel foi definida fisicamente no codigo
// Léxico tem haver com palavra

// Objetos são grupos aninhados de pares nome/valor
const cliete = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())

console.log(cliete)