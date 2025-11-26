import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import Gallery from '../components/Gallery';
import Form from '../components/Form';

export default function Home() {
  useEffect(() => {
    document.title = 'Vedic Hindi School - Learn Language, Practice Culture';
  }, []);

  const testimonialsData = [
    {
      content: (
        <Testimonial
          quote="The programs here transformed my understanding of Hindi and Indian culture. Highly recommend!"
          author="Priya Sharma"
          role="Student"
          rating={5}
        />
      ),
    },
    {
      content: (
        <Testimonial
          quote="Excellent teaching methods and very supportive community. My children love attending classes."
          author="Rajesh Kumar"
          role="Parent"
          rating={5}
        />
      ),
    },
    {
      content: (
        <Testimonial
          quote="VHS helped me reconnect with my heritage. Worth every minute!"
          author="Ananya Patel"
          role="Student"
          rating={5}
        />
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Learn Language to Practise Culture and to Know Your Heritage"
        subtitle="Master Hindi through immersive learning and cultural exploration"
        ctas={[
          { label: 'Join a Class', href: '#programs', variant: 'btn-primary' },
          {
            label: 'Partner With Us',
            href: '/partnerships',
            variant: 'btn-outline',
          },
          {
            label: 'Volunteer',
            href: '#contact',
            variant: 'btn-outline',
          },
        ]}
      />

      {/* About Our Mission */}
      <section className="section about-mission-section">
        <div className="container">
          <div className="grid grid-2 about-grid">
            <div className="about-content">
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">
                Learn, Connect, Celebrate Heritage
              </h2>
              <p className="about-text">
                At Vedic Hindi School, we believe language is the gateway to
                culture. Our mission is to make Hindi learning accessible,
                engaging, and deeply rooted in Indian heritage.
              </p>
              <p className="about-text">
                Through innovative teaching methods and community-driven
                initiatives, we empower students worldwide to connect with their
                roots and appreciate the rich cultural traditions of India.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3 className="stat-number">500+</h3>
                  <p className="stat-label">Active Students</p>
                </div>
                <div className="stat">
                  <h3 className="stat-number">15+</h3>
                  <p className="stat-label">Expert Teachers</p>
                </div>
                <div className="stat">
                  <h3 className="stat-number">10+</h3>
                  <p className="stat-label">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop"
                alt="About Our Mission"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs and Services */}
      <section className="section programs-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Our Programs & Services</h2>
            <p className="section-description">
              Comprehensive learning experiences designed for all levels
            </p>
          </div>
          <div className="grid grid-3 programs-grid">
            <Card
              icon="📚"
              title="Language Courses"
              text="Structured Hindi learning from beginner to advanced levels"
              href="/programs"
              variant="language"
            />
            <Card
              icon="🎭"
              title="Cultural Events"
              text="Immersive experiences celebrating Indian festivals and traditions"
              href="/"
              variant="cultural"
            />
            <Card
              icon="👥"
              title="Community Learning"
              text="Interactive study circles and peer-to-peer learning groups"
              href="/"
              variant="community"
            />
          </div>
        </div>
      </section>

      {/* What Our Students Say */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Success Stories</span>
            <h2 className="section-title">What Our Students Say</h2>
            <p className="section-description">
              Hear from our thriving community of learners
            </p>
          </div>
          <Carousel items={testimonialsData} autoRotate={true} />
        </div>
      </section>

      {/* Join Our Community CTA */}
      <CTA
        title="Join Our Community"
        description="Be part of a vibrant network of Hindi learners and culture enthusiasts"
        buttonText="Get Started Today"
        href="/contact"
      />

      {/* Cultural Events Gallery */}
      <section className="section gallery-section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Community</span>
            <h2 className="section-title">Cultural Events Gallery</h2>
            <p className="section-description">
              Explore the vibrant moments from our events and celebrations
            </p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* Get in Touch */}
      <section className="section contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-description">
              We'd love to hear from you. Reach out with any questions!
            </p>
          </div>
          <div className="grid grid-2 contact-grid">
            <div className="contact-info">
              <h3 className="contact-title">Contact Information</h3>
              <div className="contact-item">
                <p className="contact-label">📍 Address</p>
                <p className="contact-value">
                  123 Cultural Center, Heritage City, India 100001
                </p>
              </div>
              <div className="contact-item">
                <p className="contact-label">✉️ Email</p>
                <a
                  href="mailto:info@vedichiindischool.org"
                  className="contact-link"
                >
                  info@vedichiindischool.org
                </a>
              </div>
              <div className="contact-item">
                <p className="contact-label">📱 Phone</p>
                <a href="tel:+1234567890" className="contact-link">
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
            <div className="contact-form">
              <h3 className="contact-title">Send us a Message</h3>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
