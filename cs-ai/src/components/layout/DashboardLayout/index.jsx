import { useState, useEffect } from 'react';
import { Box, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const SIDE_NAV_WIDTH = 280;
const MOBILE_BREAKPOINT = 'lg';

const DashboardLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(MOBILE_BREAKPOINT));
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

  // Handle responsive state changes
  useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          marginLeft: {
            xs: 0,
            [MOBILE_BREAKPOINT]: isSidebarOpen ? `${SIDE_NAV_WIDTH}px` : 0
          },
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            onClick={() => setIsSidebarOpen(true)}
            sx={{
              position: 'fixed',
              left: 16,
              top: 16,
              zIndex: theme.zIndex.appBar - 1,
              bgcolor: 'background.paper',
              boxShadow: 1,
              '&:hover': {
                bgcolor: 'background.paper',
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        {/* Content Area */}
        <Box
          sx={{
            flexGrow: 1,
            p: {
              xs: 2,
              sm: 3,
              md: 4
            },
            pt: {
              xs: 8,
              [MOBILE_BREAKPOINT]: 4
            },
            width: '100%',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout; 