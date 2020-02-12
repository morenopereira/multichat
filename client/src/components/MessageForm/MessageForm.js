import React from 'react';
import { func } from 'prop-types';

import Input from '../Input';
import Button from '../Button';
import Form from '../Form';

import styles from './MessageForm.module.scss';

const RoomForm = ({ onSubmit, onLogout, ...props }) => (
  <Form onSubmit={onSubmit} className={styles.wrapper}>
    <Input name="message" className={styles.input} placeholder="Digite uma mensagem" {...props} />
    <div className={styles.btnsContainer}>
      <Button onClick={onSubmit} className={styles.btn}>
        Enviar
      </Button>
      <Button onClick={onLogout} color="warning" className={styles.btn}>
        Deslogar
      </Button>
    </div>
  </Form>
);

RoomForm.propTypes = {
  onSubmit: func,
  onLogout: func,
};

export default RoomForm;
