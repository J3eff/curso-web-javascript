const funcs = []


for(let i = 0; i < 10; i++){  // LET -> Escopo de bloco 
    funcs.push(function() { // A função no JavaScript é um Closures
      console.log(i)  // 
    })
}

funcs[2]()
funcs[8]()

// Closures -> Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.