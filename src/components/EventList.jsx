import React from 'react';

export default function EventList({ events = [] }) {
  const eventArray = events.length > 0 ? events : [
    { id: 1, date: 'Nov 20, 2025', title: 'Hindi Learning Basics', description: 'Introduction to Hindi language fundamentals' },
    { id: 2, date: 'Nov 27, 2025', title: 'Cultural Storytelling', description: 'Explore traditional Indian stories' },
    { id: 3, date: 'Dec 4, 2025', title: 'Festival Celebration', description: 'Learn about Diwali traditions' },
  ];

  return (
    <div className="event-list">
      {eventArray.map((event) => (
        <div
          key={event.id}
          style={{
            display: 'flex',
            gap: 'var(--spacing-lg)',
            padding: 'var(--spacing-lg)',
            borderBottom: '1px solid var(--color-border)',
            transition: 'background-color var(--transition-base)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-background-accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <div
            style={{
              minWidth: '80px',
              padding: 'var(--spacing-md)',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-background)',
              borderRadius: 'var(--radius-md)',
              textAlign: 'center',
              fontSize: 'var(--body-small-size)',
              fontWeight: '600',
            }}
          >
            {event.date}
          </div>
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-xs)', marginTop: 0 }}>
              {event.title}
            </h3>
            <p
              style={{
                color: 'var(--color-text-light)',
                margin: 0,
                fontSize: 'var(--body-small-size)',
              }}
            >
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
