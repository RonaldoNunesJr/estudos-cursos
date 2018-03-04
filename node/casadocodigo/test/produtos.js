let express = require('../config/express.js')();
let request = require('supertest')(express);
var DatabaseCleaner = require('database-cleaner');
var databaseCleaner = new DatabaseCleaner('mysql'); //type = 'mongodb|redis|couchdb'

describe('#ProdutosController', function(){
    
    /*beforeEach(function(done){
        let conn = express.infra.connectionFactory();

        conn.query('delete from produtos', function(ex, result){
            if ( !ex ) {
                done();
            }
        });
    });*/
    
    beforeEach(function(done){
        let conn = express.infra.connectionFactory();        
        databaseCleaner.clean(conn, done);
    });
    
    it('#listagem json', function(done){
       request.get('/produtos')
       .set('Accept', 'application/json')
       .expect('Content-Type', /json/)
       .expect(200, done);
    });
    
    it('#cadastro de novo produtos com dados invalidos', function(done){
       request.post('/produtos')
       .send({titulo:"", descricao: "livro de teste invalido"})
       .expect(400, done);
    });
    
    it('#cadastro de novo produtos com dados validos', function(done){
       request.post('/produtos')
       .send({titulo:"titulo", descricao: "novo livro", preco: 20.50})
       .expect(302, done);
    });

});