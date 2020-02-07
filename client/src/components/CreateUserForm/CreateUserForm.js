import React from 'react';
import { func, string, bool } from 'prop-types';

import Input from '../Input';
import Button from '../Button';

import styles from './CreateUserForm.module.scss';

const CreateUserForm = ({ onClick, completeSigin, title = 'Chat IO', btnLabel = 'Login', ...props }) => (
  <div className={styles.wrapper}>
    <h3 className={styles.subTitle}>{title}</h3>
    {completeSigin ? (
      <div>
        <Input name="email" className={styles.input} placeholder="Type your email" {...props} />
        <Input name="name" className={styles.input} placeholder="Type your name" {...props} />
        <Input name="birthday" className={styles.input} placeholder="Type your birthday" {...props} />
      </div>
    ) : (
      <Input className={styles.input} placeholder="Type nick name" {...props} />
    )}
    <Button onClick={onClick} className={styles.btn}>
      {btnLabel}
    </Button>
  </div>
);

CreateUserForm.propTypes = {
  onClick: func,
  title: string,
  completeSigin: bool,
  btnLabel: string,
};

export default CreateUserForm;
