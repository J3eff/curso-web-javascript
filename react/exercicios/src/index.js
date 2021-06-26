import React from 'react'
import  ReactDOM  from 'react-dom'

import Primeiro from './componentes/Primeiro'

//const elemento = <h1>React 2</h1> // Mesmo que paressa um HTML, isto é JAVASCRIPT, mais só se tornara um JavaScript quando houver o Transpile

// Chama o primeiro elemento dentro da nossa pagina
ReactDOM.render(<Primeiro />, document.getElementById('root')) // JSX 

 // O foto de colocar um elemento dentro de uma de um metodo, é o JSX - é uma extensão que faz que você programe de uma forma mais parecida com se fosse um HTML, mas na verdade, por baixo dos panos ele vai fazer varias chamadas JavaScript para criar os elementos

// Transpile - Conversão do HTML para um código JavaScript puro

// React tem funções internas para minupular o DOM e Influenciar elementos 

// Podemos trabalhar com elementos html que serão convertidos em codigo nativos, como se fosse JavaScript

// $('<h1>').html('React'2) - JSON

// Deixamos de separar o código em parte e passamos a criar o codigo em componentes e a junção de todos esses componentes de forma integrada vão forma sua aplicação

// ReactDOM - De fato e a parte que conversa expecificamente com DOM (Pagina)

//  React - Ele vai ter todas as chamas que vão ser geradas apartir desse elemento .JSX, chamado as funções internas do React para fazer isso.

// O react tem que se importado, pois no momento que os elementos parecidos com HTML forem convertido para funções internas as dependencias do REACT vai ser usadas. 

// Biblioteca REACT - Sendo usado de forma pura. 



