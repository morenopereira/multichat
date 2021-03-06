import React from 'react';
import { object, any } from 'prop-types';

import styles from './Message.module.scss';

const Message = ({ message, user }) => (
  <li className={styles.item} key={message.value}>
    <div className={`${styles.messageContainer} ${message.author === user.nickName && styles.myMessage}`}>
      <strong className={styles.author}>{message.author}</strong>
      <span className={styles.value}>{message.value}</span>
    </div>
  </li>
);

Message.propTypes = {
  message: any,
  user: object,
};

export default Message;
