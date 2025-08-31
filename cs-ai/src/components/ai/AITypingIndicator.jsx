import React from 'react';
import './AITypingIndicator.css';

const AITypingIndicator = () => {
  return (
    <div className="typing-root">
      <div className="typing-avatar">🤖</div>
      <div className="typing-bubble">
        <span className="typing-dot" />
        <span className="typing-dot" />
        <span className="typing-dot" />
      </div>
    </div>
  );
};

export default AITypingIndicator;