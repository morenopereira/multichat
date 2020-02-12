import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { object, func, bool } from 'prop-types';
import io from 'socket.io-client';

import { updateUser, getUser } from '../../redux/user';
import { updaRoom, getRoomsByName } from '../../redux/rooms';

import { apiURI, routes } from '../../constants';

import Container from '../../components/Container';
import MessageForm from '../../components/MessageForm';
import MessageList from '../../components/MessageList';
import CompleteRegister from '../../components/CompleteRegister';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

const splitUrl = (url, indexPath) => url.split('/')[indexPath];

const socket = io(apiURI);
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'));

const Room = ({ user, updateUser, getUser, updaRoom, getRoomsByName, currentRoom, history, loading }) => {
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

  const roomName = splitUrl(history.location.pathname, 2);

  useEffect(() => {
    getUser();
    getRoomsByName(roomName);
  }, [getUser, user.restriction, roomName, getRoomsByName]);

  useEffect(() => {
    setMessages(currentRoom !== undefined ? currentRoom.messages : []);
  }, [currentRoom]);

  useEffect(() => {
    const handleNewMessage = newMessage => setMessages([...messages, newMessage]);

    socket.on('chat.message', handleNewMessage);
    return () => socket.off('chat.message');
  }, [messages]);

  const handleInputChange = e => setMessage({ value: e.target.value, author: user.nickName });

  const handleUserChange = e => setUserState({ ...userState, [e.target.name]: e.target.value });

  const sendMessage = e => {
    e.preventDefault();

    if (message.value.trim()) {
      socket.emit('chat.message', message);

      updaRoom({ name: roomName, message }, currentRoom._id);
      setMessage({ value: '' });
    }
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

    if (Object.keys(user).length === 0) {
      history.push(routes.home);
      return;
    }

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
          btnLabel="Entrar"
          onSubmit={updateUserSubmit}
          onChange={handleUserChange}
        />
      );
    }
    if (!user.restriction && !user.logged) {
      return <Button onClick={login}>Logar</Button>;
    }
    return <MessageForm value={message.value} onSubmit={sendMessage} onChange={handleInputChange} onLogout={logOut} />;
  };

  return (
    <Container flex direction="column" justify="between">
      {loading ? (
        <Loader minHeight />
      ) : (
        <>
          {messages !== undefined && <MessageList user={user} messages={messages} />}
          {renderActions()}
        </>
      )}
    </Container>
  );
};

Room.propTypes = {
  user: object,
  updateUser: func,
  getUser: func,
  updaRoom: func,
  getRoomsByName: func,
  currentRoom: object,
  history: object,
  loading: bool,
};

const mapStateToProps = ({ user, room }) => ({
  user: user.data,
  currentRoom: room.currentRoom,
  loading: room.loading,
});

const mapDispatchToProps = dispatch => ({
  updateUser: bindActionCreators(updateUser, dispatch),
  getUser: bindActionCreators(getUser, dispatch),
  updaRoom: bindActionCreators(updaRoom, dispatch),
  getRoomsByName: bindActionCreators(getRoomsByName, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
