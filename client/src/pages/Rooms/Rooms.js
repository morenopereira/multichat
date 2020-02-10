import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, array } from 'prop-types';

import { getUser } from '../../redux/userReducers';
import { createRoom, getAllRooms } from '../../redux/roomReducer';

import { routes } from '../../constants';

import Container from '../../components/Container';
import RoomsList from '../../components/RoomsList';
import CreateRoomForm from '../../components/CreateRoomForm';

const Rooms = ({ createRoom, allrooms, getAllRooms, getUser, history }) => {
  const [room, setRoom] = useState({
    name: '',
    message: [],
  });

  const [inputStatus, setInputStatus] = useState({
    error: false,
    message: '',
  });

  useEffect(() => {
    getAllRooms();
    getUser();
  }, [getAllRooms, getUser]);

  const handleInputChange = e => setRoom({ ...room, name: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    if (room.name.trim()) {
      createRoom(room);
      history.push(`${routes.room}/${room.name}`);
    } else {
      setInputStatus({ error: true, message: 'Insira um nome para da sala' });
    }

    setRoom({ name: '' });
  };

  return (
    <Container flex direction="column" align="center">
      <h1>Salas</h1>
      <CreateRoomForm error={inputStatus} value={room.name} onChange={handleInputChange} onSubmit={handleSubmit} />
      {allrooms.length > 0 && <RoomsList title="Salas recentes" rooms={allrooms} />}
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
    getUser: bindActionCreators(getUser, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
