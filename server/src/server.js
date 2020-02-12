require('dotenv').config();
const http = require('http');
const socket = require('socket.io');
const app = require('./app');

const { PORT, HOST } = process.env;

const server = http.createServer(app);
const io = socket(server);

io.on('connection', socket => {
  socket.on('chat.message', data => io.emit('chat.message', data));

  socket.on('disconnect', () => console.log('[Socket] disconnected'));
});

server.listen(PORT, () => console.log(`Server is running at ${PORT}`));
