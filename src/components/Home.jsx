// src/components/Home.jsx
import React from 'react';
import { useNavigation } from '../contexts/NavigationContext';
import { useAuth } from '../contexts/AuthContext';
import { FiArrowRight, FiHeart, FiShield, FiUsers, FiVideo } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const { navigateTo } = useNavigation();
  const { user } = useAuth();

  return (
    <section id="home" className="home-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Mental Health <span className="highlight">Matters</span>
          </h1>
          <p className="hero-description">
            Comprehensive AI-powered mental health support designed specifically for students. 
            Get personalized care, crisis intervention, and wellness resources 24/7.
          </p>
          
          <div className="hero-actions">
            {user ? (
              <button 
                className="cta-button primary"
                onClick={() => navigateTo('dashboard')}
              >
                Go to Dashboard <FiArrowRight />
              </button>
            ) : (
              <>
                <button 
                  className="cta-button primary"
                  onClick={() => navigateTo('login')}
                >
                  Get Started <FiArrowRight />
                </button>
                <button 
                  className="cta-button secondary"
                  onClick={() => navigateTo('services')}
                >
                  Learn More
                </button>
              </>
            )}
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-cards">
            <div className="floating-card card-1">
              <FiHeart className="card-icon" />
              <span>Personalized Support</span>
            </div>
            <div className="floating-card card-2">
              <FiShield className="card-icon" />
              <span>Crisis Protection</span>
            </div>
            <div className="floating-card card-3">
              <FiUsers className="card-icon" />
              <span>Community</span>
            </div>
            <div className="floating-card card-4">
              <FiVideo className="card-icon" />
              <span>Resources</span>
            </div>
          </div>
        </div>
      </div>

      <div className="features-preview">
        <div className="container">
          <h2 className="section-title">Start Your Wellness Journey</h2>
          <p className="section-subtitle">
            Explore our comprehensive mental health resources designed for student life
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-wrapper ai">
                  <span>AI</span>
                </div>
              </div>
              <h3>AI-Powered Support</h3>
              <p>Adaptive emotional intelligence that learns your patterns and provides personalized guidance</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-wrapper crisis">
                  <FiShield />
                </div>
              </div>
              <h3>Crisis Detection</h3>
              <p>24/7 monitoring with instant emergency response and professional intervention when needed</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-wrapper community">
                  <FiUsers />
                </div>
              </div>
              <h3>Peer Network</h3>
              <p>Anonymous peer matching system that connects you with students sharing similar experiences</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-wrapper resources">
                  <FiVideo />
                </div>
              </div>
              <h3>Wellness Content</h3>
              <p>Curated therapeutic videos, meditation guides, and relaxation resources for daily practice</p>
            </div>
          </div>
          
          <div className="cta-section">
            <button 
              className="cta-button large"
              onClick={() => navigateTo('resources')} // ✅ Updated
            >
              Explore All Resources
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
