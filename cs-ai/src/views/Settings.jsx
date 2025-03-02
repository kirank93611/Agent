import { Box, Container, Typography } from '@mui/material';

const Settings = () => {
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
          Settings
        </Typography>
        <Typography variant="body1">
          Manage your application settings here.
        </Typography>
      </Container>
    </Box>
  );
};

export default Settings; 