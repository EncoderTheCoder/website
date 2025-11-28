import React from 'react';

export default function Hero({
  title = 'Welcome',
  subtitle = '',
  bgImage = null,
  ctas = [],
  showDecorations = true,
}) {
  return (
    <section className="hero-creative">
      <div className="hero-creative-top">
        <div className="hero-creative-content">
          <div className="hero-creative-text">
            <h1 className="hero-creative-title">{title}</h1>
            {subtitle && <p className="hero-creative-subtitle">{subtitle}</p>}
            {ctas.length > 0 && (
              <div className="hero-creative-ctas">
                {ctas.map((cta, idx) => (
                  <a
                    key={idx}
                    href={cta.href || '#'}
                    className="hero-creative-cta-btn"
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          {showDecorations && (
            <div className="hero-decorations">
              <div className="decoration accent-lime">●</div>
              <div className="decoration accent-pink">◆</div>
              <div className="decoration accent-teal">★</div>
            </div>
          )}
        </div>
      </div>
      {bgImage && (
        <div className="hero-creative-image">
          <img src={bgImage} alt="Hero background" />
        </div>
      )}
    </section>
  );
}
