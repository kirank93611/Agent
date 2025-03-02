import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  Stack,
  useMediaQuery,
  Button,
  Divider,
  Typography,
  useTheme,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@mui/material';
import {
  BarChart as ChartBarIcon,
  Settings as CogIcon,
  Person as UserCircleIcon,
  People as UsersIcon,
  SmartToy as AgentIcon,
  ExpandLess,
  ExpandMore
} from '@mui/icons-material';
import { Logo } from './logo';

const SIDE_NAV_WIDTH = 280;

const Sidebar = ({ open, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleSettingsClick = () => {
    setSettingsOpen(!settingsOpen);
  };

  const items = [
    {
      title: 'Overview',
      path: '/dashboard',
      icon: <ChartBarIcon />
    },
    {
      title: 'Customers',
      path: '/dashboard/customers',
      icon: <UsersIcon />
    },
    {
      title: 'Agents',
      path: '/dashboard/agents',
      icon: <AgentIcon />
    }
  ];

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            display: 'inline-flex',
            height: 32,
            width: 32
          }}
        >
          <Logo />
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            borderRadius: 1,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            mt: 2,
            p: '12px'
          }}
        >
          <div>
            <Typography
              color="inherit"
              variant="subtitle1"
            >
              CS-AI
            </Typography>
            <Typography
              color="neutral.400"
              variant="body2"
            >
              Production
            </Typography>
          </div>
        </Box>
      </Box>
      <Divider sx={{ borderColor: 'neutral.700' }} />
      <Box
        component="nav"
        sx={{
          flexGrow: 1,
          px: 2,
          py: 3
        }}
      >
        <List>
          {items.map((item) => (
            <ListItemButton
              key={item.title}
              onClick={() => navigate(item.path)}
              selected={location.pathname === item.path}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                '&.Mui-selected': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)'
                },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.04)'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'neutral.400' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.title}
                primaryTypographyProps={{
                  color: 'neutral.400',
                  fontWeight: 'medium'
                }}
              />
            </ListItemButton>
          ))}
          <ListItemButton
            onClick={handleSettingsClick}
            sx={{
              borderRadius: 1,
              mb: 0.5,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.04)'
              }
            }}
          >
            <ListItemIcon sx={{ color: 'neutral.400' }}>
              <CogIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Settings"
              primaryTypographyProps={{
                color: 'neutral.400',
                fontWeight: 'medium'
              }}
            />
            {settingsOpen ? <ExpandLess sx={{ color: 'neutral.400' }} /> : <ExpandMore sx={{ color: 'neutral.400' }} />}
          </ListItemButton>
          <Collapse in={settingsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => navigate('/dashboard/settings')}
                selected={location.pathname === '/dashboard/settings'}
                sx={{
                  pl: 4,
                  borderRadius: 1,
                  mb: 0.5,
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)'
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.04)'
                  }
                }}
              >
                <ListItemIcon sx={{ color: 'neutral.400' }}>
                  <CogIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="General"
                  primaryTypographyProps={{
                    color: 'neutral.400',
                    fontWeight: 'medium'
                  }}
                />
              </ListItemButton>
              <ListItemButton
                onClick={() => navigate('/dashboard/settings/account')}
                selected={location.pathname === '/dashboard/settings/account'}
                sx={{
                  pl: 4,
                  borderRadius: 1,
                  mb: 0.5,
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)'
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.04)'
                  }
                }}
              >
                <ListItemIcon sx={{ color: 'neutral.400' }}>
                  <UserCircleIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="Account"
                  primaryTypographyProps={{
                    color: 'neutral.400',
                    fontWeight: 'medium'
                  }}
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>
      <Divider sx={{ borderColor: 'neutral.700' }} />
      <Box
        sx={{
          px: 2,
          py: 3
        }}
      >
        <Button
          color="warning"
          fullWidth
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }}
          variant="contained"
        >
          Logout
        </Button>
      </Box>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: SIDE_NAV_WIDTH
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: SIDE_NAV_WIDTH
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

export default Sidebar; 