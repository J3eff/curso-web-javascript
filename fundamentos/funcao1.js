/* 
- Função define um bloco associado 
- Treço de codigo que você deu um NOME e você pode reusar ele, dentro da função podemos receber dados e tratar eles como um paço a paço.
- Existem funções ANONIMAS
*/ 

// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN
imprimirSoma(2,10, 4,5,6,7,8) // Ignora o resto dos valores após os valores necessario
imprimirSoma() // NaN


// Função com retorno
function soma(a, b = 1) { // é possivel passar valor padrão para uma variavel de uma função
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // NAN

