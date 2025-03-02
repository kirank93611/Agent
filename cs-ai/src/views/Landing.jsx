import { Box, Container, Typography, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import WorkflowDiagram from '../components/common/WorkflowDiagram';

const Landing = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const features = [
    {
      title: "Support Excellence",
      description: "Achieve 95%+ CSAT scores with AI-powered support automation",
      metrics: ["24/7 Support Coverage", "80% Faster Response Times", "Automated Ticket Routing"],
      icon: "🎯"
    },
    {
      title: "Compliance Automation",
      description: "Streamline compliance processes and documentation",
      metrics: ["Automated Audits", "Real-time Compliance Checks", "Documentation Generation"],
      icon: "🔒"
    },
    {
      title: "Operations Management",
      description: "Transform manual operations into efficient automated workflows",
      metrics: ["Process Automation", "Resource Optimization", "Performance Analytics"],
      icon: "⚡"
    }
  ];

  const benefitSections = [
    {
      title: "Enhanced Employee Focus",
      description: "Free your team from repetitive tasks, allowing them to focus on strategic initiatives and innovation.",
      points: [
        "Reduce manual task load by 80%",
        "Increase productive hours by 60%",
        "Enable focus on high-impact projects"
      ],
      icon: "🚀"
    },
    {
      title: "Accelerated Growth",
      description: "Drive business growth through efficient operations and superior customer experience.",
      points: [
        "Faster market response",
        "Improved customer satisfaction",
        "Reduced operational costs"
      ],
      icon: "📈"
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      bgcolor: 'background.default',
      overflow: 'auto'
    }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a365d 0%, #2d4a77 100%)',
          color: 'white',
          pt: { xs: 8, md: 12 },
          pb: { xs: 10, md: 14 }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 3
                  }}
                >
                  Transform Your Operations with AI
                </Typography>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 400,
                    mb: 4,
                    opacity: 0.9
                  }}
                >
                  Automate support, compliance, and operations while achieving unprecedented efficiency and growth
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/login')}
                  sx={{
                    bgcolor: 'white',
                    color: '#1a365d',
                    fontSize: '1.1rem',
                    py: 1.5,
                    px: 4,
                    '&:hover': {
                      bgcolor: '#f0f7ff',
                    }
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={scaleIn}
              >
                <WorkflowDiagram />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <Typography 
            variant="h3" 
            align="center" 
            sx={{ 
              mb: 8,
              color: '#1a365d',
              fontWeight: 700
            }}
          >
            Full-Stack Automation Suite
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={fadeInUp}>
                  <Box
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 2,
                      bgcolor: 'white',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    <Typography variant="h1" sx={{ mb: 2, fontSize: '3rem' }}>
                      {feature.icon}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 2, color: '#1a365d', fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography sx={{ mb: 3, color: '#2d4a77' }}>
                      {feature.description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {feature.metrics.map((metric, idx) => (
                        <Typography 
                          component="li" 
                          key={idx}
                          sx={{ 
                            mb: 1,
                            color: '#2d4a77',
                            '&::marker': {
                              color: '#1a365d'
                            }
                          }}
                        >
                          {metric}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Benefits Section */}
      <Box sx={{ bgcolor: '#f8faff', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <Typography 
              variant="h3" 
              align="center" 
              sx={{ 
                mb: 8,
                color: '#1a365d',
                fontWeight: 700
              }}
            >
              Empower Your Business Growth
            </Typography>
            <Grid container spacing={6}>
              {benefitSections.map((benefit, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Box
                      sx={{
                        p: 4,
                        borderRadius: 2,
                        bgcolor: 'white',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
                      }}
                    >
                      <Typography variant="h1" sx={{ mb: 2, fontSize: '3rem' }}>
                        {benefit.icon}
                      </Typography>
                      <Typography variant="h5" sx={{ mb: 2, color: '#1a365d', fontWeight: 600 }}>
                        {benefit.title}
                      </Typography>
                      <Typography sx={{ mb: 3, color: '#2d4a77' }}>
                        {benefit.description}
                      </Typography>
                      <Box component="ul" sx={{ pl: 2 }}>
                        {benefit.points.map((point, idx) => (
                          <Typography 
                            component="li" 
                            key={idx}
                            sx={{ 
                              mb: 1,
                              color: '#2d4a77',
                              '&::marker': {
                                color: '#1a365d'
                              }
                            }}
                          >
                            {point}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          background: 'linear-gradient(135deg, #1a365d 0%, #2d4a77 100%)',
          color: 'white'
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 3,
                fontWeight: 700
              }}
            >
              Ready to Transform Your Operations?
            </Typography>
            <Typography 
              sx={{ 
                mb: 4,
                opacity: 0.9,
                fontSize: '1.1rem'
              }}
            >
              Join forward-thinking companies achieving operational excellence with AI
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/login')}
              sx={{
                bgcolor: 'white',
                color: '#1a365d',
                fontSize: '1.1rem',
                py: 1.5,
                px: 4,
                '&:hover': {
                  bgcolor: '#f0f7ff',
                }
              }}
            >
              Start Your Transformation
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Landing; 