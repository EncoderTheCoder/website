import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import CTA from '../components/CTA';
import Accordion from '../components/Accordion';

export default function Programs() {
  useEffect(() => {
    document.title = 'Programs - Vedic Hindi School';
  }, []);

  const creditPrograms = [
    {
      icon: '🎓',
      title: 'Beginner Course',
      text: 'Master Hindi fundamentals from scratch',
    },
    {
      icon: '📖',
      title: 'Intermediate Course',
      text: 'Develop fluency and cultural understanding',
    },
    {
      icon: '🏆',
      title: 'Advanced Course',
      text: 'Achieve mastery and certification',
    },
  ];

  const faqItems = [
    {
      title: 'What is the course duration?',
      content:
        'Our programs range from 12 weeks for intensive courses to 6 months for comprehensive learning.',
    },
    {
      title: 'Do you offer certificates?',
      content:
        'Yes, all our programs conclude with a recognized certificate of completion.',
    },
    {
      title: 'What is the class size?',
      content:
        'We maintain small class sizes (8-15 students) for personalized attention.',
    },
    {
      title: 'Can I attend classes if I am working?',
      content:
        'Absolutely! We offer flexible schedules including evening and weekend classes.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <Hero
        title="Our Programs"
        subtitle="Choose a learning path that fits your goals"
      />

      {/* Program Overview */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Program Overview</h2>
          <div className="grid grid-2">
            <div>
              <h3>Why Learn Hindi with Us?</h3>
              <ul style={{ lineHeight: '2' }}>
                <li>✓ Expert instructors with proven teaching experience</li>
                <li>✓ Culturally immersive learning materials</li>
                <li>✓ Flexible scheduling options</li>
                <li>✓ Community engagement opportunities</li>
                <li>✓ Career advancement support</li>
                <li>✓ Lifetime access to course materials</li>
              </ul>
            </div>
            <img
              src="https://via.placeholder.com/400x300?text=Learning+Experience"
              alt="Learning Experience"
              style={{
                borderRadius: 'var(--radius-lg)',
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </section>

      {/* Credit Programs */}
      <section className="section bg-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            Student Credit Programs
          </h2>
          <div
            style={{
              backgroundColor: '#e8f5e9',
              padding: 'var(--spacing-lg)',
              borderRadius: 'var(--radius-lg)',
              marginBottom: 'var(--spacing-2xl)',
              borderLeft: '4px solid var(--color-secondary)',
            }}
          >
            <p>
              <strong>✓ Check Credit Eligibility</strong> - Find out if your
              current education transfers toward a VHS credential.
            </p>
          </div>
          <div className="grid grid-3">
            {creditPrograms.map((program, idx) => (
              <Card
                key={idx}
                icon={program.icon}
                title={program.title}
                text={program.text}
                href="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Certification */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Teacher Certification</h2>
          <div className="grid grid-2">
            <img
              src="https://via.placeholder.com/400x300?text=Teacher+Training"
              alt="Teacher Certification"
              style={{
                borderRadius: 'var(--radius-lg)',
                width: '100%',
                height: 'auto',
              }}
            />
            <div>
              <p>
                Our teacher certification program trains educators to inspire
                Hindi learners worldwide. Become a certified VHS instructor and
                make an impact.
              </p>
              <h3>Program Includes:</h3>
              <ul>
                <li>Pedagogy and teaching methodology</li>
                <li>Cultural competency training</li>
                <li>Curriculum development skills</li>
                <li>Assessment and evaluation techniques</li>
                <li>Mentorship from experienced educators</li>
              </ul>
              <button className="btn btn-primary" style={{ marginTop: 'var(--spacing-lg)' }}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Teaching Circles */}
      <section className="section bg-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            Community Teaching Circles
          </h2>
          <div className="grid grid-3">
            <Card
              icon="👥"
              title="Small Groups"
              text="Learn together with peers in supportive communities"
            />
            <Card
              icon="💬"
              title="Peer Support"
              text="Share experiences and grow as a collective"
            />
            <Card
              icon="🌍"
              title="Global Network"
              text="Connect with learners from around the world"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-2xl)' }}>
            Frequently Asked Questions
          </h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Join CTA */}
      <CTA
        title="Ready to Start Your Journey?"
        description="Enroll in a program that matches your learning goals"
        buttonText="Browse All Programs"
        href="/contact"
      />
    </>
  );
}
