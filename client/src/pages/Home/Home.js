import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { object, func } from 'prop-types';

import { createUser } from '../../redux/user';

import { routes } from '../../constants';

import Container from '../../components/Container';
import LoginForm from '../../components/LoginForm';

const Home = ({ history, createUser }) => {
  const { rooms } = routes;

  const [userState, setUser] = useState({
    nickName: '',
  });

  const [inputStatus, setInputStatus] = useState({
    error: false,
    message: '',
  });

  const userExist = sessionStorage.getItem('@chatio_id');

  useEffect(() => {
    if (userExist) {
      history.push(rooms);
    }
  }, [history, userExist, rooms]);

  const handleInputChange = (e) => setUser({ nickName: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userState.nickName.trim()) {
      createUser(userState);
      history.push(rooms);
    } else {
      setInputStatus({ error: true, message: 'Insira um nick name' });
    }
  };

  return (
    <Container flex align="center" direction="column">
      <LoginForm error={inputStatus} onSubmit={handleSubmit} onChange={handleInputChange} value={userState.nickName} />
    </Container>
  );
};

Home.propTypes = {
  history: object,
  createUser: func,
};

const mapDispatchToProps = (dispatch) => ({
  createUser: bindActionCreators(createUser, dispatch),
});

export default connect(null, mapDispatchToProps)(Home);
