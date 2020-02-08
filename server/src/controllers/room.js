const Room = require('../models/Room');
const Message = require('../models/Message');

const create = async (req, res) => {
  try {
    const room = await Room.create(req.body.room);

    res.status(200).send({ message: 'Created', room });
  } catch (error) {
    return res.status(404).send({ error, message: 'Error' });
  }
};

const retrieveAll = async (req, res) => {
  try {
    const rooms = await Room.find().populate('messages');

    return res.status(200).send(rooms);
  } catch (error) {
    return res.status(400).send({ error, message: 'No rooms found.' });
  }
};

const retrieveById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id).populate('messages');

    return res.status(200).send(room);
  } catch (error) {
    return res.status(404).send('This room possibly does not exist.');
  }
};

const update = async (req, res) => {
  try {
    const { name, messages } = req.body;

    const room = await Room.findByIdAndUpdate(req.params.id, { name }, { new: true }).populate('messages');

    await Promise.all(
      messages.map(async message => {
        const roomMessage = new Message({ ...message, room: message._id });

        await roomMessage.save();

        room.messages.push(roomMessage);
      })
    );

    await room.save();

    res.status(200).send({ message: 'Updated', room });
  } catch (error) {
    return res.status(404).send({ error, message: 'Error' });
  }
};

module.exports = {
  create,
  retrieveAll,
  retrieveById,
  update,
};
