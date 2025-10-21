import React from 'react';
import { FiTarget, FiEye, FiHeart, FiUsers, FiClock, FiBarChart } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">About MindBridge</h2>
          <p className="section-subtitle">
            Bridging the gap between mental health support and student life
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="mission-statement">
              <h3>Our Mission</h3>
              <p>
                MindBridge was created to address the growing mental health challenges 
                faced by students in higher education. We believe every student deserves 
                accessible, immediate, and effective mental health support tailored to 
                their unique academic journey.
              </p>
              <p>
                Our platform combines cutting-edge AI technology with evidence-based 
                therapeutic practices to provide comprehensive mental health support 
                that's available 24/7, right when students need it most.
              </p>
            </div>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">
                  <FiUsers />
                </div>
                <div className="stat-number">72%</div>
                <div className="stat-label">of students report mental health issues affecting academic performance</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <FiClock />
                </div>
                <div className="stat-number">24/7</div>
                <div className="stat-label">AI-powered support available anytime, anywhere</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <FiBarChart />
                </div>
                <div className="stat-number">1000+</div>
                <div className="stat-label">therapeutic resources and guided sessions</div>
              </div>
            </div>
          </div>
          
          <div className="about-values">
            <h3>Our Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">
                  <FiTarget />
                </div>
                <h4>Accessibility</h4>
                <p>Making mental health support available to every student, regardless of location or schedule. We break down barriers to access through technology.</p>
              </div>
              
              <div className="value-item">
                <div className="value-icon">
                  <FiEye />
                </div>
                <h4>Innovation</h4>
                <p>Leveraging AI and technology to provide personalized, adaptive support systems that evolve with each student's needs.</p>
              </div>
              
              <div className="value-item">
                <div className="value-icon">
                  <FiHeart />
                </div>
                <h4>Compassion</h4>
                <p>Creating a safe, non-judgmental space for students to seek help and healing. We prioritize empathy in every interaction.</p>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h3>Our Approach</h3>
            <div className="approach-grid">
              <div className="approach-item">
                <div className="approach-number">01</div>
                <h4>AI-Powered Support</h4>
                <p>Our intelligent system learns from each interaction to provide increasingly personalized guidance and resources.</p>
              </div>
              
              <div className="approach-item">
                <div className="approach-number">02</div>
                <h4>Evidence-Based Methods</h4>
                <p>All our therapeutic content is based on proven psychological techniques like CBT, mindfulness, and positive psychology.</p>
              </div>
              
              <div className="approach-item">
                <div className="approach-number">03</div>
                <h4>Continuous Improvement</h4>
                <p>We constantly update our platform based on user feedback and the latest mental health research.</p>
              </div>
              
              <div className="approach-item">
                <div className="approach-number">04</div>
                <h4>Community Building</h4>
                <p>Creating supportive peer networks where students can share experiences and support each other.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;