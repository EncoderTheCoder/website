import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Accessibility', href: '#' },
  ];

  const socialLinks = [
    { label: 'Facebook', icon: '📘', href: '#' },
    { label: 'Twitter', icon: '𝕏', href: '#' },
    { label: 'Instagram', icon: '📷', href: '#' },
    { label: 'YouTube', icon: '▶️', href: '#' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Legal</h3>
            <ul className="footer-links">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe for updates on programs and events.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Newsletter signup coming soon!');
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginTop: '1rem',
                }}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    border: 'none',
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Vedic Hindi School. All rights reserved. हिन्दी
          </p>
        </div>
      </div>
    </footer>
  );
}
