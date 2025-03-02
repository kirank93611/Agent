import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const LoadingScreen = React.memo(() => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      bgcolor: 'background.default'
    }}
  >
    <CircularProgress color="primary" />
  </Box>
));

export default LoadingScreen; 