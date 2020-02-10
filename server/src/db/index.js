const mongoose = require('mongoose');

const mongoURI = require('../../constants');

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .catch(error => handleError(error));

module.exports = mongoose;
