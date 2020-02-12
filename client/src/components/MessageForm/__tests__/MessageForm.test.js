import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MessageForm from '../MessageForm';

describe('<MessageForm />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MessageForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('testing events', async () => {
    const { getByTestId } = render(<MessageForm />);
    const fieldInput = await waitForElement(() => getByTestId('input'));
    const value = 'test value';
    fireEvent.change(fieldInput, { target: { value } });

    expect(fieldInput.value).toEqual(value);
  });
});
