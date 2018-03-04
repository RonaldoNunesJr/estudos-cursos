module.exports = function (app) {
   
    var listaProdutos = function (req, res, next) {
         
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);
        
        produtosDAO.lista(function(err, result){

            if ( err ) { return next(err); };

            res.format({
                html : function () {
                    res.render('produtos/lista', {lista:result});
                }, 
                json : function () {
                    res.json(result);
                }
            });
        });

        connection.end();

    }

    app.get('/produtos', listaProdutos);
    
    app.get('/produtos/json', function(req, res, next) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results) {
            if ( err ) { return next(err); }
            res.json(results);
        });

        connection.end();
    });
   
    app.get('/produtos/form', function (req, res) {

        res.render('produtos/form', { errosValidacao:{}, produto:{}});

    });
    
    app.post('/produtos', function (req, res, next) {

        let produto = req.body;
        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('preco', 'Preço é obrigatório').isFloat();
        
        let errors = req.validationErrors();
        if ( errors ) {
            res.status(400).format({
                html : () => res.render('produtos/form', {errosValidacao:errors, produto:produto}),
                json : () => res.status(400).json(erros)
            });
            
            return;
        }


        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function (err, result) {
            if ( err ) { return next(err); }
            res.redirect('/produtos');
        });

        connection.end();

    });
    
    // app.delete('/produtos/:id', function (req, res) {

    //     console.log('teste');
    //     console.log(req.body.id);


    // });

}