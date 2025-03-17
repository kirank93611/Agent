import React from 'react';
import { Box, Card, CardContent, Typography, Grid, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CampaignIcon from '@mui/icons-material/Campaign';
import SecurityIcon from '@mui/icons-material/Security';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutomationIcon from '@mui/icons-material/AutoFixHigh';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const agents = [
  {
    id: 'linkedin-ai',
    name: 'LinkedIn AI Agent',
    description: 'Optimize your LinkedIn profile and professional networking',
    icon: LinkedInIcon,
    color: '#0A66C2',
    capabilities: ['Profile Optimization', 'Content Creation', 'Network Growth']
  },
  {
    id: 'customer-support',
    name: 'Customer Support Agent',
    description: 'Handle customer inquiries and provide instant support',
    icon: SupportAgentIcon,
    color: '#1a365d',
    capabilities: ['Ticket Resolution', 'Product Support', 'FAQ Handling']
  },
  {
    id: 'social-media',
    name: 'Social Media Manager',
    description: 'Create and manage social media content',
    icon: CampaignIcon,
    color: '#2d4a77',
    capabilities: ['Content Creation', 'Engagement', 'Analytics']
  },
  {
    id: 'compliance',
    name: 'Compliance Officer',
    description: 'Ensure regulatory compliance and documentation',
    icon: SecurityIcon,
    color: '#1a365d',
    capabilities: ['Document Review', 'Risk Assessment', 'Audit Support']
  },
  {
    id: 'analytics',
    name: 'Analytics Expert',
    description: 'Analyze data and provide insights',
    icon: AnalyticsIcon,
    color: '#2d4a77',
    capabilities: ['Data Analysis', 'Reporting', 'Predictions']
  },
  {
    id: 'automation',
    name: 'Workflow Automator',
    description: 'Automate repetitive tasks and processes',
    icon: AutomationIcon,
    color: '#1a365d',
    capabilities: ['Process Design', 'Task Automation', 'Integration']
  }
];

const AgentSelector = ({ onSelect }) => {
  const theme = useTheme();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box sx={{ p: 3, bgcolor: 'background.default' }}>
      <Grid container spacing={3}>
        {agents.map((agent, index) => (
          <Grid item xs={12} sm={6} md={4} key={agent.id}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <Card
                sx={{
                  cursor: 'pointer',
                  height: '100%',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  bgcolor: 'background.paper',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    borderColor: agent.color
                  }
                }}
                onClick={() => onSelect(agent)}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2
                    }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: agent.color,
                        color: 'white',
                        '&:hover': {
                          backgroundColor: agent.color
                        }
                      }}
                    >
                      <agent.icon />
                    </IconButton>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        ml: 2,
                        color: '#1a365d',
                        fontWeight: 600,
                        fontFamily: theme.typography.fontFamily
                      }}
                    >
                      {agent.name}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 2,
                      color: '#2d4a77',
                      fontFamily: theme.typography.fontFamily
                    }}
                  >
                    {agent.description}
                  </Typography>
                  <Box>
                    {agent.capabilities.map((capability) => (
                      <Typography
                        key={capability}
                        variant="caption"
                        sx={{
                          display: 'inline-block',
                          bgcolor: `${agent.color}15`,
                          color: agent.color,
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          mr: 1,
                          mb: 1,
                          fontFamily: theme.typography.fontFamily,
                          fontWeight: 500
                        }}
                      >
                        {capability}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AgentSelector; 