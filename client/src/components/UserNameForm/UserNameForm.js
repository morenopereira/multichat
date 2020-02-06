import React from 'react';
import { func } from 'prop-types';

import Input from '../Input';
import Button from '../Button';

import styles from './UserNameForm.module.scss';

const NickNameForm = ({ onClick, ...props }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.subTitle}>Chat IO</h1>
    <Input placeholder="Please enter a nick name" {...props} />
    <Button onClick={onClick} className={styles.btn}>
      Login
    </Button>
  </div>
);

NickNameForm.propTypes = {
  onClick: func,
};

export default NickNameForm;
