import React from 'react';
import { func, node, string } from 'prop-types';

const Form = ({ children, onSubmit, className }) => (
  <form className={className} onSubmit={onSubmit}>
    {children}
  </form>
);

Form.propTypes = {
  onSubmit: func,
  children: node,
  className: string,
};

export default Form;
