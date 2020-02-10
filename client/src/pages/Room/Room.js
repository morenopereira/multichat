import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { object } from 'prop-types';
import io from 'socket.io-client';

import { updateUser, getUser } from '../../redux/user';
import { updaRoom } from '../../redux/rooms';

import { apiURI } from '../../constants';

import Container from '../../components/Container';
import MessageForm from '../../components/MessageForm';
import MessageList from '../../components/MessageList';
import CompleteRegister from '../../components/CompleteRegister';
import Button from '../../components/Button';

const socket = io(apiURI);
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'));

const Room = ({ user, updateUser, getUser, updaRoom }) => {
  const [userState, setUserState] = useState({
    email: '',
    name: '',
    birthday: '',
    logged: false,
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

    const roomId = localStorage.getItem('@chatio_room_id');

    updaRoom([message], roomId);
    setMessage({ value: '' });
  };

  const updateUserSubmit = e => {
    e.preventDefault();

    const { email, name, birthday } = userState;

    const validateInput = email.trim() && name.trim() && birthday.trim();

    if (validateInput) {
      userState.restriction = false;
      userState.logged = true;

      updateUser({ ...user, ...userState });
    }
  };

  const login = e => {
    e.preventDefault();

    userState.logged = true;

    updateUser({ ...user, ...userState });
  };

  const logOut = e => {
    e.preventDefault();

    userState.logged = false;

    updateUser({ ...user, ...userState });
  };

  const renderActions = () => {
    if (user.restriction) {
      return (
        <CompleteRegister
          title="Complete seu cadastro para enviar mensagens"
          btnLabel="Enviar"
          onSubmit={updateUserSubmit}
          onChange={handleUserChange}
        />
      );
    } else if (!user.restriction && !user.logged) {
      return <Button onClick={login}>Logar</Button>;
    } else {
      return (
        <MessageForm value={message.value} onSubmit={sendMessage} onChange={handleInputChange} onLogout={logOut} />
      );
    }
  };

  return (
    <Container flex direction="column" justify="between">
      <MessageList user={user} messages={messages} />
      {renderActions()}
    </Container>
  );
};

Room.propTypes = {
  user: object,
};

const mapStateToProps = ({ user }) => ({
  user: user.data,
  // newRoom: room.newMessage,
});

const mapDispatchToProps = dispatch => {
  return {
    updateUser: bindActionCreators(updateUser, dispatch),
    getUser: bindActionCreators(getUser, dispatch),
    updaRoom: bindActionCreators(updaRoom, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);
