import { Box, Typography } from '@mui/material';

const Logo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: 'primary.main',
          fontWeight: 'bold'
        }}
      >
        CS-AI
      </Typography>
    </Box>
  );
};

export default Logo; 