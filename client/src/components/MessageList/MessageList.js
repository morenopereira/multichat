import React from 'react';
import { node } from 'prop-types';

import Message from '../Message';

import styles from './MessageList.module.scss';

const MessageList = ({ messages, user }) => (
  <ul data-testid="list" className={styles.wrapper}>
    {messages.map((message, index) => (
      <Message user={user} key={index} message={message} />
    ))}
  </ul>
);

MessageList.propTypes = {
  children: node,
};

export default MessageList;
