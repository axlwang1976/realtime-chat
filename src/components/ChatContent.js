import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styles from '../styles/ChatContent.module.scss';

export default function ChatContent({ chats, userName }) {
  return (
    <Paper className={styles.root}>
      {chats.length ? (
        <ul>
          {chats.map((chat, i) => (
            <li key={i}>
              <span>{`${userName} wrote:`}</span>
              <p>{chat.msg}</p>
              <span>{chat.createdTime}</span>
            </li>
          ))}
        </ul>
      ) : (
        'Start chatting...'
      )}
    </Paper>
  );
}

ChatContent.propTypes = {
  chats: PropTypes.array,
  userName: PropTypes.string,
};
