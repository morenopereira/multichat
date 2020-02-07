const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chatio', { useNewUrlParser: true }).catch(error => handleError(error));

module.exports = mongoose;
