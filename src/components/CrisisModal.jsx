import React from 'react';
import { useCrisis } from '../contexts/CrisisContext';
import { FiPhone, FiMessageCircle, FiHeart, FiX } from 'react-icons/fi';
import './CrisisModal.css';

const CrisisModal = () => {
  const { isCrisisDetected, resolveCrisis } = useCrisis();

  if (!isCrisisDetected) return null;

  const emergencyContacts = [
    { name: "National Suicide Prevention Lifeline", number: "988", icon: <FiPhone /> },
    { name: "Crisis Text Line", number: "Text HOME to 741741", icon: <FiMessageCircle /> },
    { name: "Emergency Services", number: "911", icon: <FiHeart /> }
  ];

  return (
    <div className="crisis-modal-overlay">
      <div className="crisis-modal">
        <div className="crisis-header">
          <h2>Immediate Support Available</h2>
          <p>We're here to help you through this difficult moment</p>
          <button className="close-button" onClick={resolveCrisis}>
            <FiX size={20} />
          </button>
        </div>
        
        <div className="crisis-content">
          <div className="emergency-contacts">
            <h3>Emergency Contacts</h3>
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">{contact.icon}</div>
                <div className="contact-info">
                  <h4>{contact.name}</h4>
                  <p>{contact.number}</p>
                </div>
                <button className="call-btn">
                  {contact.number === "911" ? "Call" : "Connect"}
                </button>
              </div>
            ))}
          </div>
          
          <div className="crisis-resources">
            <h3>Immediate Help</h3>
            <button className="resource-btn">Talk to a Counselor Now</button>
            <button className="resource-btn">Crisis Chat</button>
            <button className="resource-btn">Safety Planning</button>
          </div>
        </div>
        
        <div className="crisis-footer">
          <button className="resolve-btn" onClick={resolveCrisis}>
            I've gotten help
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrisisModal;