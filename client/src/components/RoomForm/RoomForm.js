import React from 'react';
import { func } from 'prop-types';

import Input from '../Input';
import Button from '../Button';
import Form from '../Form';

import styles from './RoomForm.module.scss';

const RoomForm = ({ onSubmit, ...props }) => {
  return (
    <Form onSubmit={onSubmit} className={styles.wrapper}>
      <Input name="message" className={styles.input} placeholder="Type a message" {...props} />
      <Button onClick={onSubmit} className={styles.btn}>
        Click
      </Button>
    </Form>
  );
};

RoomForm.propTypes = {
  onClick: func,
};

export default RoomForm;
