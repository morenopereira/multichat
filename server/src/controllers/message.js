const Message = require('../models/Message');

const create = async (req, res) => {
  try {
    const message = await Message.create(req.body);

    res.status(200).send({ message: 'Created', message });
  } catch (error) {
    return res.status(404).send({ error, message: 'Error' });
  }
};

const retrieveAll = async (req, res) => {
  try {
    const message = await Message.find();

    return res.status(200).send(message);
  } catch (error) {
    return res.status(400).send({ error, message: 'No messages found.' });
  }
};

module.exports = {
  create,
  retrieveAll,
};
