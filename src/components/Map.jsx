import React from 'react';

export default function Map({ iframeUrl = null }) {
  if (iframeUrl) {
    return (
      <div
        className="map"
        style={{
          width: '100%',
          height: '400px',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <iframe
          src={iframeUrl}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }

  return (
    <div
      className="map"
      style={{
        width: '100%',
        height: '400px',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        backgroundColor: 'var(--color-background-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-text-light)',
      }}
    >
      <img
        src="https://via.placeholder.com/600x400?text=Map+Placeholder"
        alt="Map"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}
