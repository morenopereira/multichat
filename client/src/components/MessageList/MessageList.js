import React from 'react';
import { array, object } from 'prop-types';

import Message from '../Message';

import styles from './MessageList.module.scss';

const MessageList = ({ messages = [], user }) => (
  <ul data-testid="list" className={styles.wrapper}>
    {messages.map((message, index) => (
      <Message user={user} key={index} message={message} />
    ))}
  </ul>
);

MessageList.propTypes = {
  messages: array,
  user: object,
};

export default MessageList;
