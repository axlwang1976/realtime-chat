import React, { Component } from 'react';
import Header from './Header';
import ChatContent from './ChatContent';
import ChatForm from './ChatForm';

export default class Chat extends Component {
  state = {
    chats: [],
  };

  addChat = msg => {
    const { chats } = this.state;
    const now = new Date();
    const nowString = `${now.getFullYear()}/${now.getMonth() +
      1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const newChat = { msg, createdTime: nowString };
    this.setState({ chats: [...chats, newChat] });
  };

  render() {
    const { chats } = this.state;
    return (
      <>
        <Header />
        <ChatContent chats={chats} />
        <ChatForm addChat={this.addChat} />
      </>
    );
  }
}
