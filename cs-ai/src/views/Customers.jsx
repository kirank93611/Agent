import { Box, Container, Typography } from '@mui/material';

const Customers = () => {
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
          Customers
        </Typography>
        <Typography variant="body1">
          View and manage your customer information.
        </Typography>
      </Container>
    </Box>
  );
};

export default Customers; 