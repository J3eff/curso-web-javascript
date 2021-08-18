const pessoa = {
    saudacao: 'Bom dia',
    falar() {
       console.log(this.saudacao) 
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// bind -> é o metodo responsavel por amarrar um determinado objeto, para ele ser o dono da execução daquele metodo, sempre que ele for chamado. 
const falarDePessoa = pessoa.falar.bind(pessoa) 
falarDePessoa()

const falar2 = pessoa.falar
falar2()
