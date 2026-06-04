import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: "Certified Junior Web Application Penetration Tester",
      issuer: "eWPT",
      date: "2024",
      description: "Specialized certification in web application penetration testing, vulnerability assessment, and security testing methodologies.",
      level: "Advanced",
      credentialId: "eWPT-JR-2024",
      status: "Under Process"
    },
    {
      title: "AICTE Supported Palo Alto Internship",
      issuer: "AICTE / Palo Alto",
      date: "January - March 2026",
      description: "Cybersecurity internship program focused on network security, threat detection, and security operations.",
      level: "Professional",
      credentialId: "AICTE-PA-2026",
      status: "Completed",
      certificatePdf: "/certificates/aicte.jpg"
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      date: "2024",
      description: "Professional certification in AI fundamentals, machine learning concepts, and Salesforce AI capabilities.",
      level: "Professional",
      credentialId: "SF-AI-ASSOC-2024",
      status: "Completed",
      certificatePdf: "/certificates/salesforce.pdf"
    },
    {
      title: "AWS Cloud Practitioner CLF-02",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Fundamental AWS certification covering cloud concepts, AWS services, security, and billing.",
      level: "Professional",
      credentialId: "AWS-CLF02-2024",
      status: "Completed",
      certificatePdf: "/certificates/AWS Certified Cloud Practitioner certificate.pdf"
    },
    {
      title: "Microsoft Azure AZ-900",
      issuer: "Microsoft",
      date: "2024",
      description: "Azure fundamentals certification covering cloud concepts, core Azure services, security, and pricing.",
      level: "Professional",
      credentialId: "AZ-900-2024",
      status: "Under Process"
    },
    {
      title: "MongoDB Certification",
      issuer: "MongoDB University",
      date: "2024",
      description: "Professional certification in MongoDB database administration, development, and cloud services.",
      level: "Professional",
      credentialId: "MDB-2024",
      status: "Under Process"
    }
  ];

  return (
    <section id="certifications" className="section" style={{
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
        Certifications
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
        Professional certifications validating expertise in cybersecurity, cloud computing, and emerging technologies.
      </motion.p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              background: '#f8f8f8',
              padding: '1.5rem 2rem',
              borderRadius: '10px',
              borderLeft: '4px solid #000000',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            whileHover={{ 
              background: '#f0f0f0',
              transform: 'translateX(10px)'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.8rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                fontFamily: 'Georgia, serif',
                color: '#000000',
                margin: 0
              }}>
                {cert.title}
              </h3>
              <div style={{
                display: 'flex',
                gap: '0.5rem'
              }}>
                <span style={{
                  padding: '0.3rem 0.8rem',
                  background: cert.status === 'Completed' ? '#000000' : '#666666',
                  color: '#ffffff',
                  borderRadius: '15px',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>
                  {cert.status}
                </span>
                <span style={{
                  padding: '0.3rem 0.8rem',
                  background: '#e0e0e0',
                  color: '#000000',
                  borderRadius: '15px',
                  fontSize: '0.7rem',
                  fontWeight: '600'
                }}>
                  {cert.level}
                </span>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              marginBottom: '0.8rem',
              fontSize: '0.9rem',
              color: '#666666',
              flexWrap: 'wrap'
            }}>
              <span style={{ fontWeight: '500' }}>{cert.issuer}</span>
              <span>•</span>
              <span>{cert.date}</span>
              <span>•</span>
              <span style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>ID: {cert.credentialId}</span>
            </div>
            
            <p style={{
              color: '#666666',
              lineHeight: '1.6',
              marginBottom: '1rem',
              fontSize: '0.95rem',
              margin: '0.8rem 0 1rem 0'
            }}>
              {cert.description}
            </p>

            {cert.certificatePdf && (
              <a
                href={cert.certificatePdf}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.5rem',
                  background: '#000000',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#333333';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#000000';
                }}
              >
                View Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
