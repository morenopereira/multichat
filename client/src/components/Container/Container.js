import React from 'react';
import { node, bool, string } from 'prop-types';

import styles from './Container.module.scss';

const Container = ({ children, flex, direction, align }) => (
  <main
    className={`
    ${styles.wrapper}
    ${flex && styles.flex}
    ${direction && styles[direction]}
    ${align && styles[align]}`}
  >
    {children}
  </main>
);

Container.propTypes = {
  children: node.isRequired,
  flex: bool,
  direction: string,
};

export default Container;
