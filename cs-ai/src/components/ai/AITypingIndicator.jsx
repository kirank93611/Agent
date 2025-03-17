import React from 'react';
import { Box, Paper, Avatar } from '@mui/material';
import { SmartToy as AIIcon } from '@mui/icons-material';

const AITypingIndicator = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
      <Avatar
        sx={{
          bgcolor: 'secondary.main',
          width: 32,
          height: 32
        }}
      >
        <AIIcon />
      </Avatar>
      <Paper
        elevation={1}
        sx={{
          p: 2,
          backgroundColor: 'white',
          borderRadius: 2,
          borderTopLeftRadius: 0,
          display: 'flex',
          gap: 1,
          alignItems: 'center'
        }}
      >
        <span className="typing-dot" />
        <span className="typing-dot" />
        <span className="typing-dot" />
        <style>
          {`
            @keyframes blink {
              0% { opacity: .2; }
              20% { opacity: 1; }
              100% { opacity: .2; }
            }
            .typing-dot {
              width: 8px;
              height: 8px;
              background-color: #90a4ae;
              border-radius: 50%;
              animation: blink 1.4s infinite linear;
            }
            .typing-dot:nth-child(2) { animation-delay: .2s; }
            .typing-dot:nth-child(3) { animation-delay: .4s; }
          `}
        </style>
      </Paper>
    </Box>
  );
};

export default AITypingIndicator; 