// src/components/Login.jsx
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext.jsx';
import { FiSun, FiMoon, FiMail, FiLock, FiUser, FiBook } from 'react-icons/fi';
import './Login.css';

const Login = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    studentId: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login, signup } = useAuth();
  const { theme, toggleTheme, isDarkMode } = useTheme();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Bypass actual authentication - always login successfully
      const userData = {
        email: formData.email || 'demo@student.edu',
        name: formData.name || 'Demo User',
        studentId: formData.studentId || 'STU12345'
      };
      
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Update auth context
      if (isLogin) {
        await login(userData.email, formData.password);
      } else {
        await signup(userData);
      }
      
      // Call onLogin callback if provided
      if (onLogin && typeof onLogin === 'function') {
        onLogin();
      }
    } catch (error) {
      console.error('Login error:', error);
      // This should never happen now, but just in case
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      // Bypass authentication for demo login
      const userData = {
        email: 'demo@student.edu',
        name: 'Demo User',
        studentId: 'STU12345'
      };
      
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Update auth context
      await login(userData.email, 'password123');
      
      // Call onLogin callback if provided
      if (onLogin && typeof onLogin === 'function') {
        onLogin();
      }
    } catch (error) {
      console.error('Demo login error:', error);
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="theme-toggle-login">
        <button 
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
      </div>
      
      <div className="login-card">
        <div className="login-header">
          <h1>MindBridge</h1>
          <p>Mental Health Support for Students</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          {!isLogin && (
            <>
              <div className="form-group with-icon">
                <FiUser className="input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group with-icon">
                <FiBook className="input-icon" />
                <input
                  type="text"
                  name="studentId"
                  placeholder="Student ID"
                  value={formData.studentId}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
          
          <div className="form-group with-icon">
            <FiMail className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group with-icon">
            <FiLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          
          <button 
            type="submit" 
            className="login-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="button-spinner"></div>
            ) : (
              isLogin ? 'Sign In' : 'Create Account'
            )}
          </button>
        </form>
        
        {isLogin && (
          <div className="demo-login-section">
            <button 
              className="demo-login-btn"
              onClick={handleDemoLogin}
              type="button"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Use Demo Account'}
            </button>
          </div>
        )}
        
        <div className="login-footer">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span 
              className="toggle-mode"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </span>
          </p>
          
          {isLogin && (
            <div className="demo-hint">
              <p>Any email/password will work for login</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Add default props in case onLogin is not provided
Login.defaultProps = {
  onLogin: () => {} // Empty function as default
};

export default Login;