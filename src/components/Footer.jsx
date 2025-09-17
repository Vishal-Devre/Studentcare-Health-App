import React from "react";
import { useNavigation } from "../contexts/NavigationContext";
import {
  FiHeart,
  FiMail,
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  const { navigateTo } = useNavigation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <div className="footer-logo" onClick={() => navigateTo("home")}>
                <span className="logo-icon">🧠</span>
                <span className="logo-text">MindBridge</span>
              </div>
              <p className="footer-description">
                Providing accessible mental health support for students through
                innovative technology and compassionate care. Your wellness
                journey starts here.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Twitter">
                  <FiTwitter size={18} />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <FiInstagram size={18} />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FiLinkedin size={18} />
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <FiGithub size={18} />
                </a>
                <a href="#" className="social-link" aria-label="Email">
                  <FiMail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => navigateTo("home")}>Home</button>
              </li>
              <li>
                <button onClick={() => navigateTo("about")}>About Us</button>
              </li>
              <li>
                <button onClick={() => navigateTo("resources")}>
                  Resources
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("contact")}>Contact</button>
              </li>
              <li>
                <button onClick={() => navigateTo("login")}>Login</button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => navigateTo("resources")}>
                  Wellness Videos
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("resources")}>
                  Meditation Guides
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("resources")}>
                  Articles & Blogs
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("resources")}>
                  Self-Assessment
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("resources")}>
                  Crisis Resources
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <FiMail className="contact-icon" />
                <div>
                  <p>Email Support</p>
                  <span>help@mindbridge.com</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <p>Phone Support</p>
                  <span>+1 (555) 123-HELP</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <p>Available</p>
                  <span>24/7 Crisis Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Resources */}
          <div className="footer-section">
            <h4 className="footer-title">Emergency Resources</h4>
            <div className="emergency-resources">
              <div className="emergency-item">
                <strong>National Suicide Prevention Lifeline</strong>
                <span>988</span>
              </div>
              <div className="emergency-item">
                <strong>Crisis Text Line</strong>
                <span>Text HOME to 741741</span>
              </div>
              <div className="emergency-item">
                <strong>Emergency Services</strong>
                <span>911</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>
                &copy; {currentYear} MindBridge. Made with{" "}
                <FiHeart className="heart-icon" /> for students everywhere.
              </p>
            </div>
            <div className="footer-legal">
              <button onClick={() => console.log("Privacy policy")}>
                Privacy Policy
              </button>
              <span className="divider">•</span>
              <button onClick={() => console.log("Terms of service")}>
                Terms of Service
              </button>
              <span className="divider">•</span>
              <button onClick={() => console.log("Cookie policy")}>
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;