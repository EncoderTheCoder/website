import React from 'react';

export default function Hero({
  title = 'Welcome',
  subtitle = '',
  bgImage = null,
  ctas = [],
}) {
  const heroStyle = bgImage
    ? {
        backgroundImage: `linear-gradient(135deg, rgba(255, 153, 51, 0.8), rgba(19, 136, 8, 0.8)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {
        background:
          'linear-gradient(135deg, rgba(255, 153, 51, 0.8), rgba(19, 136, 8, 0.8))',
      };

  return (
    <section className="hero" style={heroStyle}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
          {ctas.length > 0 && (
            <div className="hero-buttons">
              {ctas.map((cta, idx) => (
                <a
                  key={idx}
                  href={cta.href || '#'}
                  className={`btn ${cta.variant || 'btn-primary'}`}
                >
                  {cta.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
