import React from 'react';
import { string, func } from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ children, className, color = 'primary', onClick }) => (
  <button onClick={onClick} className={`${className} ${color && styles[color]}`}>
    {children}
  </button>
);

Button.propTypes = {
  children: string,
  className: string,
  color: string,
  onClick: func,
};

export default Button;
