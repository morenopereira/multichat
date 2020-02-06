import React from 'react';
import { string } from 'prop-types';

import Button from '../Button';

import styles from './RoomItem.module.scss';

const RoomItem = ({ item }) => (
  <li className={styles.item} key={item}>
    <Button color="darkGray" type="link" link={{ label: item, href: `/${item}` }}>
      {item}
    </Button>
  </li>
);

RoomItem.propTypes = {
  item: string,
};

export default RoomItem;
