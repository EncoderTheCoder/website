import React from 'react';

export default function Gallery({ images = [] }) {
  const imageArray = images.length > 0 ? images : [
    { id: 1, src: 'https://via.placeholder.com/300x200?text=Image+1', alt: 'Gallery item 1' },
    { id: 2, src: 'https://via.placeholder.com/300x200?text=Image+2', alt: 'Gallery item 2' },
    { id: 3, src: 'https://via.placeholder.com/300x200?text=Image+3', alt: 'Gallery item 3' },
    { id: 4, src: 'https://via.placeholder.com/300x200?text=Image+4', alt: 'Gallery item 4' },
    { id: 5, src: 'https://via.placeholder.com/300x200?text=Image+5', alt: 'Gallery item 5' },
    { id: 6, src: 'https://via.placeholder.com/300x200?text=Image+6', alt: 'Gallery item 6' },
  ];

  return (
    <div
      className="gallery"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'var(--spacing-lg)',
      }}
    >
      {imageArray.map((image) => (
        <figure
          key={image.id}
          style={{
            margin: 0,
            overflow: 'hidden',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            transition: 'transform var(--transition-base)',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              display: 'block',
            }}
            loading="lazy"
          />
        </figure>
      ))}
    </div>
  );
}
