import React, { useEffect } from 'react';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Testimonial from '../components/Testimonial';
import '../styles/about.css';

export default function About() {
  useEffect(() => {
    document.title = 'About Us - Vedic Hindi School';
  }, []);

  const timeline = [
    {
      id: 1,
      year: '2015',
      title: 'A Beginning',
      description: 'A small Hindi + Vedic Math community class in the US.',
    },
    {
      id: 2,
      year: '2020',
      title: 'Growing Demand',
      description: 'Indian parents across countries join our batches.',
    },
    {
      id: 3,
      year: '2022',
      title: 'Digital VHS',
      description: 'Launch of global online learning.',
    },
    {
      id: 4,
      year: '2024',
      title: 'A Worldwide Movement',
      description: 'Hundreds of students across continents.',
    },
  ];

  const beliefs = [
    { id: 1, text: 'Language builds identity.' },
    { id: 2, text: 'Culture builds belonging.' },
    { id: 3, text: 'Heritage builds pride.' },
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
      bio: 'Driving digital transformation',
    },
    {
      id: 3,
      name: 'Vinisha',
      role: 'Operations & Community Support',
      bio: 'Building inclusive communities',
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
      {/* Custom Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-left">
              <span className="about-hero-label">About VHS</span>
              <h1 className="about-hero-title">
                Bringing Indian Language, Culture & Identity Back to Every Home.
              </h1>
              <p className="about-hero-subtitle">
                A global learning movement helping children reconnect with their heritage
                through Hindi, Vedic wisdom, and immersive cultural learning.
              </p>
              <div className="about-hero-buttons">
                <a href="/programs" className="btn-primary">
                  Explore Programs
                </a>
                <a href="#leadership" className="btn-secondary">
                  Meet Our Team
                </a>
              </div>
            </div>
            <div className="about-hero-right">
              <div className="about-hero-illustration">
                <div className="illustration-content">
                  👨‍👩‍👧‍👦
                </div>
                <div className="devanagari-accent">अक्षर</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section about-story">
        <div className="container">
          <h2 className="section-title-center">Our Story</h2>
          <div className="story-text-center">
            <p>
              Vedic Hindi School (VHS) was born from a longing — to help children
              of global Indians speak to their grandparents, celebrate festivals
              with understanding, and feel proud of their roots.
            </p>
            <p>
              From one small community class in the US, VHS has become a global
              movement with learners across continents.
            </p>
            <p className="story-quote">
              🌿 "We don't just teach words; we nurture identity."
            </p>
          </div>

          {/* Timeline */}
          <div className="timeline">
            {timeline.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section about-vision-mission">
        <div className="container">
          <h2 className="section-title-center">Vision & Mission</h2>

          <div className="vision-mission-cards">
            <div className="vm-card">
              <h3>Vision</h3>
              <p>
                To create a world where every Indian, no matter where they live,
                feels connected to their culture through language, heritage, and
                shared learning.
              </p>
            </div>
            <div className="vm-card">
              <h3>Mission</h3>
              <p>
                To blend tradition with technology — making cultural learning
                accessible, interactive, and recognized globally.
              </p>
            </div>
          </div>

          {/* Beliefs Grid */}
          <div className="beliefs-section">
            <h3 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
              We Believe
            </h3>
            <div className="beliefs-grid">
              {beliefs.map((belief) => (
                <div key={belief.id} className="belief-item">
                  <span className="belief-icon">✨</span>
                  <p>{belief.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation & Affiliations */}
      <section className="section about-accreditation">
        <div className="container">
          <h2 className="section-title-center">🏆 Accreditation & Affiliations</h2>

          <div className="accreditation-cards">
            <div className="accred-card">
              <span className="accred-icon">🎓</span>
              <h3>Cognia Accreditation</h3>
              <p>
                VHS is Cognia-accredited, bringing global credibility to Indian
                language education.
              </p>
            </div>
            <div className="accred-card">
              <span className="accred-icon">🏅</span>
              <h3>Credit Program</h3>
              <p>
                Our Credit Program (US ISDs) lets students earn official school credits
                while exploring Hindi and Indian culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section about-leadership" id="leadership">
        <div className="container">
          <h2 className="section-title-center">👥 Leadership Team</h2>
          <p className="section-subtitle">
            VHS is led by a passionate team of educators and innovators who believe
            in bringing India's wisdom to the world.
          </p>

          <div className="grid grid-3">
            {leadershipTeam.map((leader) => (
              <Card
                key={leader.id}
                icon="👤"
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
      <section className="section about-partners">
        <div className="container">
          <h2 className="section-title-center">🤝 Partners & Supporters</h2>
          <p style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
            We proudly collaborate with:
          </p>

          <div className="partners-box">
            <div className="partner-item">
              <span>🏫</span>
              <p>Independent School Districts (US)</p>
            </div>
          </div>

          <p className="partners-closing">
            🌏 Together, we bring India's story to the world.
          </p>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="section about-testimonials">
        <div className="container">
          <h2 className="section-title-center">Student Testimonials</h2>
          <Carousel items={testimonialsData} autoRotate={true} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="about-final-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join a global movement of cultural learning.</h2>
            <p>Help your child stay rooted, expressive, and connected.</p>
            <a href="/programs" className="btn-primary">
              Enroll Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
