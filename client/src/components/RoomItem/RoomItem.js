import React from 'react';
import { string } from 'prop-types';
import { routes } from '../../constants';

import Button from '../Button';

const { room } = routes;

const RoomItem = ({ item }) => (
  <li>
    <Button type="link" link={{ label: item, href: `${room}/${item}` }}>
      {item}
    </Button>
  </li>
);

RoomItem.propTypes = {
  item: string,
};

export default RoomItem;
