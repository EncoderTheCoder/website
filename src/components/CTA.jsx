import React from 'react';

export default function CTA({ title, description, buttonText, href = '#' }) {
  return (
    <section className="cta-section">
      <div className="cta-background"></div>
      <div className="cta-overlay"></div>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{title}</h2>
          {description && (
            <p className="cta-description">
              {description}
            </p>
          )}
          <a href={href} className="cta-button">
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
