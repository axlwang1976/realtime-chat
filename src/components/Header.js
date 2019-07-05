import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">Realtime Chat</Typography>
      </Toolbar>
    </AppBar>
  );
}
