import React, { useState } from 'react';
import { Box, Container, Typography, Dialog } from '@mui/material';
import { motion } from 'framer-motion';
import ChatWindow from '../components/chat/ChatWindow';
import AgentSelector from '../components/chat/AgentSelector';

const AIChat = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [isAgentSelectorOpen, setIsAgentSelectorOpen] = useState(true);

  const handleAgentSelect = (agent) => {
    setSelectedAgent(agent);
    setIsAgentSelectorOpen(false);
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{
        flexGrow: 1,
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.paper',
          borderBottom: 1,
          borderColor: 'divider',
          py: 2
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h6" color="text.primary">
            {selectedAgent ? selectedAgent.name : 'Select an AI Agent'}
          </Typography>
        </Container>
      </Box>
      
      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <Container
          maxWidth="lg"
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            pt: 2,
            pb: 2
          }}
        >
          {selectedAgent ? (
            <ChatWindow agent={selectedAgent} />
          ) : (
            <Dialog
              open={isAgentSelectorOpen}
              maxWidth="md"
              fullWidth
              PaperProps={{
                sx: {
                  borderRadius: 2,
                  maxHeight: '90vh'
                }
              }}
            >
              <AgentSelector onSelect={handleAgentSelect} />
            </Dialog>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default AIChat;