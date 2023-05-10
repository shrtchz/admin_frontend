import React, { useState } from 'react';
import ChatBox from './ChatBox';

function SenderReceiverChatBox() {
  const [senderMessages, setSenderMessages] = useState([]);
  const [receiverMessages, setReceiverMessages] = useState([]);

  const handleSenderSendMessage = (message) => {
    setReceiverMessages([...receiverMessages, message]);
  };

  const handleReceiverSendMessage = (message) => {
    setSenderMessages([...senderMessages, message]);
  };

  return (
    <div className="SenderReceiverChatBox">
      <ChatBox onSendMessage={handleSenderSendMessage} sender="Sender" messages={senderMessages} />
      <ChatBox
        onSendMessage={handleReceiverSendMessage}
        sender="Receiver"
        messages={receiverMessages}
      />
    </div>
  );
}

export default SenderReceiverChatBox;
