const mysql = require('mysql');

function createDBConnection () {
    
    if ( !process.env.NODE_ENV || process.env.node === 'dev' ) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'casadocodigo_nodejs'
        });
    }

    if ( process.env.NODE_ENV == 'test' ) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'casadocodigo_nodejs_test'
        });
    }

}

module.exports = function () {

    return createDBConnection;

}
