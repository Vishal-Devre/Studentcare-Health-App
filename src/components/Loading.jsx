// src/components/Loading.jsx
import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
      <div className="loading-text">
        <h2>MindBridge</h2>
        <p>Connecting you to support</p>
      </div>
    </div>
  );
};

export default Loading;