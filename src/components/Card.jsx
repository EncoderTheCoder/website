import React from 'react';

export default function Card({ icon, title, text, href = '#', variant = 'default' }) {
  return (
    <a href={href} className={`card card-${variant}`}>
      {icon && (
        <div className="card-icon">
          {icon}
        </div>
      )}
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
    </a>
  );
}
