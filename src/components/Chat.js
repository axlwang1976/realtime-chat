import React, { Component } from 'react';
import Header from './Header';
import ChatContent from './ChatContent';
import ChatForm from './ChatForm';

export default class Chat extends Component {
  render() {
    return (
      <>
        <Header />
        <ChatContent />
        <ChatForm />
      </>
    );
  }
}
