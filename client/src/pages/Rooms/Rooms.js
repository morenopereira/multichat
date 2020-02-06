import React, { useState } from 'react';
import { object } from 'prop-types';

import Container from '../../components/Container';
import RoomsList from '../../components/RoomsList';
import RoomItem from '../../components/RoomItem';
import CreateRoomForm from '../../components/CreateRoomForm';

const roomsMock = ['amigos', 'familia', 'futebol'];

const Rooms = () => {
  const [room, setRoom] = useState('');
  const [rooms, setRooms] = useState(roomsMock);

  const handleInputChange = e => setRoom(e.target.value);

  const handleSubmit = () => {
    setRooms([...rooms, room]);
    setRoom('');
  };

  return (
    <Container flex direction="column" align="center">
      <CreateRoomForm inputValue={room} onChange={handleInputChange} onClick={handleSubmit} />
      <RoomsList title="Recent rooms">
        {rooms.map(room => (
          <RoomItem item={room} />
        ))}
      </RoomsList>
    </Container>
  );
};

Rooms.propTypes = {};

export default Rooms;
