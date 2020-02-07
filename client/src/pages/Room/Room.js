import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { object } from 'prop-types';
import io from 'socket.io-client';

import { createUser } from '../../redux/userReducers';

import { socketUri, routes } from '../../constants';

import Container from '../../components/Container';
import RoomForm from '../../components/RoomForm';
import MessageList from '../../components/MessageList';
import CreateUserForm from '../../components/CreateUserForm';

const socket = io(socketUri);
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'));

const Room = ({ user, createUser, history }) => {
  const [userState, setUserState] = useState({
    nickName: user.nickName,
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
    const handleNewMessage = newMessage => setMessages([...messages, newMessage]);
    socket.on('chat.message', handleNewMessage);
    return () => socket.off('chat.message');
  }, [messages]);

  useEffect(() => {
    if (!user.nickName) {
      history.push(routes.home);
    }
  });

  const handleInputChange = e => setMessage({ value: e.target.value, author: user.nickName });

  const handleUserChange = e => setUserState({ ...userState, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    socket.emit('chat.message', message);
    setMessage({ value: '' });
  };

  const updateUser = () => {
    const { nickName, email, name, birthday } = userState;

    if (nickName.trim() && email.trim() && name.trim() && birthday.trim()) {
      userState.restriction = false;

      createUser(userState);
    }
  };

  return (
    <Container flex direction="column" justify="between">
      <MessageList messages={messages} />
      {user.restriction ? (
        <CreateUserForm
          completeSigin
          title="Complete your registration to send messages"
          btnLabel="Enter"
          onClick={updateUser}
          onChange={handleUserChange}
        />
      ) : (
        <RoomForm value={message.value} onSubmit={handleSubmit} onChange={handleInputChange} />
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
    createUser: bindActionCreators(createUser, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
