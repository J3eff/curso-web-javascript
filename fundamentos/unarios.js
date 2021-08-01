let num1 = 1
let num2 = 2

num1++ //pósfixada | Acrecenta uma unidade ao valor da variavel
console.log(num1)
--num1 //pre fixada -> tem precedencia maior do que a pósfixada | Subtrai uma uniadade ao valor da variavel  
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)

