import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GoogleAuth from './GoogleAuth';
import styles from '../styles/Header.module.scss';

export default function Header({ isSignedIn, handleClick }) {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">Realtime Chat</Typography>
        <GoogleAuth
          className={styles.button}
          isSignedIn={isSignedIn}
          handleClick={handleClick}
        />
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  isSignedIn: PropTypes.bool,
  handleClick: PropTypes.func,
};
