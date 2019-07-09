import React, { Component } from 'react';
import Header from './Header';
import ChatContent from './ChatContent';
import ChatForm from './ChatForm';

export default class Chat extends Component {
  state = {
    chats: JSON.parse(localStorage.getItem('chats')) || [],
    isSignedIn: null,
    userId: null,
  };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '630500604450-2bodr728kpukmk8hm9b291ot595op3rv.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
          this.auth.currentUser.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () =>
    this.setState({
      isSignedIn: this.auth.isSignedIn.get(),
      userId: this.auth.currentUser.get().getId(),
    });

  handleClick = () => {
    const { isSignedIn } = this.state;
    if (isSignedIn) {
      this.auth.signOut();
    } else {
      this.auth.signIn();
    }
  };

  syncLocalStorage = () => {
    const { chats } = this.state;
    localStorage.setItem('chats', JSON.stringify(chats));
  };

  addChat = msg => {
    const { chats, userId } = this.state;
    const now = new Date();
    const nowString = `${now.getFullYear()}/${now.getMonth() +
      1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const newChat = { msg, createdTime: nowString, userId };
    this.setState({ chats: [...chats, newChat] }, this.syncLocalStorage);
  };

  render() {
    const { chats, isSignedIn, userId } = this.state;
    return (
      <>
        <Header isSignedIn={isSignedIn} handleClick={this.handleClick} />
        <ChatContent chats={chats} userId={userId} />
        <ChatForm addChat={this.addChat} isSignedIn={isSignedIn} />
      </>
    );
  }
}
