import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import TopNav from './TopNav';
import Sidebar from './Sidebar';

const SIDE_NAV_WIDTH = 280;

// Styled components
const LayoutRoot = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
});

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
  paddingLeft: SIDE_NAV_WIDTH,
  [`@media (max-width: 1200px)`]: {
    paddingLeft: 0
  }
});

const DashboardLayout = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <Sidebar onClose={() => setOpenNav(false)} open={openNav} />
      <LayoutRoot>
        <LayoutContainer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 8,
              px: 4
            }}
          >
            <Outlet />
          </Box>
        </LayoutContainer>
      </LayoutRoot>
    </>
  );
};

export default DashboardLayout; 