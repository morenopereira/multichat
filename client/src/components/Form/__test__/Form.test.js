import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Form from '../Form';

describe('<Form />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('find a form ', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Form />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('form');
  });
});
