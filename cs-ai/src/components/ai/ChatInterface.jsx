import React, { useState, useRef, useEffect } from 'react';
import MessageList from './MessageList';
import AITypingIndicator from './AITypingIndicator';
import ResponseBubble from './ResponseBubble';
import aiService from '../../services/aiService';
import './ChatInterface.css';
// lightweight icon placeholders (no MUI icons)
const MenuIcon = () => <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>;
const CloseIcon = () => <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71L12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.71 2.88 18.3 9.18 12 2.88 5.71 4.29 4.29 10.59 10.6 16.88 4.29z"/></svg>;
const SendIcon = () => <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>;
const SupportAgentIcon = () => <span>🛟</span>;
const AIIcon = () => <span>🤖</span>;

// Simplified agent data
const agentData = [
  {
    id: 'customer-support',
    name: 'Customer Support Agent',
    description: 'Handle customer inquiries and provide instant support',
    color: '#1a365d',
  },
  {
    id: 'social-media',
    name: 'Social Media Manager',
    description: 'Create and manage social media content',
    color: '#2d4a77',
  },
  {
    id: 'analytics',
    name: 'Analytics Expert',
    description: 'Analyze data and provide insights',
    color: '#1a365d',
  }
];

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isAITyping, setIsAITyping] = useState(false);
  const [isAgentSelectorOpen, setIsAgentSelectorOpen] = useState(true);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const messageContainer = messagesEndRef.current.closest('.ci-messages');
      if (messageContainer) messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const loadHistory = async () => {
      if (selectedAgent) {
        try {
          const history = await aiService.getHistory('current-user');
          setMessages(history);
        } catch (error) {
          console.error('Error loading history:', error);
        }
      }
    };
    loadHistory();
  }, [selectedAgent]);

  const handleAgentSelect = (agent) => {
    setSelectedAgent(agent);
    setIsAgentSelectorOpen(false);
  };

  const handleClose = () => {
    // Just closing the selector without selecting an agent
    setIsAgentSelectorOpen(false);
    // Use a default agent if needed
    setSelectedAgent(agentData[0]);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || !selectedAgent) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsAITyping(true);

    try {
      const response = await aiService.getResponse('current-user', inputMessage);
      const aiResponse = {
        id: Date.now() + 1,
        text: response.message,
        sender: 'ai',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, aiResponse]);
      
      await aiService.storeConversation('current-user', {
        messages: [...messages, userMessage, aiResponse]
      });
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "Sorry, I encountered an error. Please try again.",
        sender: 'ai',
        timestamp: new Date().toISOString(),
        isError: true
      }]);
    } finally {
      setIsAITyping(false);
    }
  };

  // Show agent selector if no agent is selected and the selector is open
  if (!selectedAgent && isAgentSelectorOpen) {
    return (
      <div className="ci-selector-root">
        <div className="ci-selector-inner">
          <header className="ci-selector-header">
            <h2>Select an AI Agent</h2>
            <button className="ci-close-btn" onClick={handleClose} aria-label="Skip selection">Skip</button>
          </header>

          <div className="ci-agent-grid">
            {agentData.map((agent) => (
              <div className="ci-agent-card" key={agent.id} onClick={() => handleAgentSelect(agent)}>
                <div className="ci-agent-top">
                  <div className="ci-avatar" style={{ backgroundColor: agent.color }}>
                    <SupportAgentIcon />
                  </div>
                  <div className="ci-agent-name">{agent.name}</div>
                </div>
                <p className="ci-agent-desc">{agent.description}</p>
                <button className="ci-select-btn">Select Agent</button>
              </div>
            ))}
          </div>

          <div className="ci-selector-footer">
            <button className="ci-cancel-btn" onClick={handleClose}>CLOSE WITHOUT SELECTING</button>
          </div>
        </div>
      </div>
    );
  }

  // Show chat interface if agent is selected or selector is closed
  return (
    <div className="ci-root">
      {/* Header */}
      <header className="ci-header">
        <div className="ci-header-left">
          <div className="ci-avatar-large" style={{ backgroundColor: selectedAgent?.color || '#1a365d' }}>
            <AIIcon style={{ color: '#fff' }} />
          </div>
          <div>
            <div className="ci-title">{selectedAgent?.name || 'AI Assistant'}</div>
            <div className="ci-status">● Online</div>
          </div>
        </div>
      </header>

      {/* Messages Container */}
      <div className="ci-messages-root">
        <div className="ci-messages">
          <MessageList messages={messages} />
          {isAITyping && <AITypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <form className="ci-input" onSubmit={handleSendMessage}>
        <textarea
          className="ci-textarea"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button className={`ci-send ${!inputMessage.trim() || isAITyping ? 'disabled' : ''}`} type="submit" disabled={!inputMessage.trim() || isAITyping}>
          {isAITyping ? <span className="ci-spinner" /> : <SendIcon />}
        </button>
      </form>
    </div>
  );
};

export default ChatInterface; 