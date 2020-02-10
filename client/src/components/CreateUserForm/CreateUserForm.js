import React from 'react';
import { func, string, bool } from 'prop-types';

import Input from '../Input';
import Button from '../Button';
import Form from '../Form';

import styles from './CreateUserForm.module.scss';

const CreateUserForm = ({ onSubmit, completeSigin, title = 'Chat IO', btnLabel = 'Login', ...props }) => (
  <Form onSubmit={onSubmit} className={styles.wrapper}>
    <h3 className={styles.subTitle}>{title}</h3>
    {completeSigin ? (
      <div className={styles.inputContainer}>
        <Input name="email" className={styles.input} placeholder="Type your email" {...props} />
        <Input name="name" className={styles.input} placeholder="Type your name" {...props} />
        <Input name="birthday" className={styles.input} placeholder="Type your birthday" {...props} />
      </div>
    ) : (
      <Input placeholder="Digite seu apelido" {...props} />
    )}
    <Button onClick={onSubmit} className={styles.btn}>
      {btnLabel}
    </Button>
  </Form>
);

CreateUserForm.propTypes = {
  onClick: func,
  title: string,
  completeSigin: bool,
  btnLabel: string,
};

export default CreateUserForm;
