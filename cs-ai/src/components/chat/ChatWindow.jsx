import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Typography,
  Paper,
  Avatar,
  useTheme,
  CircularProgress
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { motion, AnimatePresence } from 'framer-motion';

const Message = ({ message, isUser }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: isUser ? 'flex-end' : 'flex-start',
          mb: 2
        }}
      >
        {!isUser && (
          <Avatar
            sx={{
              bgcolor: '#1a365d',
              mr: 1,
              width: 32,
              height: 32
            }}
          >
            AI
          </Avatar>
        )}
        <Paper
          sx={{
            maxWidth: '70%',
            p: 2,
            bgcolor: isUser ? '#1a365d' : 'background.paper',
            color: isUser ? 'white' : '#2d4a77',
            borderRadius: 2,
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              fontFamily: theme.typography.fontFamily,
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            {message.content}
          </Typography>
          <Typography 
            variant="caption" 
            sx={{ 
              opacity: 0.7,
              display: 'block',
              mt: 0.5,
              fontFamily: theme.typography.fontFamily
            }}
          >
            {new Date(message.timestamp).toLocaleTimeString()}
          </Typography>
        </Paper>
        {isUser && (
          <Avatar
            sx={{
              ml: 1,
              bgcolor: '#2d4a77',
              width: 32,
              height: 32,
              fontFamily: theme.typography.fontFamily
            }}
          >
            U
          </Avatar>
        )}
      </Box>
    </motion.div>
  );
};

const ChatWindow = ({ agent }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const theme = useTheme();

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
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default'
      }}
    >
      {/* Chat Header */}
      <Box
        sx={{
          p: 2,
          bgcolor: 'background.paper',
          borderBottom: `1px solid ${theme.palette.divider}`,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <IconButton
          sx={{
            backgroundColor: agent.color,
            color: 'white',
            mr: 2,
            '&:hover': {
              backgroundColor: agent.color
            }
          }}
        >
          <agent.icon />
        </IconButton>
        <Box>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#1a365d',
              fontWeight: 600,
              fontFamily: theme.typography.fontFamily
            }}
          >
            {agent.name}
          </Typography>
          <Typography 
            variant="caption" 
            sx={{ 
              color: '#2d4a77',
              fontFamily: theme.typography.fontFamily
            }}
          >
            {agent.capabilities.join(' • ')}
          </Typography>
        </Box>
      </Box>

      {/* Messages Area */}
      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          p: 2,
          bgcolor: '#f8faff'
        }}
      >
        <AnimatePresence>
          {messages.map((message, index) => (
            <Message key={index} message={message} isUser={message.isUser} />
          ))}
        </AnimatePresence>
        {isTyping && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 1 }}>
            <CircularProgress size={16} sx={{ color: '#1a365d' }} />
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#2d4a77',
                fontFamily: theme.typography.fontFamily
              }}
            >
              AI is typing...
            </Typography>
          </Box>
        )}
        <div ref={messagesEndRef} />
      </Box>

      {/* Input Area */}
      <Box
        sx={{
          p: 2,
          bgcolor: 'background.paper',
          borderTop: `1px solid ${theme.palette.divider}`
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                fontFamily: theme.typography.fontFamily,
                fontSize: '0.875rem',
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1a365d'
                }
              }
            }}
          />
          <IconButton
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            sx={{
              bgcolor: '#1a365d',
              color: 'white',
              '&:hover': {
                bgcolor: '#2d4a77'
              },
              '&.Mui-disabled': {
                bgcolor: 'rgba(26, 54, 93, 0.12)'
              }
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatWindow; 