var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', () => {
  console.log('Connected to server')
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
