import React from 'react';
import CompleteRegister from '../CompleteRegister';
import renderer from 'react-test-renderer';
import { unmountComponentAtNode } from "react-dom";

describe('<CompleteRegister />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CompleteRegister />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Unmount Component At Node ', () => {
    let container = null;
      beforeEach(() => {
        container = document.createElement(<CompleteRegister />);
        document.body.appendChild(container);
      });

      afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
      });
  });
});