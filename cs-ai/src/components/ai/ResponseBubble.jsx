import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const ResponseBubble = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <Box
      sx={{
        maxWidth: '70%',
        alignSelf: isUser ? 'flex-end' : 'flex-start'
      }}
    >
      <Paper
        elevation={1}
        sx={{
          p: 2,
          backgroundColor: isUser ? 'primary.main' : 'white',
          color: isUser ? 'white' : 'text.primary',
          borderRadius: 2,
          borderTopLeftRadius: !isUser ? 0 : 2,
          borderTopRightRadius: isUser ? 0 : 2,
        }}
      >
        <Typography variant="body1">{message.text}</Typography>
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mt: 0.5,
            color: isUser ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
            textAlign: isUser ? 'right' : 'left'
          }}
        >
          {new Date(message.timestamp).toLocaleTimeString()}
        </Typography>
      </Paper>
    </Box>
  );
};

export default ResponseBubble; 