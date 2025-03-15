import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '../src/routes/index.jsx';
import { Box, CircularProgress } from '@mui/material';

function App() {
  const content = useRoutes(routes);

  return (
    <Suspense fallback={
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
    }>
      {content}
    </Suspense>
  );
}

export default App; 