import { Box, Container, Typography } from '@mui/material';

const Agents = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          AI Agents
        </Typography>
        <Typography variant="body1">
          Manage and monitor your AI agents.
        </Typography>
      </Container>
    </Box>
  );
};

export default Agents; 