import React from 'react';
import Container from '../Container';
import renderer from 'react-test-renderer';
import { unmountComponentAtNode } from "react-dom";

describe('<Container />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Container>
          <h1>Hello</h1>
        </Container>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});