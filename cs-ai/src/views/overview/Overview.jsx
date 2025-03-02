import { Box, Container, Typography } from '@mui/material';

const Overview = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4" gutterBottom>
          Dashboard Overview
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Welcome to your dashboard. Here you can manage your AI agents and monitor their performance.
        </Typography>
      </Container>
    </Box>
  );
};

export default Overview;
