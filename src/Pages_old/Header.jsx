import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Compact header on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/AboutUs', label: 'About Us' },
    { to: '/Services', label: 'Services' },
    { to: '/Blog', label: 'Blog' },
    { to: '/Contact', label: 'Contact Us' },
  ];

  return (
    <div>
      {/* Topbar Section Start */}
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="topbar-content-info">
                <p>From Vision to Reality ✨ — Premium Interiors in Mangaluru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar Section End */}

      {/* Header Start */}
      <header className="main-header" style={{ transition: 'all 0.3s ease' }}>
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="header-action-box">
              {/* Contact Info */}
              <div className="header-contact-info-list mobile-hide">
                <div className="header-contact-info">
                  <div className="icon-box">
                    <img src="/assets/images/icon-phone-primary.svg" alt="Phone" />
                  </div>
                  <div className="header-contact-info-content">
                    <p>Need Help?</p>
                    <span><a href="tel:7259759858">+91 7259759858</a></span>
                  </div>
                </div>
              </div>

              {/* Logo */}
              <Link className="navbar-brand" to="/">
                <img src="/assets/images/logo.png" alt="Aktik Designs — Interior Design Mangaluru" />
              </Link>

              {/* Desktop Action Icons + CTA */}
              <div className="header-action-details">
                <ul>
                  <li className="mobile-hide">
                    <Link
                      to="/Contact"
                      style={{
                        display: 'inline-block',
                        padding: '8px 18px',
                        background: '#b89a6a',
                        color: '#fff',
                        borderRadius: '4px',
                        fontSize: '13px',
                        fontWeight: '600',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                        transition: 'background 0.3s ease',
                      }}
                    >
                      Get Free Consultation
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Hamburger Button */}
              <button
                className="aktik-hamburger"
                aria-label="Open navigation menu"
                onClick={() => setMobileOpen(true)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '5px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  marginLeft: '12px',
                }}
              >
                <span style={{ display: 'block', width: '24px', height: '2px', background: '#1c1c1c', borderRadius: '2px', transition: 'all 0.3s ease' }} />
                <span style={{ display: 'block', width: '18px', height: '2px', background: '#1c1c1c', borderRadius: '2px', transition: 'all 0.3s ease' }} />
                <span style={{ display: 'block', width: '24px', height: '2px', background: '#1c1c1c', borderRadius: '2px', transition: 'all 0.3s ease' }} />
              </button>
            </div>

            {/* Desktop Nav */}
            <div className="main-menu">
              <div className="collapse navbar-collapse">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    {navLinks.map((link) => (
                      <li className="nav-item" key={link.to}>
                        <Link
                          className={`nav-link${location.pathname === link.to ? ' active' : ''}`}
                          to={link.to}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="navbar-toggle" />
            </div>
          </nav>
          <div className="responsive-menu" />
        </div>
      </header>
      {/* Header End */}

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 9998,
            backdropFilter: 'blur(2px)',
          }}
        />
      )}

      {/* Mobile Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: 'min(320px, 85vw)',
          height: '100vh',
          background: '#fff',
          zIndex: 9999,
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          overflowY: 'auto',
          boxShadow: '-4px 0 30px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Drawer Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          borderBottom: '1px solid #f0ede8',
        }}>
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img src="/assets/images/logo.png" alt="Aktik Designs" style={{ height: '36px', objectFit: 'contain' }} />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '24px',
              color: '#1c1c1c',
              lineHeight: 1,
              padding: '4px 8px',
            }}
          >
            ✕
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav style={{ flex: 1, padding: '16px 0' }}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '14px 24px',
                fontSize: '16px',
                fontWeight: location.pathname === link.to ? '700' : '500',
                color: location.pathname === link.to ? '#b89a6a' : '#1c1c1c',
                textDecoration: 'none',
                borderBottom: '1px solid #f7f5f2',
                transition: 'color 0.2s ease',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button in Drawer */}
        <div style={{ padding: '20px 24px', borderTop: '1px solid #f0ede8' }}>
          <Link
            to="/Contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'block',
              textAlign: 'center',
              padding: '14px 20px',
              background: '#b89a6a',
              color: '#fff',
              borderRadius: '6px',
              fontWeight: '700',
              fontSize: '15px',
              textDecoration: 'none',
              letterSpacing: '0.5px',
            }}
          >
            Get Free Consultation
          </Link>
          <a
            href="https://www.instagram.com/aktik_designs/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              textAlign: 'center',
              padding: '12px 20px',
              marginTop: '10px',
              border: '1px solid #e0d8ce',
              color: '#666',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            📷 Follow on Instagram
          </a>
        </div>
      </div>
    </div>
  );
} 

      {/* Inline style to hide hamburger on desktop */}
      <style>{`
        @media (min-width: 993px) {
          .aktik-hamburger { display: none !important; }
        }
        @media (max-width: 992px) {
          .main-menu { display: none !important; }
        }
        .nav-link.active {
          color: #b89a6a !important;
          font-weight: 600;
        }
      `}</style>
