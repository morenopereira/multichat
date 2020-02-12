import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func, array, object } from 'prop-types';

import { getUser } from '../../redux/user';
import { createRoom, getAllRooms } from '../../redux/rooms';

import { routes } from '../../constants';

import Container from '../../components/Container';
import RoomsList from '../../components/RoomsList';
import CreateRoomForm from '../../components/CreateRoomForm';
import Loader from '../../components/Loader';

const Rooms = ({
  createRoom, allrooms, getAllRooms, getUser, history, loading,
}) => {
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

  const handleInputChange = (e) => setRoom({ ...room, name: e.target.value });

  const handleSubmit = (e) => {
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
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1>Salas</h1>
          <CreateRoomForm error={inputStatus} value={room.name} onChange={handleInputChange} onSubmit={handleSubmit} />
          {allrooms.length > 0 && <RoomsList title="Salas recentes" rooms={allrooms} />}
        </>
      )}
    </Container>
  );
};

Rooms.propTypes = {
  createRoom: func,
  allrooms: array,
  getAllRooms: func,
  getUser: func,
  history: object,
};

const mapStateToProps = ({ room }) => ({
  allrooms: room.rooms,
  loading: room.loading,
});

const mapDispatchToProps = (dispatch) => ({
  createRoom: bindActionCreators(createRoom, dispatch),
  getAllRooms: bindActionCreators(getAllRooms, dispatch),
  getUser: bindActionCreators(getUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
