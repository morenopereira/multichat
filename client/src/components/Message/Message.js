import React from 'react';
import { object } from 'prop-types';

import styles from './Message.module.scss';

const Message = ({ message, user }) => (
  <li className={styles.item} key={message.value}>
    {console.log(user)}
    <div className={`${styles.messageContainer} ${message.author === user.nickName && styles.myMessage}`}>
      <strong className={styles.author}>{message.author}</strong>
      <span className={styles.value}>{message.value}</span>
    </div>
  </li>
);

Message.propTypes = {
  message: object,
};

export default Message;
