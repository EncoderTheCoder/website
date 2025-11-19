import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Accordion from '../components/Accordion';
import Carousel from '../components/Carousel';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';

export default function Knowledge() {
  useEffect(() => {
    document.title = 'Knowledge Hub - Vedic Hindi School';
  }, []);

  const faqItems = [
    {
      title: 'How do I access the resources?',
      content:
        'All resources are available to registered members. Create a free account to get started.',
    },
    {
      title: 'Can I download materials?',
      content:
        'Yes, most materials are available for download in PDF and other formats.',
    },
    {
      title: 'Are there resources for teachers?',
      content:
        'Yes, we have dedicated resources for educators including lesson plans and teaching guides.',
    },
    {
      title: 'How often are new resources added?',
      content:
        'We add new resources weekly, including articles, videos, and interactive materials.',
    },
  ];

  const testimonialsData = [
    {
      content: (
        <Testimonial
          quote="The Knowledge Hub resources helped me prepare for my Hindi exam!"
          author="Arjun Verma"
          role="Student"
          rating={5}
        />
      ),
    },
    {
      content: (
        <Testimonial
          quote="Excellent materials for teaching. Highly professional."
          author="Dr. Lakshmi Iyer"
          role="Educator"
          rating={5}
        />
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <Hero
        title="Knowledge Hub"
        subtitle="Your gateway to Hindi learning resources"
      />

      {/* Explore Resources */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Explore Resources</h2>
          <div className="grid grid-2">
            <div>
              <h3>Available Categories:</h3>
              <ul style={{ lineHeight: '2' }}>
                <li>📖 Grammar Guides</li>
                <li>🎤 Pronunciation Guides</li>
                <li>📝 Vocabulary Lists</li>
                <li>🎥 Video Tutorials</li>
                <li>🎵 Music & Poetry</li>
                <li>📰 News Articles (in Hindi)</li>
                <li>📚 Textbooks & Workbooks</li>
                <li>👨‍🏫 Teaching Resources</li>
              </ul>
            </div>
            <div>
              <p>
                <strong>Our collection includes:</strong>
              </p>
              <p>
                Thousands of learning resources created by our expert team and
                community members. From beginner basics to advanced literature,
                we have something for everyone.
              </p>
              <p>
                <em>All resources are aligned with international Hindi learning
                standards and competency frameworks.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="section bg-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            Latest Articles
          </h2>
          <div className="grid grid-3">
            <Card
              icon="📄"
              title="Hindi Grammar Essentials"
              text="Master the fundamentals of Hindi grammar structure and usage"
            />
            <Card
              icon="📄"
              title="Cultural Expressions"
              text="Understand idioms and expressions unique to Indian culture"
            />
            <Card
              icon="📄"
              title="Modern Hindi Usage"
              text="Learn contemporary Hindi usage in media and daily life"
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

      {/* What Users Say */}
      <section className="section bg-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            What Users Say
          </h2>
          <Carousel items={testimonialsData} autoRotate={true} />
        </div>
      </section>

      {/* Join Community CTA */}
      <CTA
        title="Join Our Learning Community"
        description="Access premium resources and connect with thousands of Hindi learners"
        buttonText="Sign Up for Free"
        href="/contact"
      />
    </>
  );
}
