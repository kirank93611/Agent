import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import WorkflowDiagram from '../components/common/WorkflowDiagram';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="login-root">
      <aside className="login-diagram">
        <WorkflowDiagram />
      </aside>

      <motion.section className="login-panel" initial="hidden" animate="visible" variants={fadeIn}>
        <div className="container">
          <header className="login-header">
            <h1 className="login-title">Welcome to AI Ops</h1>
            <p className="login-sub">Sign in to access your AI-powered operations platform</p>
          </header>

          <form className="login-form" onSubmit={handleSubmit}>
            <label className="form-group">
              <span>Email Address</span>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label className="form-group">
              <span>Password</span>
              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>

            <button className="btn primary full" type="submit">Sign In to Dashboard</button>
          </form>

          <hr className="divider" />

          <ul className="feature-list">
            <li>📈 95%+ Support CSAT Achievement</li>
            <li>🔍 Compliance Vetting & Documentation</li>
            <li>🚀 Customer Onboarding & Support</li>
            <li>⚡ Operational Task Management</li>
          </ul>

          <blockquote className="login-quote">"From manual operations to AI-powered efficiency"</blockquote>
          <small className="login-caption">Join companies achieving operational excellence with AI Ops</small>
        </div>
      </motion.section>
    </main>
  );
};

export default Login;