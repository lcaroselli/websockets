const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  socket.broadcast.emit('connected', { text: 'User has connected' })

  socket.on('disconnected', () => {
    io.emit('disconnected', { text: 'User has disconnected' })
  });

  socket.on('message', (message) => {
    io.emit('message', message)
  });

  socket.on('typing', () => {
    io.emit('A user is typing')
  })

  socket.on('notTyping', () => {
    io.emit('Nobody is typing')
  })
});


http.listen(3000, () => {
  console.log('listening on *:3000');
});
