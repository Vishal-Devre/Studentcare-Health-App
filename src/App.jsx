// src/App.jsx
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { AuthProvider } from "./contexts/AuthContext";
import { CrisisProvider } from "./contexts/CrisisContext";
import { NavigationProvider } from "./contexts/NavigationContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { useNavigation } from "./contexts/NavigationContext";
import { useAuth } from "./contexts/AuthContext";
import "./App.css";

// Main content router
const ContentRouter = () => {
  const { currentSection, navigateTo } = useNavigation();
  const { user } = useAuth();

  const handleLoginSuccess = () => {
    navigateTo("dashboard");
  };

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "resources":
        return <Resources />;
      case "contact":
        return <Contact />;
      case "dashboard":
        return user ? (
          <Dashboard onLogout={() => navigateTo("home")} />
        ) : (
          <Home />
        );
      case "login":
        return <Login onLogin={handleLoginSuccess} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-content">
      {renderSection()}
      {!["dashboard", "login"].includes(currentSection) && <Footer />}
    </div>
  );
};

// Main App component
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ThemeProvider>
      <CrisisProvider>
        <AuthProvider>
          <NavigationProvider>
            <div className="App">
              <Navbar />
              <ContentRouter />
            </div>
          </NavigationProvider>
        </AuthProvider>
      </CrisisProvider>
    </ThemeProvider>
  );
}
export default App;
