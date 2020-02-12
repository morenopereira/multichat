import React from 'react';
import MessageList from '../MessageList';
import renderer from 'react-test-renderer';

describe('<MessageList />', () => {

  const messagesFake = [
    { value: 'hi', author: 'joe' }
  ]

  const userFake = {
    nickName: 'joe joe'
  }

  it('renders correctly', () => {
    const tree = renderer
      .create(<MessageList messages={messagesFake} user={userFake} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});