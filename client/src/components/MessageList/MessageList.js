import React from 'react';
import { node } from 'prop-types';

import Message from '../Message';

import styles from './MessageList.module.scss';

const MessageList = ({ messages }) => (
  <ul className={styles.wrapper}>
    {messages.map((message, index) => (
      <Message key={index} message={message} />
    ))}
  </ul>
);

MessageList.propTypes = {
  children: node,
};

export default MessageList;
