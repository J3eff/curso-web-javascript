function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido ${area}m2.`)
    } else {
        return area
    }
}


console.log(area(2,2))

console.log(area(4)) // Retorna NaN
console.log(area()) // Retorna NaN

console.log(area(2, 3, 17, 22, 44)) // Ele pega os dois primeiros e ignora o resto! 

console.log(area(5, 5))