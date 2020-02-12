import React from 'react';
import CreateRoomForm from '../CreateRoomForm';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('<CreateRoomForm />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CreateRoomForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('testing events', async () => {
    const { getByTestId } = render(<CreateRoomForm />)
      const fieldInput = await waitForElement(() => getByTestId('input'))
      const value = 'test value'
      fireEvent.change(fieldInput, { target: { value } })

      const fieldBtn = await waitForElement(() => getByTestId('btn'))
      fireEvent.submit(fieldBtn)

      expect(fieldInput.value).toEqual(value)
  });
});