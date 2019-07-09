import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styles from '../styles/ChatContent.module.scss';

export default function ChatContent({ chats, userId }) {
  return (
    <Paper className={styles.root}>
      {chats.length ? (
        <ul>
          {chats.map((chat, i) => {
            const chatClassName =
              chat.id === userId ? styles.chatSelf : styles.chatOther;
            return (
              <li key={i} className={`${styles.chat} ${chatClassName}`}>
                <p>{chat.msg}</p>
                <span>{chat.createdTime}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        'Start chatting...'
      )}
    </Paper>
  );
}

ChatContent.propTypes = {
  chats: PropTypes.array,
  userId: PropTypes.string,
};
