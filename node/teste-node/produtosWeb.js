const http = require('http');

http.createServer(function(req, res){
    res.end('<html><body><h1>Lista de produtos</h1></body></html>')
}).listen(3000, 'localhost');

console.log("rodando o servidor");