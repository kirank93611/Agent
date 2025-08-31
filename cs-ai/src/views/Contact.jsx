import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log('Form submitted:', formData); setSubmitted(true); };

  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="contact-root">
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="contact-card">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-sub">Ready to transform your quality engineering process? Let's discuss how our AI-powered solution can help.</p>

            {submitted ? (
              <div className="alert success">Thank you for your interest! We'll get back to you shortly.</div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    <span>Name</span>
                    <input name="name" value={formData.name} onChange={handleChange} required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} required />
                  </label>
                </div>
                <label className="full">
                  <span>Company</span>
                  <input name="company" value={formData.company} onChange={handleChange} />
                </label>
                <label className="full">
                  <span>Message</span>
                  <textarea name="message" rows={5} value={formData.message} onChange={handleChange} required />
                </label>
                <button className="btn primary full" type="submit">Send Message</button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;