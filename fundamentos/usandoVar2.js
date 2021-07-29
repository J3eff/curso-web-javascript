// Só podemos ter variaveis iguais dentro do programa se estiverem em escopos diferente.
// Fuja do escopo GLOBAL
var numero = 1

{ // Não existe escopo de bloco
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero) // Valor sera 2 
// Só existe escopo de VAR dentro de FUNÇÃO