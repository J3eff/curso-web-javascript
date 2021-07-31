const [a]  = [10]
console.log(a)

const [n1, , n3, , n5,n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

// Destructuring no ponto de vista de objeto usa chaves {} -> pois ele esta desestruturdo de um objeto.

// Destructuring um array ele usa colchetes e tem que entender em que momento do código estamos fazendo algo.