// src/contexts/CrisisContext.jsx
import React, { createContext, useContext, useState } from 'react';

const CrisisContext = createContext();

export const useCrisis = () => {
  const context = useContext(CrisisContext);
  if (!context) {
    throw new Error('useCrisis must be used within a CrisisProvider');
  }
  return context;
};

export const CrisisProvider = ({ children }) => {
  const [isCrisisDetected, setIsCrisisDetected] = useState(false);
  const [crisisKeywords] = useState([
    'suicide', 'kill myself', 'end it all', 'want to die', 
    'self harm', 'hurt myself', 'no reason to live', 'better off dead'
  ]);

  const detectCrisis = (text) => {
    if (!text) return false;
    
    const lowerText = text.toLowerCase();
    const detected = crisisKeywords.some(keyword => 
      lowerText.includes(keyword.toLowerCase())
    );
    
    if (detected) {
      setIsCrisisDetected(true);
      return true;
    }
    return false;
  };

  const resolveCrisis = () => {
    setIsCrisisDetected(false);
  };

  const value = {
    isCrisisDetected,
    detectCrisis,
    resolveCrisis
  };

  return (
    <CrisisContext.Provider value={value}>
      {children}
    </CrisisContext.Provider>
  );
};