import React from 'react';

export default function Testimonial({
  quote,
  author,
  role = '',
  rating = 5,
}) {
  return (
    <div className="testimonial">
      <div className="testimonial-rating">
        {'⭐'.repeat(Math.min(rating, 5))}
      </div>
      <blockquote className="testimonial-quote">"{quote}"</blockquote>
      <p className="testimonial-author">— {author}</p>
      {role && (
        <p
          style={{
            fontSize: 'var(--body-small-size)',
            color: 'var(--color-text-light)',
            margin: 0,
          }}
        >
          {role}
        </p>
      )}
    </div>
  );
}
