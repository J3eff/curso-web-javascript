function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2  = new Aula('Até breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {} // Criei objeto novo
    obj.__proto__ = f.prototype // Associei a prototype do obj com a função que foi passada
    f.apply(obj, params) 
    return obj
}
 
const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)