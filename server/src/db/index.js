const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .catch(error => handleError(error));

module.exports = mongoose;
