const escola = "Cod3r"

// O indece inicia apartir do 0, entaõ o Indice(4) vai ser o "R"

console.log(escola.charAt(4)) // Ele traz a letra que esta no indice informado
console.log(escola.charAt(5)) // Retorna um valor vazio, pois não não existe um char

// Serve para busca o valor ASC ou UNICODE do valor
console.log(escola.charCodeAt(3))

// Ele informa a posição de Indice, onde você passa o valor do indice
console.log(escola.indexOf('d'))

// Signifca que ele vai imprimir apartir do indice informado para frente
console.log(escola.substring(1))

// Ele vai ate ultimo indice informado e se imprime o que esta entre ele
console.log(escola.substring(0,3))

// Concatenação
console.log('Escola '.concat(escola).concat("!"))
console.log(`Escola ${escola} ! - Melhor`)

// Faz um replace - substitui o valor de um char
console.log(escola.replace(3, 'e'))

// Expresão regular - Subistitui todos os DIGITOS(Numeros) dentro TEXTO pela letra passada entre aspas simples ''
console.log(escola.replace(/\d/, 'e'))

// Expressão regular - Subistitui todos letras e digitos pelo valor passado entre aspas simples ''
console.log(escola.replace(/\w/g, 'e'))

// Converter uma string separada por virgula e converte isso em um Array
console.log('Ana,Maria,Pedro,Jefferson'.split(','))

console.log('3' + 2) // String tem preferencia então ele vai concatenar e não somar