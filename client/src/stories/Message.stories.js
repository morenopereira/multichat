import React from 'react';

import Message from '../components/Message';

export default {
  title: 'Message',
  component: Message,
};

export const Default = () => <Message user={{}} message={{ author: 'fake user', value: 'fake message' }} />;
