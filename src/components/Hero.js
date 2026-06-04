import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.png';

const Hero = () => {
  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '4+', label: 'Global Certifications' }
  ];

  return (
    <section id="home" className="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      padding: '6rem 5% 2rem'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        maxWidth: '1400px',
        width: '100%',
        gap: '2rem',
        alignItems: 'center',
        '@media (max-width: 1200px)': {
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem'
        },
        '@media (max-width: 768px)': {
          gridTemplateColumns: '1fr',
          textAlign: 'center'
        }
      }}>
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            '@media (max-width: 1200px)': {
              order: 1
            }
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '5rem',
              fontWeight: '700',
              marginBottom: '0.5rem',
              lineHeight: '1.1',
              fontFamily: 'Georgia, serif',
              color: '#000000',
              '@media (max-width: 1200px)': {
                fontSize: '3.5rem'
              },
              '@media (max-width: 768px)': {
                fontSize: '2.5rem'
              }
            }}
          >
            PAVAN<br />KHADAR
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: '1.2rem',
              color: '#666666',
              marginBottom: '2rem',
              fontWeight: '400',
              letterSpacing: '3px',
              fontFamily: 'Arial, sans-serif',
              '@media (max-width: 768px)': {
                fontSize: '1rem'
              }
            }}
          >
            CYBER SECURITY & BLOCKCHAIN | FULL STACK DEVELOPER
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: '1rem',
              color: '#333333',
              marginBottom: '3rem',
              lineHeight: '1.8',
              maxWidth: '500px',
              '@media (max-width: 768px)': {
                maxWidth: '100%'
              }
            }}
          >
            Passionate about building secure, scalable applications and exploring the intersection of cybersecurity, blockchain technology, and full-stack development.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://www.linkedin.com/in/pavankhadar/', '_blank')}
            style={{
              padding: '1.2rem 2.5rem',
              background: 'linear-gradient(135deg, #333333 0%, #000000 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              width: 'fit-content',
              '@media (max-width: 768px)': {
                margin: '0 auto'
              }
            }}
          >
            Connect on LinkedIn
          </motion.button>
        </motion.div>

        {/* Middle Column - Profile Image with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            '@media (max-width: 1200px)': {
              order: 2,
              gridColumn: 'span 2',
              marginBottom: '2rem'
            },
            '@media (max-width: 768px)': {
              order: 1,
              gridColumn: 'span 1'
            }
          }}
        >
          <div style={{
            position: 'relative',
            width: '400px',
            height: '400px',
            '@media (max-width: 768px)': {
              width: '300px',
              height: '300px'
            }
          }}>
            {/* Circular Profile Image */}
            <motion.div
              style={{
                position: 'relative',
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                border: '4px solid #000000',
                zIndex: 1,
                '@media (max-width: 768px)': {
                  width: '250px',
                  height: '250px'
                }
              }}
            >
              <img
                src={profileImage}
                alt="Pavan Khadar Bandaru"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                border: '2px dashed #cccccc',
                zIndex: -1,
                '@media (max-width: 768px)': {
                  width: '280px',
                  height: '280px'
                }
              }}
            />
          </div>
        </motion.div>

        {/* Right Column - Statistics */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            '@media (max-width: 1200px)': {
              order: 3,
              gridColumn: 'span 2'
            },
            '@media (max-width: 768px)': {
              order: 3,
              gridColumn: 'span 1',
              alignItems: 'center'
            }
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, x: -10 }}
              style={{
                padding: '1.5rem',
                background: '#f5f5f5',
                borderRadius: '15px',
                border: '1px solid #e0e0e0',
                transition: 'all 0.3s ease',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                '@media (max-width: 768px)': {
                  width: '100%',
                  textAlign: 'center'
                }
              }}
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#000000',
                  fontFamily: 'Georgia, serif',
                  display: 'block',
                  '@media (max-width: 768px)': {
                    fontSize: '2rem'
                  }
                }}
              >
                {stat.number}
              </motion.span>
              <span style={{
                fontSize: '0.9rem',
                color: '#666666',
                fontWeight: '500',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                '@media (max-width: 768px)': {
                  fontSize: '0.8rem'
                }
              }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
