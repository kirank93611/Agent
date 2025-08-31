import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ChatWindow.css';

const Message = ({ message, isUser }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className={`cw-message-row ${isUser ? 'cw-right' : 'cw-left'}`}>
        {!isUser && <div className="cw-avatar">AI</div>}

        <div className={`cw-bubble ${isUser ? 'cw-bubble-user' : 'cw-bubble-ai'}`}>
          <div className="cw-message-content">{message.content}</div>
          <div className="cw-message-time">{new Date(message.timestamp).toLocaleTimeString()}</div>
        </div>

        {isUser && <div className="cw-avatar cw-avatar-user">U</div>}
      </div>
    </motion.div>
  );
};

const ChatWindow = ({ agent }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (agent) {
      setMessages([
        {
          content: `Hello! I'm your ${agent.name}. ${agent.description} How can I help you today?`,
          timestamp: new Date(),
          isUser: false
        }
      ]);
    }
  }, [agent]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      content: input,
      timestamp: new Date(),
      isUser: true
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = {
        content: generateResponse(input, agent),
        timestamp: new Date(),
        isUser: false
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (input, agent) => {
    const responses = {
      'customer-support': 'I understand your concern. Let me help you with that...',
      'social-media': 'I can help you create engaging content for your social media...',
      'compliance': 'Let me review that for compliance requirements...',
      'analytics': 'Based on the data analysis...',
      'automation': 'I can help automate that workflow for you...'
    };
    return responses[agent.id] || 'I\'m processing your request...';
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
  <div className="cw-root">
      {/* Chat Header */}
      <div className="cw-header">
        <div className="cw-agent-icon" style={{ backgroundColor: agent.color }}>{agent.icon ? agent.icon : '🤖'}</div>
        <div>
          <div className="cw-agent-name">{agent.name}</div>
          <div className="cw-agent-capabilities">{agent.capabilities?.join(' • ')}</div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="cw-messages">
        <AnimatePresence>
          {messages.map((message, index) => (
            <Message key={index} message={message} isUser={message.isUser} />
          ))}
        </AnimatePresence>

        {isTyping && (
          <div className="cw-typing">
            <div className="cw-spinner" />
            <div className="cw-typing-text">AI is typing...</div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="cw-input">
        <textarea
          className="cw-textarea"
          rows={2}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />

        <button
          className={`cw-send-btn ${!input.trim() || isTyping ? 'disabled' : ''}`}
          onClick={handleSend}
          disabled={!input.trim() || isTyping}
          aria-label="Send message"
          type="button"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatWindow; 