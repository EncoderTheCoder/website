import React from 'react';
import Testimonial from '../components/Testimonial';

export const teamMembers = [
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

export const testimonialsData = [
  {
    content: (
      <Testimonial
        key="student-aditya"
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
        key="parent-sneha"
        quote="Best investment for my children's cultural education."
        author="Sneha Mittal"
        role="Parent"
        rating={5}
      />
    ),
  },
];