require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');
const socket = require('socket.io');

const routes = require('./routes');

const { PORT, HOST } = process.env;

const app = require('./app');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

const server = http.createServer(app);
const io = socket(server);

io.on('connection', socket => {
  socket.on('chat.message', data => io.emit('chat.message', data));

  socket.on('disconnect', () => console.log('[Socket] disconnected'));
});

server.listen(PORT, HOST, () => console.log(`Server is running at ${HOST}:${PORT}`));
