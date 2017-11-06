//Calling the library (socket variable to use) - this will try to make a connection to the server
var socket = io();

//verifying event on client side and send message back to server
socket.on('connection', () => {
  console.log('Connected client side')
});
