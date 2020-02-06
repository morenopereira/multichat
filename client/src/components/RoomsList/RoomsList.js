import React from 'react';
import { node } from 'prop-types';

import styles from './RoomsList.module.scss';

const RoomsList = ({ children, title }) => (
  <div className={styles.wrapper}>
    <h1>{title}</h1>
    <ul className={styles.list}>{children}</ul>
  </div>
);

RoomsList.propTypes = {
  children: node,
};

export default RoomsList;
