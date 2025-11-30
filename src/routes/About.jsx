import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';

export default function About() {
  useEffect(() => {
    document.title = 'About Us - Vedic Hindi School';
  }, []);

  const teamMembers = [
    {
      name: 'Dr. Anjali Sharma',
      role: 'Founder & Director',
      bio: 'Language educator with 20+ years experience',
    },
    {
      name: 'Prof. Vikram Singh',
      role: 'Head of Curriculum',
      bio: 'Expert in cultural education and pedagogy',
    },
    {
      name: 'Ms. Neha Patel',
      role: 'Community Lead',
      bio: 'Passionate about building inclusive learning spaces',
    },
  ];

  const testimonialsData = [
    {
      content: (
        <Testimonial
          quote="VHS changed how I see my heritage. The teachers are amazing!"
          author="Aditya Kumar"
          role="Student"
          rating={5}
        />
      ),
    },
    {
      content: (
        <Testimonial
          quote="Best investment for my children's cultural education."
          author="Sneha Mittal"
          role="Parent"
          rating={5}
        />
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <Hero
        title="About Vedic Hindi School"
        subtitle="Building bridges between language and culture"
      />

      {/* Our History */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-2xl)' }}>Our History</h2>
          <div className="grid grid-2">
            <div>
              <p>
                Founded in 2010, Vedic Hindi School emerged from a simple belief:
                language is the key to understanding culture. What started as a
                small community initiative has grown into a global learning
                platform.
              </p>
              <p>
                Today, we serve thousands of students across continents, helping
                them reconnect with their heritage and master the beauty of Hindi.
              </p>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb2a0d70658834eb98ba26675db1f16fe%2Fb6c1babb78894b3faa931ba38bf53927"
              alt="Our History"
              style={{
                borderRadius: 'var(--radius-lg)',
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section bg-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
            Our Mission
          </h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            To empower individuals worldwide to master Hindi language and connect
            deeply with Indian culture through innovative, accessible, and
            community-driven education. We believe every person has the right to
            know their heritage and express it fluently.
          </p>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            Meet Our Team
          </h2>
          <div className="grid grid-3">
            {teamMembers.map((member, idx) => (
              <Card
                key={idx}
                icon="👤"
                title={member.name}
                text={
                  <>
                    <p style={{ fontWeight: '600', marginBottom: 'var(--spacing-xs)' }}>
                      {member.role}
                    </p>
                    <p style={{ margin: 0 }}>{member.bio}</p>
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            Student Testimonials
          </h2>
          <Carousel items={testimonialsData} autoRotate={true} />
        </div>
      </section>

      {/* Join Us CTA */}
      <CTA
        title="Join Us on This Journey"
        description="Become part of a global community dedicated to preserving and celebrating Hindi and Indian culture"
        buttonText="Enroll Now"
        href="/programs"
      />
    </>
  );
}
