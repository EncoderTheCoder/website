import React, { useState } from 'react';

export default function Accordion({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            borderBottom: '1px solid var(--color-border)',
            paddingBottom: 'var(--spacing-md)',
            marginBottom: 'var(--spacing-md)',
          }}
        >
          <button
            className="accordion-button"
            onClick={() => toggleItem(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`accordion-panel-${index}`}
            style={{
              width: '100%',
              padding: 'var(--spacing-md)',
              textAlign: 'left',
              background: 'none',
              border: 'none',
              fontSize: 'var(--heading-s-size)',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: 'var(--color-text)',
              transition: 'color var(--transition-base)',
            }}
            onMouseEnter={(e) =>
              (e.target.style.color = 'var(--color-primary)')
            }
            onMouseLeave={(e) => (e.target.style.color = 'var(--color-text)')}
          >
            <span>{item.title}</span>
            <span
              style={{
                transform:
                  activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: prefersReducedMotion
                  ? 'none'
                  : 'transform var(--transition-base)',
                display: 'inline-block',
              }}
            >
              ▼
            </span>
          </button>

          <div
            id={`accordion-panel-${index}`}
            role="region"
            aria-labelledby={`accordion-button-${index}`}
            style={{
              maxHeight: activeIndex === index ? '1000px' : '0',
              overflow: 'hidden',
              transition: prefersReducedMotion
                ? 'none'
                : 'max-height var(--transition-base)',
              paddingLeft: 'var(--spacing-md)',
              paddingRight: 'var(--spacing-md)',
            }}
          >
            <div style={{ paddingBottom: 'var(--spacing-md)' }}>
              {typeof item.content === 'string' ? (
                <p>{item.content}</p>
              ) : (
                item.content
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
