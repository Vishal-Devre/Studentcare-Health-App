// src/components/Navbar.jsx
import React from "react";
import { useNavigation } from "../contexts/NavigationContext";
import { useTheme } from "../contexts/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const { currentSection, navigateTo, isMenuOpen, toggleMenu } =
    useNavigation();
  const { isDarkMode, toggleTheme } = useTheme();

  // Nav items (no login/logout)
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resources", label: "Resources" },
    { id: "contact", label: "Contact" },
    { id: "dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => navigateTo("home")}>
          <span className="logo-icon">🧠</span>
          <span className="logo-text">MindBridge</span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item ${
                currentSection === item.id ? "active" : ""
              }`}
              onClick={() => navigateTo(item.id)}
            >
              {item.label}
            </div>
          ))}

          <button className="theme-toggle-nav" onClick={toggleTheme}>
            {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
