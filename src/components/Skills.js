import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsByCategory = {
    'Cybersecurity': [
      'Network Security',
      'Web Application Security',
      'Ethical Hacking',
      'Vulnerability Assessment',
      'Cryptography',
      'Blockchain Security',
      'Wireshark',
      'Nmap',
      'Burp Suite',
      'Metasploit',
      'Kali Linux'
    ],
    'Blockchain & Web3': [
      'Ganache',
      'MetaMask',
      'Smart Contracts',
      'Solidity',
      'Web3',
      'Ethers.js'
    ],
    'Web Development': [
      'React.js',
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
      'Express.js',
      'Spring Boot',
      'REST APIs'
    ],
    'Databases': [
      'MongoDB',
      'MySQL',
      'SQL'
    ],
    'Cloud & DevOps': [
      'AWS',
      'Microsoft Azure',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Jenkins',
      'GitHub Actions'
    ],
    'Programming Languages': [
      'C',
      'Python',
      'Java'
    ],
    'Operating Systems': [
      'Linux',
      'Windows'
    ]
  };

  return (
    <section id="skills" className="section" style={{
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
        Skills & Expertise
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 3rem',
          fontSize: '1.1rem',
          color: '#666666',
          lineHeight: '1.8'
        }}
      >
        A comprehensive toolkit spanning cybersecurity, blockchain development, and full-stack engineering, enabling me to build secure, scalable, and innovative solutions.
      </motion.p>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {Object.entries(skillsByCategory).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{ marginBottom: '2rem' }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              fontFamily: 'Georgia, serif',
              color: '#000000'
            }}>
              {category}
            </h3>
            <div className="skills-tags-container">
              {skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.02 }}
                  viewport={{ once: true }}
                  className="skill-tag"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
