// src/contexts/NavigationContext.jsx
import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (section) => {
    setCurrentSection(section);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const value = {
    currentSection,
    navigateTo,
    isMenuOpen,
    toggleMenu
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};