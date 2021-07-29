var numero = 1

{//ESCOPO DE BLOCO -Mesmo não sendo uma função, qualquer bloco o LET só vai ter escopo dentro deste bloco

    // LET -> Esta visivel apenas dentro do bloco
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)

// Variaveis definidas com palavra definida VAR -> Tem escopo GLOBAL e tem escopo de FUNÇÃO.
// Variaveis definidas com palavra definida LET ->  Tem escopo global, escopo de função e escopo de bloco.

