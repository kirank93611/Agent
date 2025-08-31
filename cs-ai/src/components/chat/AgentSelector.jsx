import React from 'react';
import { motion } from 'framer-motion';
import './AgentSelector.css';
// Using lightweight emoji/icons instead of MUI icons

const agents = [
  {
    id: 'linkedin-ai',
    name: 'LinkedIn AI Agent',
    description: 'Optimize your LinkedIn profile and professional networking',
    icon: 'in',
    color: '#0A66C2',
    capabilities: ['Profile Optimization', 'Content Creation', 'Network Growth']
  },
  {
    id: 'customer-support',
    name: 'Customer Support Agent',
    description: 'Handle customer inquiries and provide instant support',
    icon: '🛟',
    color: '#1a365d',
    capabilities: ['Ticket Resolution', 'Product Support', 'FAQ Handling']
  },
  {
    id: 'social-media',
    name: 'Social Media Manager',
    description: 'Create and manage social media content',
    icon: '📣',
    color: '#2d4a77',
    capabilities: ['Content Creation', 'Engagement', 'Analytics']
  },
  {
    id: 'compliance',
    name: 'Compliance Officer',
    description: 'Ensure regulatory compliance and documentation',
    icon: '⚖️',
    color: '#1a365d',
    capabilities: ['Document Review', 'Risk Assessment', 'Audit Support']
  },
  {
    id: 'analytics',
    name: 'Analytics Expert',
    description: 'Analyze data and provide insights',
    icon: '📊',
    color: '#2d4a77',
    capabilities: ['Data Analysis', 'Reporting', 'Predictions']
  },
  {
    id: 'automation',
    name: 'Workflow Automator',
    description: 'Automate repetitive tasks and processes',
    icon: '🤖',
    color: '#1a365d',
    capabilities: ['Process Design', 'Task Automation', 'Integration']
  }
];

const AgentSelector = ({ onSelect }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="agent-selector-root">
      <div className="agent-grid">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.id}
            className="agent-card-wrap"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.06 }}
          >
            <div className="agent-card" onClick={() => onSelect(agent)}>
              <div className="agent-card-head">
                <div className="agent-icon" style={{ backgroundColor: agent.color }}>
                  {typeof agent.icon === 'string' ? (
                    <span style={{fontWeight:700}}>{agent.icon}</span>
                  ) : (
                    <span style={{fontSize:18}}>🔧</span>
                  )}
                </div>
                <div className="agent-title">{agent.name}</div>
              </div>
              <div className="agent-desc">{agent.description}</div>
              <div className="agent-tags">
                {agent.capabilities.map((capability) => (
                  <span key={capability} className="agent-tag">{capability}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AgentSelector; 