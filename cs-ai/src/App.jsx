import React, { Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Suspense 
      fallback={
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <Outlet />
    </Suspense>
  );
}

export default App; 