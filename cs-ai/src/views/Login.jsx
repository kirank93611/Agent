import { Box, Button, Container, TextField, Typography, useTheme, useMediaQuery, Stack, Divider } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import WorkflowDiagram from '../components/common/WorkflowDiagram';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: '100vh',
        maxHeight: '100vh',
        overflow: 'hidden',
        bgcolor: 'background.paper',
        position: 'relative'
      }}
    >
      {/* Workflow Diagram Section - Hidden on mobile */}
      <Box
        sx={{
          flex: { xs: '1', md: '2' },
          position: 'relative',
          display: { xs: 'none', md: 'flex' },
          minHeight: '100vh',
          maxHeight: '100vh',
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#ffffff'
        }}
      >
        <WorkflowDiagram />
      </Box>

      {/* Login Form Section */}
      <Box
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        sx={{
          flex: { xs: '1', md: '0.8' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: { xs: 3, sm: 6, md: 8 },
          background: 'linear-gradient(45deg, #f5f9ff 30%, #e6f0ff 90%)',
          overflow: 'auto',
          position: 'relative',
          zIndex: 2,
          width: { xs: '100%', md: 'auto' },
          boxShadow: { md: '-30px 0 30px -25px rgba(0,0,0,0.1)' }
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: '#1a365d',
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 2
              }}
            >
              Welcome to AI Ops
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#2d4a77',
                fontSize: { xs: '1rem', md: '1.25rem' },
                mb: 3,
                fontWeight: 500
              }}
            >
              Sign in to access your AI-powered operations platform
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              variant="outlined"
              sx={{ 
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#2d4a77',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1a365d',
                  },
                }
              }}
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              variant="outlined"
              sx={{ 
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#2d4a77',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1a365d',
                  },
                }
              }}
            />
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              sx={{
                py: 1.5,
                mt: 1,
                bgcolor: '#2d4a77',
                color: 'white',
                '&:hover': {
                  bgcolor: '#1a365d',
                },
                fontSize: '1rem',
                textTransform: 'none',
                mb: 3
              }}
            >
              Sign In to Dashboard
            </Button>
          </form>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: '#2d4a77' }}>
              What We Automate
            </Typography>
          </Divider>

          <Stack spacing={2} sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#2d4a77' }}>
              📈 95%+ Support CSAT Achievement
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#2d4a77' }}>
              🔍 Compliance Vetting & Documentation
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#2d4a77' }}>
              🚀 Customer Onboarding & Support
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#2d4a77' }}>
              ⚡ Operational Task Management
            </Typography>
          </Stack>

          <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
            <Typography variant="body2" sx={{ color: '#1a365d', fontWeight: 500 }}>
              "From manual operations to AI-powered efficiency"
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', mt: 1, color: '#2d4a77' }}>
              Join companies achieving operational excellence with AI Ops
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Login; 