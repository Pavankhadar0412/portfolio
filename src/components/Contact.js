import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{
      background: '#ffffff',
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Let's Work Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto 3rem',
          fontSize: '1.1rem',
          color: '#666666',
          lineHeight: '1.8'
        }}
      >
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="contact-container"
      >
        <a
          href="mailto:2300031634cseh@gmail.com"
          className="contact-button"
        >
          <FaEnvelope />
          Get In Touch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        viewport={{ once: true }}
        style={{
          marginTop: '1.5rem',
          fontSize: '1.1rem',
          color: '#333333',
          fontWeight: '500'
        }}
      >
        <a
          href="mailto:2300031634cseh@gmail.com"
          style={{
            color: '#333333',
            textDecoration: 'none',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.color = '#000000';
          }}
          onMouseOut={(e) => {
            e.target.style.color = '#333333';
          }}
        >
          2300031634cseh@gmail.com
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        style={{
          display: 'flex',
          gap: '2rem',
          marginTop: '3rem'
        }}
      >
        <motion.a
          href="https://www.linkedin.com/in/pavankhadar/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#000000',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}
        >
          <FaLinkedin size={24} />
          LinkedIn
        </motion.a>

        <motion.a
          href="https://github.com/Pavankhadar0412"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#000000',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}
        >
          <FaGithub size={24} />
          GitHub
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        style={{
          marginTop: '4rem',
          padding: '2rem',
          borderTop: '1px solid #e0e0e0',
          textAlign: 'center'
        }}
      >
        <p style={{
          color: '#666666',
          fontSize: '0.9rem',
          marginBottom: '0.5rem'
        }}>
          Designed & Built by Pavan Khadar
        </p>
        <p style={{
          color: '#999999',
          fontSize: '0.85rem'
        }}>
          © 2024 All Rights Reserved
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
