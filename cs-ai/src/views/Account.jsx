import { Box, Container, Typography } from '@mui/material';

const Account = () => {
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
          Account Settings
        </Typography>
        <Typography variant="body1">
          Manage your account preferences and personal information.
        </Typography>
      </Container>
    </Box>
  );
};

export default Account; 