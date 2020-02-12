import React from 'react';
import Message from '../Message';
import renderer from 'react-test-renderer';

describe('<Message />', () => {
  it('renders correctly', () => {
    const messageFake = {
      value: 'Hello',
      author: 'Joe'
    }

    const userFake = {
      nickName: 'joe joe'
    }

    const tree = renderer
      .create(<Message message={messageFake} user={userFake} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});