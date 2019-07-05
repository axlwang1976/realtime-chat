import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import styles from '../styles/ChatForm.module.scss';

export default function ChatForm() {
  return (
    <form className={styles.root}>
      <TextField
        id="outlined-with-placeholder"
        label="Enter your message"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <Button variant="contained" color="primary" className={styles.Button}>
        Send
        <Icon className={styles.Icon}>send</Icon>
      </Button>
    </form>
  );
}
