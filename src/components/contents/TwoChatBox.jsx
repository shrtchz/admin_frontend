// import React, { useState } from 'react';
// import ChatBox from './ChatBox';

// function TwoChatBox() {
//   const [user1Messages, setUser1Messages] = useState([]);
//   const [user2Messages, setUser2Messages] = useState([]);

//   const handleUser1SendMessage = (message) => {
//     setUser2Messages([...user2Messages, { text: message, sender: "User 1" }]);
//   };

//   const handleUser2SendMessage = (message) => {
//     setUser1Messages([...user1Messages, { text: message, sender: "User 2" }]);
//   };

//   return (
//     <div className="TwoWayChatBox">
//       <ChatBox onSendMessage={handleUser1SendMessage} sender="User 1" messages={user1Messages} />
//       <ChatBox onSendMessage={handleUser2SendMessage} sender="User 2" messages={user2Messages} />
//     </div>
//   );
// }

// export default TwoChatBox;
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
