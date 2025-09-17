// src/components/Dashboard.jsx
import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import {
  FiSun,
  FiMoon,
  FiUser,
  FiActivity,
  FiBookOpen,
  FiVideo,
  FiMessageCircle,
  FiPhone,
  FiStar,
} from "react-icons/fi";
import CrisisModal from "./CrisisModal";
import RelaxationVideos from "./RelaxationVideos";
import SelfAssessment from "./SelfAssessment";
import AIAssistant from "./AIAssistant";
import "./Dashboard.css";

const Dashboard = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  const [activeFeature, setActiveFeature] = useState("ai-assistant");

  // Counselors data
  const counselors = [
    {
      name: "Career Mantrana",
      rating: "5.0/5 (2 ratings)",
      location: "Govind Nagar",
      phone: "+91 9731814361",
    },
    {
      name: "Destiny Planners",
      rating: "4.8/5 (1397 ratings)",
      location: "Indira Nagar Nashik",
      phone: "+91 9632894034",
    },
    {
      name: "Brain Checker Techno Services",
      rating: "4.9/5 (233 ratings)",
      location: "Govind Nagar",
      phone: "+91 9036116995",
    },
    {
      name: "Mind Search Counseling",
      rating: "4.8/5 (35 ratings)",
      location: "Indira Nagar Nashik",
      phone: "+91 9036192496",
    },
    {
      name: "Brain Mark Dermatoglyphics Pvt Ltd",
      rating: "-",
      location: "Govind Nagar",
      phone: "+91 9606958937",
    },
    {
      name: "Life Success",
      rating: "4.5/5 (26 ratings)",
      location: "Mahatma Nagar",
      phone: "+91 9606031889",
    },
    {
      name: "M B Patil Education Pvt Ltd",
      rating: "-",
      location: "Shivaji Chowk",
      phone: "+91 9845796157",
    },
  ];

  const renderActiveFeature = () => {
    switch (activeFeature) {
      case "ai-assistant":
        return <AIAssistant />;
      case "self-assessment":
        return <SelfAssessment />;
      case "relaxation-videos":
        return <RelaxationVideos />;
      case "resources":
        return (
          <div className="resource-section">
            <h3>Counseling Resources</h3>
            <p>Connect with reliable counseling centers near you:</p>

            <div className="counselor-list">
              {counselors.map((c, index) => (
                <div key={index} className="counselor-card">
                  <h4>{c.name}</h4>
                  <p>
                    <FiStar size={14} /> <strong>Rating:</strong> {c.rating}
                  </p>
                  <p>
                    📍 <strong>Location:</strong> {c.location}
                  </p>
                  <p>
                    <FiPhone size={14} />{" "}
                    <a href={`tel:${c.phone}`} className="phone-link">
                      {c.phone}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="main-header">
        <div className="welcome-section">
          <h1>Welcome back, Demo User</h1>
          <p className="welcome-subtitle">How are you feeling today?</p>
        </div>
      </header>

      {/* Main */}
      <main className="dashboard-main">
        {/* Feature navigation */}
        <div className="features-grid">
          <button
            className={`feature-card ${
              activeFeature === "ai-assistant" ? "active" : ""
            }`}
            onClick={() => setActiveFeature("ai-assistant")}
          >
            <FiMessageCircle size={20} />
            <h3>AI Assistant</h3>
            <p>Talk to our supportive AI about anything on your mind</p>
          </button>

          <button
            className={`feature-card ${
              activeFeature === "self-assessment" ? "active" : ""
            }`}
            onClick={() => setActiveFeature("self-assessment")}
          >
            <FiActivity size={20} />
            <h3>Self Assessment</h3>
            <p>Check in with your mental health status</p>
          </button>

          <button
            className={`feature-card ${
              activeFeature === "relaxation-videos" ? "active" : ""
            }`}
            onClick={() => setActiveFeature("relaxation-videos")}
          >
            <FiVideo size={20} />
            <h3>Relaxation Videos</h3>
            <p>Guided meditation and stress relief content</p>
          </button>

          <button
            className={`feature-card ${
              activeFeature === "resources" ? "active" : ""
            }`}
            onClick={() => setActiveFeature("resources")}
          >
            <FiBookOpen size={20} />
            <h3>Counseling Resources</h3>
            <p>Connect with professional help</p>
          </button>
        </div>

        {/* Render selected feature */}
        <div className="feature-content">
          <div className="feature-container">{renderActiveFeature()}</div>
        </div>
      </main>

      {/* Floating action buttons */}
      <div className="floating-actions">
        <button
          className="theme-toggle floating-btn"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>

        <button className="profile-btn floating-btn">
          <FiUser size={18} />
        </button>
      </div>

      <CrisisModal />
    </div>
  );
};

export default Dashboard;
