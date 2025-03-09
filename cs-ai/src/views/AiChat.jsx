import React, { useState } from 'react';
import { Box, Container, IconButton, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion, AnimatePresence } from 'framer-motion';
import AgentSelector from '../components/chat/AgentSelector';
import ChatWindow from '../components/chat/ChatWindow';

const AiChat = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const theme = useTheme();

  const handleAgentSelect = (agent) => {
    setSelectedAgent(agent);
  };

  const handleBack = () => {
    setSelectedAgent(null);
  };

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <AnimatePresence mode="wait">
        {!selectedAgent ? (
          <motion.div
            key="selector"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            style={{ height: '100%' }}
          >
            <AgentSelector onSelect={handleAgentSelect} />
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            style={{ height: '100%' }}
          >
            <Box sx={{ height: '100%', position: 'relative' }}>
              <IconButton
                onClick={handleBack}
                sx={{
                  position: 'absolute',
                  top: theme.spacing(1),
                  left: theme.spacing(1),
                  zIndex: 1,
                  bgcolor: theme.palette.background.paper,
                  boxShadow: theme.shadows[2],
                  '&:hover': {
                    bgcolor: theme.palette.background.paper
                  }
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <ChatWindow agent={selectedAgent} />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default AiChat;