import React from 'react';
import { func } from 'prop-types';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Form from '../../components/Form';

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
