import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // TODO: Replace with actual API endpoint
      // const response = await fetch('/api/send', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // Simulate success for now
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'There was an error submitting your form. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      {status && (
        <div
          className={`alert alert-${status.type}`}
          role="alert"
          aria-live="polite"
        >
          {status.message}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name" className="form-label required">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label required">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="form-label required">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="How can we help?"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label required">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-textarea"
          placeholder="Your message..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={loading}
        style={{ width: '100%' }}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
