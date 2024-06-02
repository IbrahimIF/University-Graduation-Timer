import { Component } from 'react';
import './chatfeed.css'
class ChatFeed extends Component {
    constructor(props) {
        super(props);
    
        const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    
        this.state = {
          messages: storedMessages,
        };
    
        this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
      }
    
      handleMessageSubmit(message) {
        this.setState(
          (prevState) => ({
            messages: [...prevState.messages, message],
          }),
          () => {
            localStorage.setItem('chatMessages', JSON.stringify(this.state.messages));
          }
        );
      }

  render() {
    const { messages } = this.state;

    return (
      <div className="chat-feed">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Type your message..."
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                this.handleMessageSubmit(e.target.value);
                e.target.value = '';
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default ChatFeed;
