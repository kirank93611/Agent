import { motion } from 'framer-motion';
import { Box, useTheme, useMediaQuery } from '@mui/material';

const WorkflowDiagram = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, sm: 4, md: 6 },
        position: 'relative'
      }}
    >
      <motion.svg
        viewBox="0 0 1000 800"
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '1000px'
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Enhanced Background gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f0f7ff', stopOpacity: 0.9 }} />
            <stop offset="50%" style={{ stopColor: '#e6f0ff', stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: '#dde9ff', stopOpacity: 0.9 }} />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.2"/>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#bgGradient)" rx="20" />

        {/* Title */}
        <motion.text
          x="500"
          y="80"
          textAnchor="middle"
          fill="#1a365d"
          fontSize="24"
          fontWeight="bold"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          AI-Powered Customer Support Workflow
        </motion.text>

        {/* Input Node */}
        <motion.circle
          cx="200"
          cy="300"
          r="70"
          fill="#2d4a77"
          filter="url(#shadow)"
          variants={nodeVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.text
          x="200"
          y="290"
          textAnchor="middle"
          fill="white"
          fontSize="16"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Support
        </motion.text>
        <motion.text
          x="200"
          y="310"
          textAnchor="middle"
          fill="white"
          fontSize="16"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Requests
        </motion.text>

        {/* AI Processing Node */}
        <motion.circle
          cx="500"
          cy="300"
          r="80"
          fill="#1a365d"
          filter="url(#shadow)"
          variants={nodeVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        />
        <motion.text
          x="500"
          y="285"
          textAnchor="middle"
          fill="white"
          fontSize="18"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          AI Agent
        </motion.text>
        <motion.text
          x="500"
          y="315"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          Smart Processing
        </motion.text>

        {/* Output Node */}
        <motion.circle
          cx="800"
          cy="300"
          r="70"
          fill="#2d4a77"
          filter="url(#shadow)"
          variants={nodeVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        />
        <motion.text
          x="800"
          y="290"
          textAnchor="middle"
          fill="white"
          fontSize="16"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Automated
        </motion.text>
        <motion.text
          x="800"
          y="310"
          textAnchor="middle"
          fill="white"
          fontSize="16"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Resolution
        </motion.text>

        {/* Enhanced Connecting Lines */}
        <motion.path
          d="M 270 300 C 350 300, 380 300, 420 300"
          stroke="#2d4a77"
          strokeWidth="4"
          fill="none"
          filter="url(#shadow)"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M 580 300 C 650 300, 680 300, 730 300"
          stroke="#2d4a77"
          strokeWidth="4"
          fill="none"
          filter="url(#shadow)"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        />

        {/* Input Examples */}
        <motion.g
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <text x="200" y="420" textAnchor="middle" fill="#1a365d" fontSize="14" fontWeight="bold">
            Incoming Requests
          </text>
          <text x="200" y="450" textAnchor="middle" fill="#2d4a77" fontSize="13">
            • Technical Issues
          </text>
          <text x="200" y="470" textAnchor="middle" fill="#2d4a77" fontSize="13">
            • Product Questions
          </text>
          <text x="200" y="490" textAnchor="middle" fill="#2d4a77" fontSize="13">
            • Account Support
          </text>
          <text x="200" y="510" textAnchor="middle" fill="#2d4a77" fontSize="13">
            • Feature Requests
          </text>
        </motion.g>

        {/* AI Capabilities */}
        <motion.g
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2 }}
        >
          <text x="500" y="420" textAnchor="middle" fill="#1a365d" fontSize="14" fontWeight="bold">
            AI Processing
          </text>
          <text x="500" y="450" textAnchor="middle" fill="#2d4a77" fontSize="13">
            • Intent Classification
          </text>
          <text x="500" y="470" textAnchor="middle" fill="#2d4a77" fontSize="13">
            • Knowledge Base Search
          </text>
          <text x="500" y="490" textAnchor="middle" fill="#2d4a77" fontSize="13">
            • Response Generation
          </text>
          <text x="500" y="510" textAnchor="middle" fill="#2d4a77" fontSize="13">
            • Sentiment Analysis
          </text>
          <text x="500" y="530" textAnchor="middle" fill="#2d4a77" fontSize="13">
            • Priority Assignment
          </text>
        </motion.g>

        {/* Outcomes */}
        <motion.g
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <text x="800" y="420" textAnchor="middle" fill="#1a365d" fontSize="14" fontWeight="bold">
            Business Impact
          </text>
          <text x="800" y="450" textAnchor="middle" fill="#2d4a77" fontSize="13">
            • 95%+ CSAT Score
          </text>
          <text x="800" y="470" textAnchor="middle" fill="#2d4a77" fontSize="13">
            • 24/7 Support
          </text>
          <text x="800" y="490" textAnchor="middle" fill="#2d4a77" fontSize="13">
            • 80% Faster Response
          </text>
          <text x="800" y="510" textAnchor="middle" fill="#2d4a77" fontSize="13">
            • Cost Reduction
          </text>
        </motion.g>

        {/* Process Description */}
        <motion.text
          x="500"
          y="600"
          textAnchor="middle"
          fill="#1a365d"
          fontSize="16"
          fontWeight="bold"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.5 }}
        >
          Transforming Customer Support with AI
        </motion.text>
        <motion.text
          x="500"
          y="630"
          textAnchor="middle"
          fill="#2d4a77"
          fontSize="14"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.5 }}
        >
          Automated support that learns and improves with every interaction
        </motion.text>
      </motion.svg>
    </Box>
  );
};

export default WorkflowDiagram; 