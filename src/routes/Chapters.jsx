import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Testimonial from '../components/Testimonial';
import EventList from '../components/EventList';
import Map from '../components/Map';
import CTA from '../components/CTA';

export default function Chapters() {
  useEffect(() => {
    document.title = 'Global Chapters - Vedic Hindi School';
  }, []);

  const benefits = [
    {
      icon: '🤝',
      title: 'Community',
      text: 'Connect with like-minded Hindi enthusiasts',
    },
    {
      icon: '📚',
      title: 'Learning',
      text: 'Access to VHS curriculum and resources',
    },
    {
      icon: '🎉',
      title: 'Events',
      text: 'Regular cultural events and celebrations',
    },
  ];

  const testimonialsData = [
    {
      id: 1,
      content: (
        <Testimonial
          quote="Our local chapter brought Hindi learning to my entire town!"
          author="Ravi Desai"
          role="Chapter Lead"
          rating={5}
        />
      ),
    },
    {
      id: 2,
      content: (
        <Testimonial
          quote="Best decision joining the chapter. Made so many friends!"
          author="Pooja Singh"
          role="Chapter Member"
          rating={5}
        />
      ),
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      date: 'Nov 15, 2025',
      title: 'Hindi Basics Meetup',
      description: 'Casual gathering for beginners to practice speaking',
    },
    {
      id: 2,
      date: 'Nov 22, 2025',
      title: 'Diwali Celebration',
      description: 'Festival celebration with cultural performances',
    },
  ];

  return (
    <>
      {/* Hero */}
      <Hero title="Global Chapters" subtitle="Learn Hindi in your community" />

      {/* About Chapters */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>
            About Our Chapters
          </h2>
          <div className="grid grid-2">
            <div>
              <p>
                VHS Global Chapters are local communities dedicated to learning
                Hindi and celebrating Indian culture. Whether in a major city or
                small town, chapters provide support, resources, and friendship.
              </p>
              <p>
                Each chapter is led by trained facilitators and connects with
                the global VHS network for curriculum, materials, and guidance.
              </p>
            </div>
            <img
              src="https://via.placeholder.com/400x300?text=Global+Community"
              alt="Global Chapters"
              style={{
                borderRadius: 'var(--radius-lg)',
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-light">
        <div className="container">
          <h2
            style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}
          >
            Chapter Benefits
          </h2>
          <div className="grid grid-3">
            {benefits.map((benefit, idx) => (
              <Card
                key={idx}
                icon={benefit.icon}
                title={benefit.title}
                text={benefit.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2
            style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}
          >
            Member Stories
          </h2>
          <Carousel items={testimonialsData} autoRotate={true} />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section bg-light">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>
            Upcoming Chapter Events
          </h2>
          <div className="grid grid-2">
            <EventList events={upcomingEvents} />
            <Map />
          </div>
        </div>
      </section>

      {/* Join a Chapter CTA */}
      <CTA
        title="Start or Join a Chapter"
        description="Connect with your local Hindi learning community"
        buttonText="Find a Chapter Near You"
        href="/contact"
      />
    </>
  );
}
