import React from 'react';
import { string, func, object } from 'prop-types';

import styles from './Input.module.scss';

const Input = ({
  name, onChange, value, placeholder, className, error,
}) => (
  <>
    {error && error.error && <div className={styles.error}>{error.message}</div>}
    <input
      className={`${styles.wrapper} ${className}`}
      data-testid="input"
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  </>
);

Input.defaultProps = {
  placeholder: '',
  className: '',
};

Input.propTypes = {
  onChange: func,
  name: string,
  value: string,
  placeholder: string,
  className: string,
  error: object,
};

export default Input;
