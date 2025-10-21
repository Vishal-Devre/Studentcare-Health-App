import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageCircle, FiClock } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            We're here to help. Reach out to us with questions, feedback, or partnership inquiries.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to us through any of these channels:</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <FiMail />
                </div>
                <div className="method-details">
                  <h4>Email Us</h4>
                  <p>support@mindbridge.com</p>
                  <span>We'll respond within 24 hours</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <FiPhone />
                </div>
                <div className="method-details">
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-HELP</p>
                  <span>Mon-Fri, 9AM-6PM EST</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <FiMessageCircle />
                </div>
                <div className="method-details">
                  <h4>Live Chat</h4>
                  <p>Available on platform</p>
                  <span>24/7 for urgent matters</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <FiMapPin />
                </div>
                <div className="method-details">
                  <h4>Visit Us</h4>
                  <p>123 Wellness Avenue</p>
                  <span>Tech City, TC 12345</span>
                </div>
              </div>
            </div>
            
            <div className="emergency-notice">
              <div className="emergency-icon">
                <FiClock />
              </div>
              <div className="emergency-content">
                <h4>Emergency Support</h4>
                <p>If you're experiencing a mental health crisis, please contact emergency services immediately or use our crisis chat feature in the app.</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Send us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="button-spinner"></div>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  <p>✅ Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}
            </form>
          </div>
        </div>
        
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Is MindBridge free to use?</h4>
              <p>Yes, MindBridge is completely free for students. We believe mental health support should be accessible to everyone.</p>
            </div>
            
            <div className="faq-item">
              <h4>How does the AI assistant work?</h4>
              <p>Our AI uses natural language processing to understand your concerns and provide evidence-based support and resources.</p>
            </div>
            
            <div className="faq-item">
              <h4>Is my data private and secure?</h4>
              <p>Absolutely. We use end-to-end encryption and never share your personal information with third parties.</p>
            </div>
            
            <div className="faq-item">
              <h4>Can I use MindBridge anonymously?</h4>
              <p>Yes, you can use many features without creating an account. For personalized features, we only require minimal information.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;