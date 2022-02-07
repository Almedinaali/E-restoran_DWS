import React, { Component } from 'react';
import { HubConnectionBuilder } from '@aspnet/signalr';
import QueryString from 'querystring';


class Chat extends Component {


  constructor(props) {
    super(props);

    
    this.state = {
      nick: '',
      message: '',
      messages: [],
      hubConnection: new HubConnectionBuilder().withUrl("https://localhost:44342/chat").build()
    };
  }

  componentDidMount() {
      let self = this;
      this.setState({ nick: localStorage.getItem("nick") });
      
      this.state.hubConnection.start().then(() => console.log("Conected!"));
      this.state.hubConnection.on("ReceiveMessage", (user, message) => {
        
          self.setState({ 
              messages: [...self.state.messages, `${user}:  ${message}`]
            });
      })
  }

  sendMessage =(e) => {
      e.preventDefault();
      this.state.hubConnection.invoke("SendMessage", this.state.nick, this.state.message);
      this.setState({ message: "" });
  }

      render() {
        return (
          <div>
            <br />
            <form onSubmit={this.sendMessage}>
            <input
              required
              type="text"
              value={this.state.message}
              onChange={e => this.setState({ message: e.target.value })}
            />
      
            <button>Send</button>
            </form>
            <div>
              {this.state.messages.map((message, index) => (
                <span style={{display: 'block'}} key={index}> {message} </span>
              ))}
            </div>
          </div>
        );
      }
}

export default Chat;