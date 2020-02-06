import React from 'react';
import { func, string } from 'prop-types';

import Input from '../Input';
import Button from '../Button';

import styles from './UserNameForm.module.scss';

const NickNameForm = ({ onChange, inputValue, onClick }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.subTitle}>Chat IO</h1>
    <Input className={styles.input} onChange={onChange} placeholder="Please enter a user name" value={inputValue} />
    <Button onClick={onClick} className={styles.btn}>
      Login
    </Button>
  </div>
);

NickNameForm.propTypes = {
  onChange: func,
  inputValue: string,
  onClick: func,
};

export default NickNameForm;
