import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
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
      title: 'Support Excellence',
      description: 'Achieve 95%+ CSAT scores with AI-powered support automation',
      metrics: ['24/7 Support Coverage', '80% Faster Response Times', 'Automated Ticket Routing'],
      icon: '🎯'
    },
    {
      title: 'Compliance Automation',
      description: 'Streamline compliance processes and documentation',
      metrics: ['Automated Audits', 'Real-time Compliance Checks', 'Documentation Generation'],
      icon: '🔒'
    },
    {
      title: 'Operations Management',
      description: 'Transform manual operations into efficient automated workflows',
      metrics: ['Process Automation', 'Resource Optimization', 'Performance Analytics'],
      icon: '⚡'
    }
  ];

  const benefitSections = [
    {
      title: 'Enhanced Employee Focus',
      description: 'Free your team from repetitive tasks, allowing them to focus on strategic initiatives and innovation.',
      points: [
        'Reduce manual task load by 80%',
        'Increase productive hours by 60%',
        'Enable focus on high-impact projects'
      ],
      icon: '🚀'
    },
    {
      title: 'Accelerated Growth',
      description: 'Drive business growth through efficient operations and superior customer experience.',
      points: [
        'Faster market response',
        'Improved customer satisfaction',
        'Reduced operational costs'
      ],
      icon: '📈'
    }
  ];

  return (
    <div className="landing-root">
      {/* Hero Section */}
      <header className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <h1 className="hero-title">Transform Your Support, On-boarding, QA Operations with AI</h1>
              <p className="hero-sub">Automate support, compliance, and operations while achieving unprecedented efficiency and growth</p>
              <button className="btn primary" onClick={() => navigate('/login')}>Get Started</button>
            </motion.div>
          </div>

          <motion.div className="hero-visual" initial="hidden" animate="visible" variants={scaleIn}>
            <div className="visual-placeholder" />
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <section className="container features" aria-label="features">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <h2 className="section-title">Full-Stack Automation Suite</h2>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <motion.article className="card" key={index} variants={fadeInUp}>
                <div className="feature-icon" aria-hidden>{feature.icon}</div>
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-desc">{feature.description}</p>
                <ul className="card-list">
                  {feature.metrics.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <h2 className="section-title">Empower Your Business Growth</h2>
            <div className="benefit-grid">
              {benefitSections.map((b, idx) => (
                <motion.article className="card" key={idx} variants={fadeInUp}>
                  <div className="feature-icon">{b.icon}</div>
                  <h3 className="card-title">{b.title}</h3>
                  <p className="card-desc">{b.description}</p>
                  <ul className="card-list">
                    {b.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="cta">
        <div className="container cta-inner">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="cta-title">Ready to Transform Your Operations?</h2>
            <p className="cta-desc">Join forward-thinking companies achieving operational excellence with AI</p>
            <button className="btn primary" onClick={() => navigate('/login')}>Start Your Transformation</button>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;