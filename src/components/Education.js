import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const timelineData = [
    {
      date: '2023 - 2027',
      title: 'B.Tech in Computer Science',
      description: 'KL University, Vijayawada Specializing in Cybersecurity and Blockchain Technologies. CGPA: 9.2/10'
    },
    {
      date: '2021 - 2023',
      title: 'Intermediate (MPC)',
      description: 'Narayana Junior College, Andhra Pradesh Mathematics, Physics, and Chemistry. CGPA: 9.3/10'
    },
    {
      date: '2020 - 2021',
      title: '10th Class (SSC)',
      description: 'Sri Chaitanya School, Darsi Secondary School Certificate. Marks: 517/600'
    }
  ];

  return (
    <section id="education" className="section" style={{
      background: '#ffffff',
      position: 'relative'
    }}>
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-title"
      >
        My Career So Far
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 4rem',
          fontSize: '1.1rem',
          color: '#666666',
          lineHeight: '1.8'
        }}
      >
        Passionate about building secure, scalable applications and exploring the intersection of cybersecurity, blockchain technology, and full-stack development.
      </motion.p>

      <div className="timeline-container">
        <div className="timeline-line" />
        
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="timeline-item"
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-date">{item.date}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
