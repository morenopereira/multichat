import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import RoomsList from '../components/RoomsList';
import RoomItem from '../components/RoomItem';

export default {
  title: 'RoomsList',
  component: RoomsList,
};

const listMock = ['Friends', 'Family', 'Soccer'];

const story = () => (
  <RoomsList title="Recent rooms">
    {listMock.map(room => (
      <RoomItem item={room} />
    ))}
  </RoomsList>
);

export const Default = () => <MemoryRouter>{story()}</MemoryRouter>;
