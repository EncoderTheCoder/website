import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Page Not Found - Vedic Hindi School';
  }, []);

  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--spacing-4xl) 0',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: 'var(--spacing-md)' }}>
          404
        </h1>
        <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Page Not Found</h2>
        <p style={{ fontSize: 'var(--body-large-size)', marginBottom: 'var(--spacing-xl)' }}>
          Sorry, the page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
