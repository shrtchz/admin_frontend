import React, {useState} from 'react'
import '../../styles/dashboard.css'
const ChatBox = () => {
    const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };
  return (
 
          <div className="ChatBox">
      <div className="ChatBox-messages">
        {messages.map((message, index) => (
          <div key={index} className="ChatBox-message">
            {message}
          </div>
        ))}
      </div>
      <div className="ChatBox-input">
        <input
          type="text"
          value={newMessage}
          onChange={handleNewMessage}
          placeholder="Type your message here..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  )
}

export default ChatBox