/* xhr.readySate = 

0: requisição ainda não iniciada
    
1: conexão com o servidor estabelecida

2: requisição recebida

3: processando requisição

4: requisição está concluída e a resposta está pronta */

class NegociacaoService {
    constructor () {
        let $ = document.querySelector.bind(document);
        this._http = new HttpService();
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto'
        );
    }
    obterNegociacoesDaSemana () {
            
        return this._http
            .get('negociacoes/semana')
            .then(negociacoes => {
               return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
            })
            .catch(error => {
                console.log(error);
                throw new Error('não foi possível obter as negociações da semana');
            });

        /*return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            
            xhr.open('GET', 'negociacoes/semana');
            
            xhr.onreadystatechange = () => {
    
                if ( xhr.readyState == 4 ) {
    
                    if ( xhr.status == 200 ) {
    
                        console.log('Obtendo as negociações do servidor')
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                        );
    
                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana');
                    }
    
                }
    
            };
    
            xhr.send();
        })*/
    }

    obterNegociacoesDaSemanaAnterior () {
           
        return this._http
            .get('negociacoes/anterior')
            .then(negociacoes => {
                return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
            })
            .catch(error => {
                console.log(error);
                throw new Error('não foi possível obter as negociações da semana anterior');
            });

        
    }

    obterNegociacoesDaSemanaRetrasada () {
        
        return this._http
            .get('negociacoes/retrasada')
            .then(negociacoes => {
                return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
            })
            .catch(error => {
                console.log(error);
                throw new Error('não foi possível obter as negociações da semana retrasada');
            });
    }

    objetoNegociacoes () {

        return Promise.all([
            this.obterNegociacoesDaSemana(),
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada()
        ]).then(periodos => {
            
            return periodos.reduce((dados, periodo) => dados.concat(periodo), [])
            
        }).catch(erro => {
            throw new Error(erro)
        });
    }

}