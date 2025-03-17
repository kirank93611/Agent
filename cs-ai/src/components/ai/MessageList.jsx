import React from 'react';
import { Box, Avatar } from '@mui/material';
import { SmartToy as AIIcon } from '@mui/icons-material';
import ResponseBubble from './ResponseBubble';

const MessageList = ({ messages }) => {
  return (
    <>
      {messages.map((message) => (
        <Box
          key={message.id}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 2,
            flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
          }}
        >
          <Avatar
            sx={{
              bgcolor: message.sender === 'user' ? 'primary.main' : 'secondary.main',
              width: 32,
              height: 32
            }}
          >
            {message.sender === 'user' ? 'U' : <AIIcon />}
          </Avatar>
          <ResponseBubble message={message} />
        </Box>
      ))}
    </>
  );
};

export default MessageList; 