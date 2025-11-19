import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Form from '../components/Form';
import Map from '../components/Map';
import Accordion from '../components/Accordion';
import CTA from '../components/CTA';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us - Vedic Hindi School';
  }, []);

  const faqItems = [
    {
      title: 'What are your office hours?',
      content: 'We are open Monday-Friday, 9am-6pm IST. Emergency inquiries are handled on weekends.',
    },
    {
      title: 'How long does it take to get a response?',
      content: 'We aim to respond to all inquiries within 24 business hours.',
    },
    {
      title: 'What payment methods do you accept?',
      content: 'We accept credit cards, bank transfers, and digital payment methods like UPI.',
    },
    {
      title: 'Is there a refund policy?',
      content: 'Yes, we offer a 14-day money-back guarantee for our programs.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <Hero
        title="Get in Touch"
        subtitle="We'd love to hear from you"
      />

      {/* Contact Information & Form */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Contact Information</h2>

              <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>📍 Address</h3>
                <p>
                  Vedic Hindi School
                  <br />
                  123 Cultural Center
                  <br />
                  Heritage City, India 100001
                </p>
              </div>

              <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>📧 Email</h3>
                <a href="mailto:info@vedichiindischool.org">
                  info@vedichiindischool.org
                </a>
                <br />
                <a href="mailto:support@vedichiindischool.org">
                  support@vedichiindischool.org
                </a>
              </div>

              <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>📱 Phone</h3>
                <a href="tel:+1234567890">+1 (234) 567-8900</a>
                <br />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>

              <div>
                <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>⏰ Hours</h3>
                <p>Monday-Friday: 9:00 AM - 6:00 PM IST</p>
                <p>Saturday-Sunday: Closed (Emergency: Available)</p>
              </div>
            </div>

            <div>
              <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Send us a Message</h2>
              <Form />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section bg-light">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Find Us</h2>
          <Map iframeUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0886270231936!2d77.2099!3d28.6129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzQ3LjQiTiA3N8KwMTInMzUuNiJF!5e0!3m2!1sen!2sin!4v1234567890" />
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

      {/* Newsletter & Social CTA */}
      <CTA
        title="Stay Connected"
        description="Subscribe to our newsletter for updates, events, and exclusive content"
        buttonText="Subscribe Now"
        href="#newsletter"
      />
    </>
  );
}
