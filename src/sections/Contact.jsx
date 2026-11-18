
import { useState } from 'react';
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setStatus('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !formData.name.trim() ||
      !emailPattern.test(formData.email) ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus('error');
      return;
    }

    setStatus('success');

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <span className="section-tag">GET IN TOUCH</span>
          <h2>Let's Build Something <span>Great</span></h2>
          <p>
            Have an idea or project in mind?
            Let's work together and bring it to life.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">
            <span className="contact-small-tag">CONTACT US</span>
            <h3>Let's Start a <span>Conversation</span></h3>
            <p>
              We're always excited to hear about new ideas,
              creative projects and opportunities.
            </p>

            <div className="contact-detail">
              <Mail size={21} />
              <div>
                <span>Email</span>
                <p>Let's connect through our contact form.</p>
              </div>
            </div>

            <div className="contact-detail">
              <MapPin size={21} />
              <div>
                <span>Our Approach</span>
                <p>Creative ideas. Smart digital solutions.</p>
              </div>
            </div>

            <div className="contact-bottom">
              <span>HAVE A PROJECT IN MIND?</span>
              <ArrowUpRight size={22} />
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Send Us a Message</h3>
            <p>Fill out the form below and tell us about your project.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  placeholder="What is your project about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === 'success' && (
                <div className="form-success" role="status">
                  Your message has passed validation successfully!
                </div>
              )}

              {status === 'error' && (
                <div className="form-error" role="alert">
                  Please enter valid information in all fields.
                </div>
              )}

              <button type="submit" className="contact-submit">
                Send Message <Send size={17} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
