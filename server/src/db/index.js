const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://moreno:moreno@cluster0-nqtoh.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .catch(error => handleError(error));

module.exports = mongoose;
