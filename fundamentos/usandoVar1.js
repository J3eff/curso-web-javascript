//Variaveis definidas como VAR só tem dois escopos possiveis
// Ou ela é GLOBAL - Visivel para todo mundo
// Ou você cria uma var no escopo de uma função
{ 
    { 
        { 
            { 
                var sera = 'Sera???' // Criada dentro de um bloco que não é uma função, fora deste bloco essa variavel ficou VISIVEL.
                console.log(sera)
            } 
        } 
    } 
}

console.log(sera) // Fora 

function teste(){
    var local = 123 // Criando uma variavel dentro do escopo de um function, ela só e visivel dentro da function.
    console.log(local)
}

teste()
console.log(local) // Quando definimos variavel dentro de uma função ela só vai existir dentro daquele bloco de codigo 

// WINDOW -> é um objeto global, que tem tudo que esta dentro da sua janela/aba que for declaro fora de função estara visivel globalmente  na sua aplicação, tudo estara dentro de window.