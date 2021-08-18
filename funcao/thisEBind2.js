function Pessoa() {
    this.idade = 0

    const _this = this
    setInterval(function() {
        _this.idade++
        console.log(_this.idade)
    }/*.bind(this)*/, 1000);
}

new Pessoa