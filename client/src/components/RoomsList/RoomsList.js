import React from 'react';
import { node } from 'prop-types';

import RoomItem from '../RoomItem';

import styles from './RoomsList.module.scss';

const RoomsList = ({ rooms, title }) => (
  <div className={styles.wrapper}>
    <h2>{title}</h2>
    <ul className={styles.list}>
      {rooms.map((room) => (
        <RoomItem key={room._id} item={room.name} />
      ))}
    </ul>
  </div>
);

RoomsList.propTypes = {
  children: node,
};

export default RoomsList;
