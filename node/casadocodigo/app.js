const app = require('./config/express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('io', io);

http.listen(3000, function(){
    console.log('servidor em execusão...');
});