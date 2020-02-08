const routes = require('express').Router();
const userController = require('./controllers/user');
const roomController = require('./controllers/room');
const messageController = require('./controllers/message');

// Users
routes.post('/users', userController.create);
routes.get('/users', userController.retrieveAll);
routes.get('/users/:id', userController.retrieveById);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.deleteById);

// Rooms
routes.post('/rooms', roomController.create);
routes.get('/rooms', roomController.retrieveAll);
routes.get('/rooms/:id', roomController.retrieveById);
routes.put('/rooms/:id', roomController.update);

// Messages
routes.post('/messages', messageController.create);
routes.get('/messages', messageController.retrieveAll);

module.exports = routes;