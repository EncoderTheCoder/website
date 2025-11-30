import React, { useState, useEffect } from 'react';

export default function Carousel({ items = [], autoRotate = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  useEffect(() => {
    if (!autoRotate || prefersReducedMotion || isHovering || items.length === 0)
      return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoRotate, prefersReducedMotion, isHovering, items.length]);

  if (items.length === 0) return <div>No items to display</div>;

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Carousel"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', width: '100%', minHeight: '300px' }}>
        {items.map((item, index) => (
          <div
            key={item.id || index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === currentIndex ? 1 : 0,
              transition: prefersReducedMotion
                ? 'none'
                : 'opacity 0.5s ease-in-out',
              pointerEvents: index === currentIndex ? 'auto' : 'none',
            }}
          >
            {typeof item === 'string' ? (
              <p>{item}</p>
            ) : (
              <div>{item.content}</div>
            )}
          </div>
        ))}
      </div>

      <button
        className="carousel-button carousel-button-prev"
        onClick={goToPrevious}
        aria-label="Previous slide"
        style={{
          position: 'absolute',
          left: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.8)',
          border: 'none',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all var(--transition-base)',
        }}
        onMouseEnter={(e) =>
          (e.target.style.background = 'rgba(255, 255, 255, 1)')
        }
        onMouseLeave={(e) =>
          (e.target.style.background = 'rgba(255, 255, 255, 0.8)')
        }
      >
        ❮
      </button>

      <button
        className="carousel-button carousel-button-next"
        onClick={goToNext}
        aria-label="Next slide"
        style={{
          position: 'absolute',
          right: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.8)',
          border: 'none',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all var(--transition-base)',
        }}
        onMouseEnter={(e) =>
          (e.target.style.background = 'rgba(255, 255, 255, 1)')
        }
        onMouseLeave={(e) =>
          (e.target.style.background = 'rgba(255, 255, 255, 0.8)')
        }
      >
        ❯
      </button>

      <div
        className="carousel-indicators"
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.5rem',
          zIndex: 10,
        }}
      >
        {items.map((item, index) => (
          <button
            key={item.id || index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: index === currentIndex ? '12px' : '8px',
              height: '8px',
              borderRadius: '50%',
              border: 'none',
              background:
                index === currentIndex
                  ? 'var(--color-primary)'
                  : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all var(--transition-base)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
