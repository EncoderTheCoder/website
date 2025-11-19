import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import Accordion from '../components/Accordion';

export default function Partnerships() {
  useEffect(() => {
    document.title = 'Partnerships - Vedic Hindi School';
  }, []);

  const processSteps = [
    {
      icon: '1️⃣',
      title: 'Contact Us',
      text: 'Reach out to discuss your institution\'s goals',
    },
    {
      icon: '2️⃣',
      title: 'Consultation',
      text: 'Collaborate to design a custom partnership model',
    },
    {
      icon: '3️⃣',
      title: 'Launch',
      text: 'Begin implementing programs with ongoing support',
    },
  ];

  const testimonialsData = [
    {
      content: (
        <Testimonial
          quote="VHS partnership elevated our language programs significantly."
          author="Dr. John Smith"
          role="School Director"
          rating={5}
        />
      ),
    },
    {
      content: (
        <Testimonial
          quote="Professional, reliable, and genuinely invested in our success."
          author="Maria Gonzalez"
          role="Community Coordinator"
          rating={5}
        />
      ),
    },
  ];

  const faqItems = [
    {
      title: 'What types of partnerships do you offer?',
      content:
        'We offer institutional partnerships for schools, universities, cultural centers, and corporate training programs.',
    },
    {
      title: 'What is the cost of a partnership?',
      content:
        'Partnership costs vary based on your institution\'s size and needs. We provide custom quotes.',
    },
    {
      title: 'How long is a typical partnership agreement?',
      content:
        'Our standard agreements are for 1-3 years with options to renew and expand.',
    },
    {
      title: 'Do you provide ongoing support?',
      content:
        'Yes, we offer continuous support including training, curriculum updates, and performance monitoring.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <Hero
        title="Partnership Opportunities"
        subtitle="Grow together with Vedic Hindi School"
      />

      {/* Benefits */}
      <section className="section bg-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            Partnership Benefits
          </h2>
          <div className="grid grid-2">
            <div>
              <h3>Why Partner With VHS?</h3>
              <ul style={{ lineHeight: '2' }}>
                <li>✓ Proven curriculum and teaching methodologies</li>
                <li>✓ Expert instructors and training support</li>
                <li>✓ Marketing and promotional assistance</li>
                <li>✓ Student recruitment support</li>
                <li>✓ Revenue-sharing opportunities</li>
                <li>✓ Continuous professional development</li>
              </ul>
            </div>
            <div style={{ backgroundColor: 'var(--color-background)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)' }}>
              <p>
                <strong>Our Commitment</strong>
              </p>
              <p>
                We are committed to your success. Our partnership model is
                designed to be mutually beneficial, with clear metrics and
                regular check-ins to ensure you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            Partnership Process
          </h2>
          <div className="grid grid-3">
            {processSteps.map((step, idx) => (
              <Card
                key={idx}
                icon={step.icon}
                title={step.title}
                text={step.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            What Our Partners Say
          </h2>
          <Carousel items={testimonialsData} autoRotate={true} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-2xl)' }}>
            Partnership FAQs
          </h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Join Network CTA */}
      <CTA
        title="Join Our Partner Network"
        description="Become part of the global VHS community and expand your impact"
        buttonText="Schedule a Consultation"
        href="/contact"
      />
    </>
  );
}
