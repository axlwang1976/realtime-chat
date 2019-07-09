import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import styles from '../styles/ChatForm.module.scss';

export default class ChatForm extends Component {
  state = { msg: '' };

  handleChange = e => this.setState({ msg: e.target.value });

  handleSubmit = e => {
    const { addChat } = this.props;
    const { msg } = this.state;
    e.preventDefault();
    addChat(msg);
    this.setState({ msg: '' });
  };

  render() {
    const { msg } = this.state;
    const { isSignedIn } = this.props;
    return (
      <form className={styles.root} onSubmit={this.handleSubmit}>
        <TextField
          id="outlined-with-placeholder"
          label="Enter your message"
          margin="normal"
          variant="outlined"
          fullWidth
          onChange={this.handleChange}
          value={msg}
          name="msg"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.Button}
          disabled={!isSignedIn}
        >
          Send
          <Icon className={styles.Icon}>send</Icon>
        </Button>
      </form>
    );
  }
}

ChatForm.propTypes = {
  addChat: PropTypes.func,
  isSignedIn: PropTypes.bool,
};
