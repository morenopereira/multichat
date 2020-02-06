import React from 'react';
import { func, string } from 'prop-types';

import Button from '../../components/Button';
import Input from '../../components/Input';

import styles from './CreateRoomForm.module.scss';

const CreateRoomForm = ({ onChange, onClick, inputValue }) => (
  <div className={styles.wrapper}>
    <Input value={inputValue} onChange={onChange} placeholder="Type the room name" />
    <Button onClick={onClick} className={styles.btn}>
      Add room
    </Button>
  </div>
);

CreateRoomForm.propTypes = {
  onChange: func,
  onClick: func,
  inputValue: string,
};

export default CreateRoomForm;
