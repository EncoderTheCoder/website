import React from 'react';

export default function Hero({
  title = 'Welcome',
  subtitle = '',
  bgImage = null,
  ctas = [],
}) {
  const defaultBgImage = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop';
  const imageSrc = bgImage || defaultBgImage;

  return (
    <section className="hero">
      <div className="hero-background" style={{ backgroundImage: `url(${imageSrc})` }}></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <h1 className="hero-title">{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          {ctas.length > 0 && (
            <div className="hero-ctas">
              {ctas.map((cta, idx) => (
                <a
                  key={idx}
                  href={cta.href || '#'}
                  className="hero-cta-btn"
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
