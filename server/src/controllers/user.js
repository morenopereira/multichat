const User = require('../models/User');

const create = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(200).send({ message: 'Created', user });
  } catch (error) {
    return res.status(404).send({ error, message: 'Error' });
  }
};

const retrieveAll = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).send(users);
  } catch (error) {
    return res.status(400).send({ error, message: 'No users found.' });
  }
};

const retrieveById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    return res.status(200).send(user);
  } catch (error) {
    return res.status(404).send('This user possibly does not exist.');
  }
};

const update = async (req, res) => {
  try {
    const user = await User.update(req.params.id, req.body);

    return res.status(200).send({ message: 'Updated', user });
  } catch (error) {
    return res.status(400).send('Update cancelled');
  }
};

module.exports = {
  create,
  retrieveAll,
  update,
  retrieveById,
};
