import React from 'react';
import { node } from 'prop-types';

import styles from './Container.module.scss';

const Container = ({ children }) => <main className={styles.wrapper}>{children}</main>;

Container.propTypes = {
  children: node.isRequired,
};

export default Container;
