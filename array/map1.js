const nums = [1,2,3,4,5]


// for com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado, nums);

const soma10 = e => e + 10;
const triple = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triple).map(paraDinheiro);
console.log(resultado);