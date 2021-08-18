let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // This no arrow function sempre vai apontar para objeto no qual foi escrita mesmo que tente passar um bind. - False
comparaComThisArrow(module.exports)

// THIS de uma função arrow e o THIS associado ao contexto no qual a função foi inscrita