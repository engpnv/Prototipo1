
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname));

io.on('connection', socket => {
  socket.on('redirecionar', pagina => {
    io.emit('redirecionar', pagina);
  });
  socket.on('limpar', pagina => {
    io.emit('limpar', pagina);
  });
  socket.on('pagina', data => {
    io.emit('pagina', data);
  });
  socket.on('mensagem', msg => {
    io.emit('mensagem', msg);
  });
  socket.on('permiteEntrada', status => {
    io.emit('permiteEntrada', status);
  });
  socket.on('criarMensagem', msg => {
    io.emit('criarMensagemOperador', msg);
  });
  socket.on('respostaUsuario', msg => {
    io.emit('mensagem', '[Usuário]: ' + msg);
  });
});

http.listen(3000, () => {
  console.log('Servidor rodando em http://192.168.0.178:3000');
});
