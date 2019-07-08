import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default function GoogleAuth({ isSignedIn, handleClick }) {
  return (
    <Button variant="outlined" color="inherit" onClick={handleClick}>
      {isSignedIn ? 'Log out' : 'Log in'}
    </Button>
  );
}

GoogleAuth.propTypes = {
  isSignedIn: PropTypes.bool,
  handleClick: PropTypes.func,
};
