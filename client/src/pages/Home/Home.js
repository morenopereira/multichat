import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { object, func } from 'prop-types';

import { createUser, getUser } from '../../redux/userReducers';

import { routes } from '../../constants';

import Container from '../../components/Container';
import CreateUserForm from '../../components/CreateUserForm';

const Home = ({ history, createUser, getUser, user }) => {
  const { rooms } = routes;

  const [userState, setUser] = useState({
    nickName: '',
    restriction: true,
  });

  const [inputStatus, setInputStatus] = useState({
    error: false,
    message: '',
  });

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user.nickName) history.push(rooms);
  }, [user]);

  const handleInputChange = e => setUser({ ...userState, nickName: e.target.value, restriction: true });

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

const mapStateToProps = ({ user }) => ({
  user: user.data,
});

const mapDispatchToProps = dispatch => {
  return {
    createUser: bindActionCreators(createUser, dispatch),
    getUser: bindActionCreators(getUser, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
