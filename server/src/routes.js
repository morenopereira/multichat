const routes = require('express').Router();
const userController = require('./controllers/user');

routes.post('/users', userController.create);
routes.get('/users', userController.retrieveAll);
routes.get('/users/:id', userController.retrieveById);
routes.put('/users/:id', userController.update);

module.exports = routes;
