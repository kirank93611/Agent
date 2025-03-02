import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography,
  Switch,
  FormControlLabel
} from '@mui/material';

import { SmartToy as AgentIcon } from '@mui/icons-material';

const agents = [
  {
    id: 1,
    name: 'Customer Service Agent',
    description: 'AI agent trained to handle customer inquiries and support tickets.',
    isActive: true,
    stats: {
      conversations: '2.4k',
      accuracy: '98%',
      responseTime: '< 30s'
    }
  },
  {
    id: 2,
    name: 'Sales Assistant',
    description: 'AI agent that helps qualify leads and assists with sales processes.',
    isActive: false,
    stats: {
      conversations: '1.2k',
      accuracy: '95%',
      responseTime: '< 45s'
    }
  },
  {
    id: 3,
    name: 'Data Analyst',
    description: 'AI agent that analyzes data and provides business insights.',
    isActive: true,
    stats: {
      conversations: '856',
      accuracy: '99%',
      responseTime: '< 60s'
    }
  }
];

const Agents = () => {
  const handleToggleAgent = (agentId) => {
    // Handle agent activation/deactivation
    console.log('Toggle agent:', agentId);
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4">
            AI Agents
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ mt: 1 }}
            variant="body1"
          >
            Manage your AI agents and their configurations
          </Typography>
        </Box>
        <Grid
          container
          spacing={4}
        >
          {agents.map((agent) => (
            <Grid
              item
              key={agent.id}
              md={4}
              xs={12}
            >
              <Card>
                <CardHeader
                  avatar={
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48,
                        height: 48,
                        backgroundColor: 'primary.lighter',
                        borderRadius: 1,
                        color: 'primary.main'
                      }}
                    >
                      <AgentIcon />
                    </Box>
                  }
                  title={agent.name}
                  subheader={
                    <FormControlLabel
                      control={
                        <Switch
                          checked={agent.isActive}
                          onChange={() => handleToggleAgent(agent.id)}
                          color="primary"
                        />
                      }
                      label={agent.isActive ? 'Active' : 'Inactive'}
                    />
                  }
                />
                <Divider />
                <CardContent>
                  <Typography
                    color="text.secondary"
                    variant="body2"
                  >
                    {agent.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Typography variant="subtitle2">Conversations</Typography>
                        <Typography color="text.secondary" variant="body2">
                          {agent.stats.conversations}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="subtitle2">Accuracy</Typography>
                        <Typography color="text.secondary" variant="body2">
                          {agent.stats.accuracy}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="subtitle2">Response Time</Typography>
                        <Typography color="text.secondary" variant="body2">
                          {agent.stats.responseTime}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
                <Divider />
                <CardActions>
                  <Button
                    fullWidth
                    variant="text"
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Agents; 