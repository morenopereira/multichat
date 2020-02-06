import React from 'react';
import { string, func } from 'prop-types';

import styles from './Input.module.scss';

const Input = ({ name, onChange, value, placeholder, className }) => (
  <input
    className={`${styles.wrapper} ${className}`}
    name={name}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
  />
);

Input.defaultProps = {
  placeholder: '',
  className: '',
};

Input.propTypes = {
  onChange: func.isRequired,
  name: string,
  value: string,
  placeholder: string,
  className: string,
};

export default Input;
