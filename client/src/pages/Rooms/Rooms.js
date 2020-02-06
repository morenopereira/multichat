import React, { useState } from 'react';
import { object } from 'prop-types';

import Container from '../../components/Container';
import RoomsList from '../../components/RoomsList';
import CreateRoomForm from '../../components/CreateRoomForm';

const roomsMock = ['amigos', 'familia', 'futebol'];

const Rooms = () => {
  const [room, setRoom] = useState('');
  const [rooms, setRooms] = useState(roomsMock);

  const handleInputChange = e => setRoom(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    setRooms([...rooms, room]);
    setRoom('');
  };

  return (
    <Container flex direction="column" align="center">
      <CreateRoomForm value={room} onChange={handleInputChange} onSubmit={handleSubmit} />
      <RoomsList title="Recent rooms" rooms={rooms} />
    </Container>
  );
};

Rooms.propTypes = {};

export default Rooms;
