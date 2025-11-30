import React, { useEffect, useState } from 'react';
import Accordion from '../components/Accordion';
import '../styles/programs.css';

export default function Programs() {
  useEffect(() => {
    document.title = 'Programs - Vedic Hindi School';
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCommunity, setSelectedCommunity] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 10,
        y: (e.clientY / window.innerHeight) * 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const studentPrograms = [
    {
      id: 1,
      icon: '🏅',
      title: 'Credit Program (US ISDs)',
      description: 'Student earns official US school credits',
      accent: 'अ',
    },
    {
      id: 2,
      icon: '🎉',
      title: 'Annual Program',
      description: '12-month cultural immersion',
      accent: 'क',
    },
    {
      id: 3,
      icon: '🌈',
      title: 'Early Learning Immersion',
      description: 'Story-based Hindi & culture',
      accent: 'ह',
    },
    {
      id: 4,
      icon: '📘',
      title: 'Courses (All Ages)',
      description: 'Language + culture modules',
      accent: 'ल',
    },
  ];

  const teacherPrograms = [
    {
      id: 1,
      icon: '🎓',
      title: 'VHS Educator Certification',
      description: 'Global certification to teach Hindi & culture',
    },
    {
      id: 2,
      icon: '📝',
      title: 'Professional Development Workshops',
      description: 'Pedagogy-focused training for teachers',
    },
  ];

  const communityPrograms = [
    {
      id: 1,
      icon: '👥',
      title: 'Community Teaching Circles',
      description: 'Small group learning',
    },
    {
      id: 2,
      icon: '👨‍👩‍👧',
      title: 'Parent-Led Learning Clubs',
      description: 'Family learning together',
    },
    {
      id: 3,
      icon: '🎭',
      title: 'Cultural Storytelling Workshops',
      description: 'Story-based learning',
    },
    {
      id: 4,
      icon: '🌟',
      title: 'Train-the-Mentor Program',
      description: 'Leadership development',
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
      {/* Custom Hero Section */}
      <section className="programs-hero">
        <div className="programs-hero-bg">
          <div className="gradient-animated"></div>
          <div className="devanagari-overlay">
            <span
              className="devanagari-char"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
            >
              अ
            </span>
            <span
              className="devanagari-char"
              style={{
                transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
                animationDelay: '0.5s',
              }}
            >
              क
            </span>
            <span
              className="devanagari-char"
              style={{
                transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)`,
                animationDelay: '1s',
              }}
            >
              ह
            </span>
            <span
              className="devanagari-char"
              style={{
                transform: `translate(${mousePosition.x * 0.9}px, ${mousePosition.y * 0.9}px)`,
                animationDelay: '1.5s',
              }}
            >
              ल
            </span>
          </div>
        </div>

        <div className="container">
          <div className="programs-hero-content">
            <div className="programs-hero-left">
              <h1 className="programs-hero-title">
                Programs that connect identity, culture & learning.
              </h1>
              <p className="programs-hero-subtitle">
                Explore immersive programs for students, educators & community
                leaders across the world.
              </p>
              <div className="programs-hero-buttons">
                <a href="#student-programs" className="btn-programs-primary">
                  Explore Student Tracks
                </a>
                <a href="#teacher-programs" className="btn-programs-secondary">
                  Browse All Programs
                </a>
              </div>
            </div>
            <div className="programs-hero-right">
              <div className="hero-illustration">
                <div className="illustration-emoji">📚</div>
                <div className="floating-icons">
                  <span className="icon-float">👨‍🎓</span>
                  <span
                    className="icon-float"
                    style={{ animationDelay: '0.3s' }}
                  >
                    🎯
                  </span>
                  <span
                    className="icon-float"
                    style={{ animationDelay: '0.6s' }}
                  >
                    🌟
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Programs Section */}
      <section className="section programs-student" id="student-programs">
        <div className="container">
          <h2 className="section-title-center">Programs for Students</h2>
          <div className="student-programs-grid">
            {studentPrograms.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-card-bg">
                  <span className="program-accent">{program.accent}</span>
                </div>
                <div className="program-card-content">
                  <div className="program-icon">{program.icon}</div>
                  <h3 className="program-title">{program.title}</h3>
                  <p className="program-description">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Programs Section */}
      <section className="section programs-teacher" id="teacher-programs">
        <div className="container">
          <h2 className="section-title-center">Programs for Educators</h2>
          <div className="teacher-programs-stack">
            {teacherPrograms.map((program) => (
              <div key={program.id} className="teacher-program-card">
                <div className="teacher-card-content">
                  <div className="teacher-icon">{program.icon}</div>
                  <div className="teacher-text">
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <a href="#" className="program-link">
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Programs Section - Radial Layout */}
      <section className="section programs-community">
        <div className="container">
          <h2 className="section-title-center">Community Learning Ecosystem</h2>
          <div className="community-radial">
            <div className="community-center">
              <div className="center-label">
                Community Learning
                <br />
                Ecosystem
              </div>
            </div>
            <div className="community-orbits">
              {communityPrograms.map((program, idx) => (
                <div
                  key={program.id}
                  className="orbit-bubble"
                  style={{ '--orbit-index': idx }}
                  onClick={() =>
                    setSelectedCommunity(
                      selectedCommunity === program.id ? null : program.id,
                    )
                  }
                  role="button"
                  tabIndex={0}
                >
                  <div className="bubble-content">
                    <span className="bubble-icon">{program.icon}</span>
                    <h4>{program.title}</h4>
                    <p>{program.description}</p>
                  </div>
                  <div className="orbit-line"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section programs-faq">
        <div className="container">
          <h2 className="section-title-center">Frequently Asked Questions</h2>
          <div className="faq-wrapper">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="programs-final-cta">
        <div className="container">
          <h2>Ready to start your cultural learning journey?</h2>
          <p>Help your child stay rooted, expressive, and connected.</p>
          <a href="#" className="btn-cta-programs">
            Browse All Programs
          </a>
        </div>
      </section>
    </>
  );
}
