import React from 'react';
import { string } from 'prop-types';
import { routes } from '../../constants';

import Button from '../Button';

import styles from './RoomItem.module.scss';

const { room } = routes;

const RoomItem = ({ item }) => (
  <li className={styles.item}>
    <Button color="darkGray" type="link" link={{ label: item, href: `${room}/${item}` }}>
      {item}
    </Button>
  </li>
);

RoomItem.propTypes = {
  item: string,
};

export default RoomItem;
