import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "SecureVault - Password Manager",
      description: "Enterprise-grade password management system with AES-256 encryption, multi-factor authentication, and secure cloud storage.",
      technologies: ["React", "Node.js", "AES-256", "JWT", "MongoDB"],
      github: "https://github.com/Pavankhadar0412/securevault",
      demo: "/demos/securevault-demo.html"
    },
    {
      title: "ChainGuard - Smart Contract Auditor",
      description: "Automated smart contract security analysis tool that detects vulnerabilities, gas optimization opportunities, and compliance issues.",
      technologies: ["Solidity", "Python", "Web3.py", "Ethers.js", "Slither"],
      github: "https://github.com/Pavankhadar0412/chainguard",
      demo: "/demos/chainguard-demo.html"
    },
    {
      title: "DeFi Protocol - Lending Platform",
      description: "Decentralized lending and borrowing protocol with dynamic interest rates, collateral management, and governance token integration.",
      technologies: ["Solidity", "Hardhat", "React", "Ethers.js", "IPFS"],
      github: "https://github.com/Pavankhadar0412/defi-protocol",
      demo: "/demos/defi-protocol-demo.html"
    },
    {
      title: "ThreatHunter - Network Security Scanner",
      description: "Real-time network intrusion detection system with machine learning algorithms for anomaly detection and automated threat response.",
      technologies: ["Python", "Scapy", "TensorFlow", "Elasticsearch", "Docker"],
      github: "https://github.com/Pavankhadar0412/threathunter",
      demo: "/demos/threathunter-demo.html"
    },
    {
      title: "NFT Marketplace - Digital Assets Platform",
      description: "Full-featured NFT marketplace with minting, trading, auction system, and royalty distribution for creators.",
      technologies: ["Solidity", "React", "IPFS", "OpenZeppelin", "Web3.js"],
      github: "https://github.com/Pavankhadar0412/nft-marketplace",
      demo: "/demos/nft-marketplace-demo.html"
    },
    {
      title: "CryptoAnalyzer - Blockchain Forensics",
      description: "Advanced blockchain analysis tool for transaction tracking, wallet clustering, and suspicious activity detection.",
      technologies: ["Python", "Web3.py", "NetworkX", "PostgreSQL", "D3.js"],
      github: "https://github.com/Pavankhadar0412/cryptoanalyzer",
      demo: "/demos/cryptoanalyzer-demo.html"
    }
  ];

  return (
    <section id="projects" className="section" style={{
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
        Selected Work
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
        A collection of projects showcasing expertise in cybersecurity, blockchain development, and full-stack engineering.
      </motion.p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card"
            whileHover={{ y: -10 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1.5rem'
            }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.6rem 1.2rem',
                  background: '#000000',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.6rem 1.2rem',
                  background: '#f5f5f5',
                  color: '#000000',
                  textDecoration: 'none',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#000000';
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#f5f5f5';
                  e.target.style.color = '#000000';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
