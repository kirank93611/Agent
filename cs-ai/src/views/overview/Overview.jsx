import { Box, Container, Typography } from '@mui/material';
import CardInvertedColors from "./dashboard-card/CardBox";
import CardBox from './dashboard-card/CardBox';
import ChatbotIcon from '../../components/chatbot/ChatbotIcon';

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
        <CardBox></CardBox>
      </Container>
    </Box>
  );
};

export default Overview;
