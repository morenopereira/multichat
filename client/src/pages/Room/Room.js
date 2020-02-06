import React, { useState } from 'react';
import { object } from 'prop-types';

import Container from '../../components/Container';
import RoomForm from '../../components/RoomForm';
import MessageList from '../../components/MessageList';

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({
    value: '',
    author: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    setMessages([...messages, message]);
    setMessage({ value: '' });
  };

  const handleInputChange = e => setMessage({ value: e.target.value, author: 'moreno' });

  return (
    <Container flex direction="column" justify="between">
      <MessageList messages={messages} />
      <RoomForm value={message.value} onSubmit={handleSubmit} onChange={handleInputChange} />
    </Container>
  );
};

Room.propTypes = {};

export default Room;
