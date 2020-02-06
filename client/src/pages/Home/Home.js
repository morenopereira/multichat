import React, { useState } from 'react';

import Container from '../../components/Container';
import UserNameForm from '../../components/UserNameForm';

const Home = () => {
  const [userName, setUserName] = useState('');

  const handleInputChange = e => setUserName(e.target.value);

  return (
    <Container>
      <UserNameForm onChange={handleInputChange} inputValue={userName} />
    </Container>
  );
};

export default Home;
