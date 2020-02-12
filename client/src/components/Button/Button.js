import React from 'react';
import { Link } from 'react-router-dom';
import { string, func, object } from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ children, className, color = 'primary', onClick, type, link }) => {
  return type === 'link' ? (
    <Link className={`${styles.link} ${color && styles[color]}`} to={link.href}>
      {link.label}
    </Link>
  ) : (
    <button data-testid='btn' onClick={onClick} className={`${className} ${color && styles[color]}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: string,
  className: string,
  color: string,
  onClick: func,
  type: string,
  link: object,
};

export default Button;
