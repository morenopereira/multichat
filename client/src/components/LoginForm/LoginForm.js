import React from 'react';
import { func, string } from 'prop-types';

import Input from '../Input';
import Button from '../Button';
import Form from '../Form';

import styles from './UserForm.module.scss';

const LoginForm = ({ onSubmit, title = 'Chat IO', btnLabel = 'Login', ...props }) => (
  <Form onSubmit={onSubmit} className={styles.wrapper}>
    <h3 className={styles.title}>{title}</h3>
    <h5>Crie um usuário para ter acesso as salas</h5>
    <Input placeholder="Digite seu apelido" {...props} />
    <Button onClick={onSubmit} className={styles.btn}>
      {btnLabel}
    </Button>
  </Form>
);

LoginForm.propTypes = {
  onSubmit: func,
  title: string,
  btnLabel: string,
};

export default LoginForm;
