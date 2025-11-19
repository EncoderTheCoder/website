import React from 'react';

export default function CTA({ title, description, buttonText, href = '#' }) {
  return (
    <section
      className="section bg-primary"
      style={{
        background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
        color: 'var(--color-background)',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <h2 style={{ color: 'var(--color-background)' }}>{title}</h2>
        {description && (
          <p
            style={{
              fontSize: 'var(--body-large-size)',
              marginBottom: 'var(--spacing-xl)',
              color: 'rgba(255, 255, 255, 0.95)',
            }}
          >
            {description}
          </p>
        )}
        <a href={href} className="btn btn-outline">
          {buttonText}
        </a>
      </div>
    </section>
  );
}
