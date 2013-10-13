/*
	Criando o servidor via node.js
	Usando biblioteca socket.io
	Transmitindo via websocket os parametros do evento DRAW
	Porta: 8081
*/
(function() {
  var io;
  io = require('socket.io').listen(8081);
  
  io.sockets.on('connection', function(socket) {
    socket.on('drawClick', function(data) {
      socket.broadcast.emit('draw', {
        x: data.x,
        y: data.y,
        type: data.type
      });
    });
  });
}).call(this);
