import React, { useState } from 'react';
import { object } from 'prop-types';

import { routes } from '../../constants';

import Container from '../../components/Container';
import UserNameForm from '../../components/UserNameForm';

const Home = ({ history }) => {
  const [userName, setUserName] = useState('');

  const { rooms } = routes;

  const handleInputChange = e => setUserName(e.target.value);

  const handleSubmit = () => {
    if (userName.trim()) history.push(rooms);
  };

  return (
    <Container flex align="center">
      <UserNameForm onClick={handleSubmit} onChange={handleInputChange} inputValue={userName} />
    </Container>
  );
};

Home.propTypes = {
  history: object,
};

export default Home;
