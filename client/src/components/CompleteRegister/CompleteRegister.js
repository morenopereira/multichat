import React from 'react';
import { func, string, bool } from 'prop-types';

import Input from '../Input';
import Button from '../Button';
import Form from '../Form';

import styles from './CompleteRegister.module.scss';

const CompleteRegister = ({ onSubmit, title = 'Chat IO', btnLabel = 'Login', ...props }) => (
  <Form onSubmit={onSubmit} className={styles.wrapper}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.inputContainer}>
      <Input name="email" className={styles.input} placeholder="Email" {...props} />
      <Input name="name" className={styles.input} placeholder="Nome" {...props} />
      <Input name="birthday" className={styles.input} placeholder="Aniversário" {...props} />
    </div>
    <Button onClick={onSubmit} className={styles.btn}>
      {btnLabel}
    </Button>
  </Form>
);

CompleteRegister.propTypes = {
  onClick: func,
  title: string,
  completeSigin: bool,
  btnLabel: string,
};

export default CompleteRegister;
