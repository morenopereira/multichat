import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, array } from 'prop-types';

import { createRoom, getAllRooms } from '../../redux/roomReducer';

import { routes } from '../../constants';

import Container from '../../components/Container';
import RoomsList from '../../components/RoomsList';
import CreateRoomForm from '../../components/CreateRoomForm';

const Rooms = ({ createRoom, allrooms, getAllRooms, history }) => {
  const [room, setRoom] = useState({
    name: '',
    message: [],
  });

  useEffect(() => {
    getAllRooms();
  }, []);

  const handleInputChange = e => setRoom({ ...room, name: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await createRoom(room);
    getAllRooms();
    setRoom({ name: '' });
    history.push(`${routes.room}/${room.name}`);
  };

  return (
    <Container flex direction="column" align="center">
      <h1>Rooms</h1>
      <CreateRoomForm value={room.name} onChange={handleInputChange} onSubmit={handleSubmit} />
      {allrooms.length > 0 && <RoomsList title="Recent rooms" rooms={allrooms} />}
    </Container>
  );
};

Rooms.propTypes = {
  createRoom: func,
  allrooms: array,
  getAllRooms: func,
};

const mapStateToProps = ({ room }) => ({
  allrooms: room.rooms,
});

const mapDispatchToProps = dispatch => {
  return {
    createRoom: bindActionCreators(createRoom, dispatch),
    getAllRooms: bindActionCreators(getAllRooms, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
