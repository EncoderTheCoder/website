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

  const beliefs = [
    'Language builds identity.',
    'Culture builds belonging.',
    'Heritage builds pride.',
  ];

  const leadershipTeam = [
    {
      id: 1,
      name: 'Vishal Thakur',
      role: 'Founder & Global Lead',
      bio: 'Social Innovation & Partnerships',
    },
    {
      id: 2,
      name: 'Vikas',
      role: 'Technology & Innovation',
      bio: 'Leading digital transformation in cultural education',
    },
    {
      id: 3,
      name: 'Vinisha',
      role: 'Operations & Community Support',
      bio: 'Building inclusive learning communities',
    },
  ];

  const testimonialsData = [
    {
      id: 1,
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
      id: 2,
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

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-2xl)' }}>📖 Our Story</h2>
          <div className="grid grid-2">
            <div>
              <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                Vedic Hindi School (VHS) was born from a longing — to help children
                of global Indians speak to their grandparents, celebrate festivals
                with understanding, and feel proud of their roots.
              </p>
              <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                From one small community class in the US, VHS has become a global
                movement with learners across continents.
              </p>
              <p style={{
                fontStyle: 'italic',
                color: 'var(--color-primary)',
                fontWeight: '600',
              }}>
                🌿 We don't just teach words; we nurture identity.
              </p>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb2a0d70658834eb98ba26675db1f16fe%2Fb6c1babb78894b3faa931ba38bf53927"
              alt="Our Story"
              style={{
                borderRadius: 'var(--radius-lg)',
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            Vision & Mission
          </h2>
          <div className="grid grid-2" style={{ gap: 'var(--spacing-2xl)' }}>
            <div style={{ padding: 'var(--spacing-xl)', backgroundColor: 'white', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary)' }}>
                Vision
              </h3>
              <p>
                To create a world where every Indian, no matter where they live,
                feels connected to their culture through language, heritage, and
                shared learning.
              </p>
            </div>
            <div style={{ padding: 'var(--spacing-xl)', backgroundColor: 'white', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary)' }}>
                Mission
              </h3>
              <p>
                To blend tradition with technology — making cultural learning
                accessible, interactive, and recognized globally.
              </p>
            </div>
          </div>
          <div style={{
            marginTop: 'var(--spacing-2xl)',
            padding: 'var(--spacing-xl)',
            backgroundColor: 'white',
            borderRadius: 'var(--radius-lg)',
            maxWidth: '800px',
            margin: 'var(--spacing-2xl) auto 0',
          }}>
            <h3 style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary)' }}>
              We Believe
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)',
            }}>
              {beliefs.map((belief, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 'var(--body-large-size)',
                  fontWeight: '500',
                }}>
                  <span style={{ marginRight: 'var(--spacing-md)', fontSize: '1.25rem' }}>✓</span>
                  {belief}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Accreditation & Affiliations */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>
            🏆 Accreditation & Affiliations
          </h2>
          <div className="grid grid-2" style={{ gap: 'var(--spacing-2xl)' }}>
            <div style={{ padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-background-light)', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Global Credibility</h3>
              <p>
                VHS is Cognia-accredited, bringing global credibility to Indian
                language education.
              </p>
            </div>
            <div style={{ padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-background-light)', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Credit Program</h3>
              <p>
                Our Credit Program (for US ISDs) lets students earn official credits
                while exploring Hindi and Indian culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section bg-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
            Leadership Team
          </h2>
          <p style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)', maxWidth: '800px', margin: '0 auto var(--spacing-2xl)' }}>
            VHS is led by a passionate team of educators and innovators who believe
            in bringing India's wisdom to the world.
          </p>
          <div className="grid grid-3">
            {leadershipTeam.map((leader) => (
              <Card
                key={leader.id}
                icon="🎓"
                title={leader.name}
                text={
                  <>
                    <p style={{ fontWeight: '600', marginBottom: 'var(--spacing-xs)', color: 'var(--color-primary)' }}>
                      {leader.role}
                    </p>
                    <p style={{ margin: 0, fontSize: 'var(--body-small-size)' }}>
                      {leader.bio}
                    </p>
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Supporters */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>
            🤝 Partners & Supporters
          </h2>
          <p style={{ marginBottom: 'var(--spacing-xl)' }}>
            We proudly collaborate with:
          </p>
          <div style={{
            padding: 'var(--spacing-xl)',
            backgroundColor: 'var(--color-background-light)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: 'var(--spacing-lg)',
          }}>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)',
            }}>
              <li style={{ fontSize: 'var(--body-large-size)' }}>
                <span style={{ marginRight: 'var(--spacing-md)' }}>🏫</span>
                Independent School Districts (US)
              </li>
            </ul>
          </div>
          <p style={{
            textAlign: 'center',
            fontSize: 'var(--body-large-size)',
            fontWeight: '600',
            color: 'var(--color-primary)',
          }}>
            🌏 Together, we bring India's story to the world.
          </p>
        </div>
      </section>

      {/* Student Testimonials */}
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
