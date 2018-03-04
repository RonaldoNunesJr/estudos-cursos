module.exports = function (app) {
    app.get('/promocoes/form', function(req, res){
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results) {
            res.render('promocoes/form', {lista: results});
        });

        connection.end();
    });

    app.post('/promocoes', function(req, res){
        let promocao = req.body;
        app.get('io').emit('novaPromocao', promocao);
        res.redirect('promocoes/form');
    });
}