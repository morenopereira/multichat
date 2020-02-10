import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { object } from 'prop-types';
import io from 'socket.io-client';

import { updateUser, getUser } from '../../redux/userReducers';

import { socketUri } from '../../constants';

import Container from '../../components/Container';
import RoomForm from '../../components/RoomForm';
import MessageList from '../../components/MessageList';
import UserForm from '../../components/UserForm';

const socket = io(socketUri);
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'));

const Room = ({ user, updateUser, getUser }) => {
  const [userState, setUserState] = useState({
    email: '',
    name: '',
    birthday: '',
  });

  const [messages, setMessages] = useState([]);

  const [message, setMessage] = useState({
    value: '',
    author: user.nickName,
  });

  useEffect(() => {
    getUser();
  }, [getUser, user.restriction]);

  useEffect(() => {
    const handleNewMessage = newMessage => setMessages([...messages, newMessage]);
    socket.on('chat.message', handleNewMessage);
    return () => socket.off('chat.message');
  }, [messages]);

  const handleInputChange = e => setMessage({ value: e.target.value, author: user.nickName });

  const handleUserChange = e => setUserState({ ...userState, [e.target.name]: e.target.value });

  const sendMessage = e => {
    e.preventDefault();
    socket.emit('chat.message', message);
    setMessage({ value: '' });
  };

  const updateUserSubmit = e => {
    e.preventDefault();

    const { email, name, birthday } = userState;

    const validateInput = email.trim() && name.trim() && birthday.trim();

    if (validateInput) {
      userState.restriction = false;

      updateUser({ ...user, ...userState });
    }
  };

  const logout = e => {
    e.preventDefault();
    userState.restriction = true;

    updateUser({ ...user, ...userState });
  };

  return (
    <Container flex direction="column" justify="between">
      <MessageList user={user} messages={messages} />
      {user.restriction ? (
        <UserForm
          completeSigin
          title="Complete seu cadastro para enviar mensagens"
          btnLabel="Enviar"
          onSubmit={updateUserSubmit}
          onChange={handleUserChange}
        />
      ) : (
        <RoomForm value={message.value} onSubmit={sendMessage} onChange={handleInputChange} onLogout={logout} />
      )}
    </Container>
  );
};

Room.propTypes = {
  user: object,
};

const mapStateToProps = ({ user }) => ({
  user: user.data,
});

const mapDispatchToProps = dispatch => {
  return {
    updateUser: bindActionCreators(updateUser, dispatch),
    getUser: bindActionCreators(getUser, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
