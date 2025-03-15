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
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

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

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#1F2937',
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
              color="white"
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
          {[
            { text: 'Overview', icon: <DashboardIcon />, path: '/dashboard' },
            { text: 'Customers', icon: <PeopleIcon />, path: '/dashboard/customers' },
            { text: 'Account', icon: <AccountCircleIcon />, path: '/dashboard/account' },
          ].map((item) => (
            <ListItemButton
              key={item.text}
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
              <ListItemIcon sx={{ color: 'white' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                primaryTypographyProps={{
                  color: 'white',
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
            <ListItemIcon sx={{ color: 'white' }}>
              <CogIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Settings"
              primaryTypographyProps={{
                color: 'white',
                fontWeight: 'medium'
              }}
            />
            {settingsOpen ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
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
                <ListItemIcon sx={{ color: 'white' }}>
                  <CogIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="General"
                  primaryTypographyProps={{
                    color: 'white',
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
          fullWidth
          startIcon={<LogoutIcon />}
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }}
          sx={{
            backgroundColor: '#ED6C02',
            color: 'white',
            '&:hover': {
              backgroundColor: '#C55A02'
            }
          }}
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
            backgroundColor: '#1F2937',
            color: 'white',
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
          backgroundColor: '#1F2937',
          color: 'white',
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