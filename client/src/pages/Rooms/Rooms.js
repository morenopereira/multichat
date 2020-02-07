import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, array } from 'prop-types';

import { getUser, user } from '../../redux/userReducers';
import { createRoom, getAllRooms } from '../../redux/roomReducer';

import { routes } from '../../constants';

import Container from '../../components/Container';
import RoomsList from '../../components/RoomsList';
import CreateRoomForm from '../../components/CreateRoomForm';

const Rooms = ({ createRoom, allrooms, getAllRooms, getUser, history, user }) => {
  const [room, setRoom] = useState({
    name: '',
    message: [],
  });

  useEffect(() => {
    getAllRooms();
    getUser();

    if (!user.nickName) history.push(routes.home);
  }, []);

  const handleInputChange = e => setRoom({ ...room, name: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    createRoom(room);
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

const mapStateToProps = ({ room, user }) => ({
  allrooms: room.rooms,
  user: user.data,
});

const mapDispatchToProps = dispatch => {
  return {
    createRoom: bindActionCreators(createRoom, dispatch),
    getAllRooms: bindActionCreators(getAllRooms, dispatch),
    getUser: bindActionCreators(getUser, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
