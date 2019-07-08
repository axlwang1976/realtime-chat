import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">Realtime Chat</Typography>
        <Button variant="outlined" color="inherit" className={styles.button}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
