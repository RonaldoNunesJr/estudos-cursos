class ListaNegociacoes {
    
    constructor (armadilha) {

        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adiciona (negociacoes) {
        this._negociacoes.push(negociacoes);
        this._armadilha(this);
    }

    get negociacoes () {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        this.armadilha(this);
    }

}