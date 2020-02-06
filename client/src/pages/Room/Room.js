import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import io from 'socket.io-client';

import { socketUri } from '../../constants';

import Container from '../../components/Container';
import RoomForm from '../../components/RoomForm';
import MessageList from '../../components/MessageList';

const socket = io(socketUri);
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'));

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({
    value: '',
    author: '',
  });

  useEffect(() => {
    const handleNewMessage = newMessage => setMessages([...messages, newMessage]);
    socket.on('chat.message', handleNewMessage);
    return () => socket.off('chat.message');
  }, [messages]);

  const handleSubmit = e => {
    e.preventDefault();

    socket.emit('chat.message', message);
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
