import React from 'react';
import { node, bool, string } from 'prop-types';

import styles from './Container.module.scss';

const Container = ({ children, flex, direction, align, justify }) => (
  <main
    className={`
    ${styles.wrapper}
    ${flex && styles.flex}
    ${direction && styles[direction]}
    ${align && styles[align]}
    ${justify && styles[justify]}`}
  >
    {children}
  </main>
);

Container.propTypes = {
  children: node.isRequired,
  flex: bool,
  direction: string,
  align: string,
  justify: string,
};

export default Container;
