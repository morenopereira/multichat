import React, { useState } from 'react';
import { object } from 'prop-types';

import { routes } from '../../constants';

import Container from '../../components/Container';
import UserNameForm from '../../components/UserNameForm';

const Home = ({ history }) => {
  const [nickName, setNickName] = useState('');
  const [inputStatus, setInputStatus] = useState({
    error: false,
    message: '',
  });

  const { rooms } = routes;

  const handleInputChange = e => setNickName(e.target.value);

  const handleSubmit = () => {
    if (!nickName.trim()) {
      setInputStatus({ error: true, message: 'Please enter your nickname' });
    } else {
      history.push(rooms);
    }
  };

  return (
    <Container flex align="center">
      <UserNameForm error={inputStatus} onClick={handleSubmit} onChange={handleInputChange} value={nickName} />
    </Container>
  );
};

Home.propTypes = {
  history: object,
};

export default Home;
