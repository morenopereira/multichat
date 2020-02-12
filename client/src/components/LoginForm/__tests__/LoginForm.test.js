import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import LoginForm from '../LoginForm';

describe('<LoginForm />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LoginForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('testing events', async () => {
    const { getByTestId } = render(<LoginForm />);
    const fieldInput = await waitForElement(() => getByTestId('input'));
    const value = 'test value';
    fireEvent.change(fieldInput, { target: { value } });

    const fieldBtn = await waitForElement(() => getByTestId('btn'));
    fireEvent.submit(fieldBtn);

    expect(fieldInput.value).toEqual(value);
  });
});
