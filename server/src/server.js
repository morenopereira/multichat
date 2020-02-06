const koa = require('koa');
const http = require('http');
const socket = require('socket.io');

const app = new koa();
const server = http.createServer(app.callback());
const io = socket(server);

const PORT = 8080;
const HOST = 'localhost';

io.on('connection', socket => {
  socket.on('chat.message', data => io.emit('chat.message', data));

  socket.on('disconnect', () => console.log('[Socket] disconnected'));
});

server.listen(PORT, HOST, () => console.log(`Server is running at ${HOST}:${PORT}`));
