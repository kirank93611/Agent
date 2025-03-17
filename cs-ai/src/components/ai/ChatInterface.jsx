import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Paper,
  Typography,
  Avatar,
  CircularProgress,
  useTheme,
  Button,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import { Send as SendIcon, SmartToy as AIIcon, Close as CloseIcon, SupportAgent as SupportAgentIcon } from '@mui/icons-material';
import MessageList from './MessageList';
import AITypingIndicator from './AITypingIndicator';
import ResponseBubble from './ResponseBubble';
import aiService from '../../services/aiService';

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
  const theme = useTheme();

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const messageContainer = messagesEndRef.current.parentElement;
      messageContainer.scrollTop = messageContainer.scrollHeight;
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
      <Paper 
        elevation={0} 
        sx={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#f5f7fa',
          zIndex: 9999,
          p: 4,
          overflow: 'auto'
        }}
      >
        <Box sx={{ 
          maxWidth: 1200, 
          width: '100%', 
          mx: 'auto',
          mb: 6
        }}>
          {/* Top header with title and close button */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            mb: 4,
            pb: 2,
            borderBottom: '2px solid #e0e0e0'
          }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a365d' }}>
              Select an AI Agent
            </Typography>
            
            <Button
              variant="contained"
              color="primary"
              onClick={handleClose}
              startIcon={<CloseIcon />}
              size="large"
              sx={{ py: 1, px: 3 }}
            >
              Skip Selection
            </Button>
          </Box>
          
          {/* Agent cards */}
          <Grid container spacing={4}>
            {agentData.map((agent) => (
              <Grid item xs={12} sm={6} md={4} key={agent.id}>
                <Card 
                  onClick={() => handleAgentSelect(agent)}
                  sx={{ 
                    cursor: 'pointer',
                    height: '100%',
                    borderRadius: 2,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: agent.color,
                          width: 48,
                          height: 48
                        }}
                      >
                        <SupportAgentIcon />
                      </Avatar>
                      <Typography variant="h6" sx={{ ml: 2, fontWeight: 'bold' }}>
                        {agent.name}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 2, color: '#555' }}>
                      {agent.description}
                    </Typography>
                    <Button 
                      variant="outlined" 
                      fullWidth
                      sx={{ 
                        mt: 2,
                        borderColor: agent.color,
                        color: agent.color,
                        '&:hover': {
                          borderColor: agent.color,
                          backgroundColor: `${agent.color}10`
                        }
                      }}
                    >
                      Select Agent
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          {/* Bottom close button */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: 8,
            mb: 4 
          }}>
            <Button
              variant="contained"
              color="error"
              size="large"
              onClick={handleClose}
              startIcon={<CloseIcon />}
              sx={{ 
                py: 1.5, 
                px: 4,
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              CLOSE WITHOUT SELECTING
            </Button>
          </Box>
        </Box>
      </Paper>
    );
  }

  // Show chat interface if agent is selected or selector is closed
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        bgcolor: theme.palette.background.default,
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
          bgcolor: theme.palette.background.paper,
          boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            sx={{
              bgcolor: selectedAgent?.color || theme.palette.primary.main,
              width: 40,
              height: 40,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <AIIcon 
              sx={{ 
                fontSize: 24, 
                color: 'white',
                filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.1))'
              }} 
            />
          </Avatar>
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 600,
                lineHeight: 1.2
              }}
            >
              {selectedAgent?.name || 'AI Assistant'}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  bgcolor: '#4caf50',
                  display: 'inline-block'
                }}
              />
              Online
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Messages Container */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflowY: 'auto',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            '&::-webkit-scrollbar': {
              width: '8px',
              backgroundColor: 'transparent'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: theme.palette.divider,
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: theme.palette.action.hover
              }
            }
          }}
        >
          <MessageList messages={messages} />
          {isAITyping && <AITypingIndicator />}
          <div ref={messagesEndRef} />
        </Box>
      </Box>

      {/* Input Area */}
      <Paper
        component="form"
        onSubmit={handleSendMessage}
        elevation={8}
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          borderTop: `1px solid ${theme.palette.divider}`,
          bgcolor: theme.palette.background.paper,
          position: 'relative',
          zIndex: 1
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              backgroundColor: theme.palette.background.default,
              '&:hover': {
                backgroundColor: theme.palette.action.hover
              },
              '& fieldset': {
                borderColor: theme.palette.divider
              }
            }
          }}
        />
        <IconButton
          type="submit"
          disabled={!inputMessage.trim() || isAITyping}
          sx={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
              transform: 'scale(1.05)'
            },
            '&.Mui-disabled': {
              backgroundColor: theme.palette.action.disabledBackground,
              color: theme.palette.action.disabled
            },
            '& .MuiSvgIcon-root': {
              fontSize: 20,
              filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.1))'
            }
          }}
        >
          {isAITyping ? (
            <CircularProgress
              size={20}
              thickness={5}
              sx={{ color: 'inherit' }}
            />
          ) : (
            <SendIcon />
          )}
        </IconButton>
      </Paper>
    </Box>
  );
};

export default ChatInterface; 