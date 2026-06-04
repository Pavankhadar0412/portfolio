import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '1.5rem 5%',
      background: isScrolled 
        ? 'rgba(255, 255, 255, 0.95)' 
        : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#000000',
            textDecoration: 'none',
            letterSpacing: '1px',
            fontFamily: 'Georgia, serif'
          }}
        >
          Pavan Khadar's Portfolio
        </a>

        {/* Desktop Menu */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '3rem',
          alignItems: 'center',
          '@media (max-width: 968px)': {
            display: 'none'
          }
        }}>
          <li><a href="#projects" className="navbar-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} style={{
            color: '#000000',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            position: 'relative',
            letterSpacing: '1px'
          }}>WORK</a></li>
          <li><a href="#contact" className="navbar-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} style={{
            color: '#000000',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            position: 'relative',
            letterSpacing: '1px'
          }}>CONTACT</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#000000',
            fontSize: '1.5rem',
            cursor: 'pointer',
            '@media (max-width: 968px)': {
              display: 'block'
            }
          }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} style={{
        display: 'none',
        position: 'fixed',
        top: 0,
        left: '-100%',
        width: '80%',
        height: '100vh',
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(10px)',
        zIndex: 1001,
        transition: 'left 0.3s ease',
        padding: '2rem',
        '@media (max-width: 968px)': {
          display: isMobileMenuOpen ? 'block' : 'none'
        }
      }}>
        <button className="close-menu" onClick={() => setIsMobileMenuOpen(false)} style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'none',
          border: 'none',
          color: '#000000',
          fontSize: '1.5rem',
          cursor: 'pointer'
        }}>
          <FaTimes />
        </button>
        <ul className="mobile-menu-list" style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          marginTop: '4rem'
        }}>
          <li>
            <a href="#projects" className="mobile-menu-link" onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection('projects'); 
              setIsMobileMenuOpen(false);
            }} style={{
              color: '#000000',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>
              WORK
            </a>
          </li>
          <li>
            <a href="#contact" className="mobile-menu-link" onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection('contact'); 
              setIsMobileMenuOpen(false);
            }} style={{
              color: '#000000',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="overlay active" onClick={() => setIsMobileMenuOpen(false)} style={{
          display: 'block',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000
        }} />
      )}
    </nav>
  );
};

export default Navbar;
