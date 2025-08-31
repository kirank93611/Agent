import React from 'react';
import './ResponseBubble.css';

const ResponseBubble = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`response-row ${isUser ? 'user' : 'ai'}`}>
      <div className="bubble">
        <div className="bubble-text">{message.text}</div>
        <div className="bubble-time">{new Date(message.timestamp).toLocaleTimeString()}</div>
      </div>
    </div>
  );
};

export default ResponseBubble;