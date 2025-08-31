import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ChatWindow from '../components/chat/ChatWindow';
import AgentSelector from '../components/chat/AgentSelector';
import './views.css';

const AIChat = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [isAgentSelectorOpen, setIsAgentSelectorOpen] = useState(true);

  const handleAgentSelect = (agent) => {
    setSelectedAgent(agent);
    setIsAgentSelectorOpen(false);
  };

  return (
    <div className="view-root" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="view-header" style={{ borderBottom: '1px solid #e6eef9', padding: '12px 0' }}>
        <div className="container">
          <h3 style={{ margin: 0 }}>{selectedAgent ? selectedAgent.name : 'Select an AI Agent'}</h3>
        </div>
      </div>

      <motion.div style={{ flex: 1, overflow: 'hidden' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="container" style={{ height: '100%', display: 'flex', flexDirection: 'column', paddingTop: 8, paddingBottom: 8 }}>
          {selectedAgent ? (
            <ChatWindow agent={selectedAgent} />
          ) : (
            <div>
              <AgentSelector onSelect={handleAgentSelect} />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AIChat;