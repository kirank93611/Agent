import React from 'react';
import ResponseBubble from './ResponseBubble';
import './MessageList.css';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}
        >
          <ResponseBubble message={message} />
        </div>
      ))}
    </div>
  );
};

export default MessageList;