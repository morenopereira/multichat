import React from 'react';
import { func } from 'prop-types';

import Button from '../Button';
import Input from '../Input';
import Form from '../Form';

import styles from './CreateRoomForm.module.scss';

const CreateRoomForm = ({ onSubmit, ...props }) => (
  <Form onSubmit={onSubmit} className={styles.wrapper}>
    <Input placeholder="Nome da sala" {...props} />
    <Button onClick={onSubmit} className={styles.btn}>
      Criar sala
    </Button>
  </Form>
);

CreateRoomForm.propTypes = {
  onSubmit: func,
};

export default CreateRoomForm;
