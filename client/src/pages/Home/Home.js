import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { object, func } from 'prop-types';

import { createUser } from '../../redux/userReducers';

import { routes } from '../../constants';

import Container from '../../components/Container';
import CreateUserForm from '../../components/CreateUserForm';

const Home = ({ history, createUser }) => {
  const [userState, setUser] = useState({
    nickName: '',
    restriction: true,
  });
  const [inputStatus, setInputStatus] = useState({
    error: false,
    message: '',
  });

  const { rooms } = routes;

  const handleInputChange = e => setUser({ nickName: e.target.value, restriction: true });

  const handleSubmit = () => {
    if (userState.nickName.trim()) {
      createUser(userState);
      history.push(rooms);
    } else {
      setInputStatus({ error: true, message: 'Please enter your nickname' });
    }
  };

  return (
    <Container flex align="center">
      <CreateUserForm
        error={inputStatus}
        onClick={handleSubmit}
        onChange={handleInputChange}
        value={userState.nickName}
      />
    </Container>
  );
};

Home.propTypes = {
  history: object,
  user: object,
  createUser: func,
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: bindActionCreators(createUser, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Home);
