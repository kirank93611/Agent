import React from 'react';
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  Tooltip,
  useMediaQuery,
  AppBar,
  Toolbar,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  Notifications as BellIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Person as UserCircleIcon,
} from '@mui/icons-material';

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

const TopNav = ({ onNavOpen }) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <AppBar
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        left: {
          lg: `${SIDE_NAV_WIDTH}px`
        },
        width: {
          lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
        }
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          px: 2
        }}
      >
        <IconButton
          onClick={onNavOpen}
          sx={{
            display: {
              xs: 'inline-flex',
              lg: 'none'
            }
          }}
        >
          <MenuIcon />
        </IconButton>
        <Tooltip title="Search">
          <IconButton sx={{ ml: 1 }}>
            <SearchIcon />
          </IconButton>
        </Tooltip>
        <Box sx={{ flexGrow: 1 }} />
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
        >
          <Tooltip title="Notifications">
            <IconButton>
              <Badge
                badgeContent={4}
                color="success"
                variant="dot"
              >
                <BellIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Avatar
            sx={{
              cursor: 'pointer',
              height: 40,
              width: 40,
              backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            }}
          >
            <UserCircleIcon />
          </Avatar>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav; 