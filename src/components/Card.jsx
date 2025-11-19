import React from 'react';

export default function Card({ icon, title, text, href = '#' }) {
  return (
    <a href={href} className="card" style={{ textDecoration: 'none' }}>
      {icon && (
        <div
          style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          {icon}
        </div>
      )}
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
    </a>
  );
}
