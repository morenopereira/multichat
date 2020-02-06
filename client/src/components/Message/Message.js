import React from 'react';
import { object } from 'prop-types';

import styles from './Message.module.scss';

const Message = ({ message }) => (
  <li className={styles.item} key={message.value}>
    <strong className={styles.author}>{message.author}</strong>
    <span className={styles.value}>{message.value}</span>
  </li>
);

Message.propTypes = {
  message: object,
};

export default Message;
