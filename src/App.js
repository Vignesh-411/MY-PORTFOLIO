import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Loader from "./components/SkeletonLoader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navLinkClicked, setNavLinkClicked] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setNavLinkClicked(true);
  };

  // Simulate a data fetch or API call
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // After 3 seconds, hide the loader
    }, 0);
  }, []);

  return (
    <>
      <Router>
        <div>
          {loading ? (
            <Loader /> // Show loader while loading
          ) : (
            <>
              <Navbar
                toggleSidebar={toggleSidebar}
                navLinks={[
                  { to: "/", text: "Home" },
                  { to: "/projects", text: "Projects" },
                  { to: "/about", text: "About" },
                  { to: "/contact", text: "Contact" },
                ]}
                navLinkClicked={navLinkClicked}
              />

              <Routes>
                <Route exact path="/" element={<><Hero /><Sidebar isOpen={isOpen} /></>} />
                <Route path="/projects" element={<><Projects toggleSidebar={toggleSidebar} /><Sidebar isOpen={isOpen} /></>} />
                <Route path="/about" element={<><About toggleSidebar={toggleSidebar} /><Sidebar isOpen={isOpen} /></>} />
                <Route path="/contact" element={<><Contact toggleSidebar={toggleSidebar} /><Sidebar isOpen={isOpen} /></>} />
              </Routes>
            </>
          )}
        </div>
      </Router>
    </>
  );
};

export default App;
