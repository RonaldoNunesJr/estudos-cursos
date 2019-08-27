class NegociacaoController {
    
    constructor () {
       
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia'
        )        

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto'
        );
        
    }
    
    adicionar (event) {

        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._limpaFormulario();
    
    }

    apaga() {

        this._listaNegociacoes.esvazia();
        this._mensagem.texto = "Negociações apagadas com sucesso";
    }
    
    importaNegociacoes () {
        
        let service = new NegociacaoService();
        service
        .objetoNegociacoes()
        .then(negociacoes => {
            negociacoes.forEach(negociacoes => this._listaNegociacoes.adiciona(negociacoes));
            this._mensagem.texto = 'Negociações importadas com sucesso';
        }).catch(error => this._mensagem.texto = error);
        /*
        service.obterNegociacoesDaSemana()
            .then(negociacao => {
                negociacao.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
                this._mensagem.texto = "Negociações importadas com sucesso semana";
            })
            .catch(erro => this._mensagem.texto = erro);
        
        service.obterNegociacoesDaSemanaAnterior()
            .then(negociacao => {
                negociacao.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = "Negociações importadas com sucesso semana";
            })
            .catch(erro => this._mensagem.texto = erro);
        
        service.obterNegociacoesDaSemanaRetrasada()
            .then(negociacao => {
                negociacao.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = "Negociações importadas com sucesso retrasada";
            })
            .catch(erro => this._mensagem.texto = erro) 
        */

        /*service.obterNegociacoesDaSemana((erro, negociacao) => {
            if (erro) {
                this._mensagem.texto = erro;
                return;
            }

            negociacao.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = "Negociações importadas com sucesso semana";

        });

        service.obterNegociacoesDaSemanaAnterior((erro, negociacao) => {
            if (erro) {
                this._mensagem.texto = erro;
                return;
            }

            negociacao.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = "Negociações importadas com sucesso anterior";

        });

        service.obterNegociacoesDaSemanaRetrasada((erro, negociacao) => {
            if (erro) {
                this._mensagem.texto = erro;
                return;
            }

            negociacao.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = "Negociações importadas com sucesso retrasada";

        });*/

    }

    _criaNegociacao () {

        return new Negociacao(

            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _limpaFormulario () {
        
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();

    }

}