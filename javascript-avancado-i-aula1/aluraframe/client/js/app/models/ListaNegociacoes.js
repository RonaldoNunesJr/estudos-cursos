class ListaNegociacoes {
    
    constructor () {

        this._negociacoes = [];
    }

    adiciona (negociacoes) {
        this._negociacoes.push(negociacoes);
    }

    get negociacoes () {
        return [].concat(this._negociacoes);
    }

}