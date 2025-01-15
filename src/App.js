/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Projects from "./components/Projects";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Sidebar from "./components/Sidebar";
// import Loader from "./components/SkeletonLoader";
// import SwitchOrientation from "./components/SwitchOrientation";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [navLinkClicked, setNavLinkClicked] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [showLandscapeMessage, setShowLandscapeMessage] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//     setNavLinkClicked(true);
//   };

//   const isMobileOrTablet = () => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     return (
//       (width <= 1023 && height <= 1367) || // Common tablet dimensions
//       (width <= 768) // Mobile dimensions
//     );
//   };

//   const checkMobileLandscape = () => {
//     const isLandscape = window.matchMedia("(orientation: landscape)").matches;

//     // Show message if the device is a mobile or tablet and in landscape mode
//     setShowLandscapeMessage(isMobileOrTablet() && isLandscape);
//   };

//   useEffect(() => {
//     // Initial check
//     checkMobileLandscape();

//     // Listen for orientation or resize changes
//     window.addEventListener("resize", checkMobileLandscape);
//     window.addEventListener("orientationchange", checkMobileLandscape);

//     // Cleanup listeners on component unmount
//     return () => {
//       window.removeEventListener("resize", checkMobileLandscape);
//       window.removeEventListener("orientationchange", checkMobileLandscape);
//     };
//   }, []);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false); // Simulate loader delay
//     }, 1000);
//   }, []);

//   if (showLandscapeMessage) {
//     return (
//       <div className="error-page">
//         <SwitchOrientation />
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <div>
//         {loading ? (
//           <Loader />
//         ) : (
//           <>
//             <Navbar
//               toggleSidebar={toggleSidebar}
//               navLinks={[
//                 { to: "/", text: "Home" },
//                 { to: "/projects", text: "Projects" },
//                 { to: "/about", text: "About" },
//                 { to: "/contact", text: "Contact" },
//               ]}
//               navLinkClicked={navLinkClicked}
//             />

//             <Routes>
//               <Route
//                 exact
//                 path="/"
//                 element={
//                   <>
//                     <Hero />
//                     <Sidebar isOpen={isOpen} />
//                   </>
//                 }
//               />
//               <Route
//                 path="/projects"
//                 element={
//                   <>
//                     <Projects toggleSidebar={toggleSidebar} />
//                     <Sidebar isOpen={isOpen} />
//                   </>
//                 }
//               />
//               <Route
//                 path="/about"
//                 element={
//                   <>
//                     <About toggleSidebar={toggleSidebar} />
//                     <Sidebar isOpen={isOpen} />
//                   </>
//                 }
//               />
//               <Route
//                 path="/contact"
//                 element={
//                   <>
//                     <Contact toggleSidebar={toggleSidebar} />
//                     <Sidebar isOpen={isOpen} />
//                   </>
//                 }
//               />
//             </Routes>
//           </>
//         )}
//       </div>
//     </Router>
//   );
// };

// export default App;


import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Loader from "./components/SkeletonLoader";
import SwitchOrientation from "./components/SwitchOrientation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showLandscapeMessage, setShowLandscapeMessage] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isMobileOrTablet = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return (
      (width <= 1023 && height <= 1367) || // Common tablet dimensions
      (width <= 768) // Mobile dimensions
    );
  };

  const checkMobileLandscape = () => {
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;

    // Show message if the device is a mobile or tablet and in landscape mode
    setShowLandscapeMessage(isMobileOrTablet() && isLandscape);
  };

  useEffect(() => {
    // Initial check
    checkMobileLandscape();

    // Listen for orientation or resize changes
    window.addEventListener("resize", checkMobileLandscape);
    window.addEventListener("orientationchange", checkMobileLandscape);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("resize", checkMobileLandscape);
      window.removeEventListener("orientationchange", checkMobileLandscape);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulate loader delay
    }, 1000);
  }, []);

  if (showLandscapeMessage) {
    return (
      <div className="error-page">
        <SwitchOrientation />
      </div>
    );
  }

  return (
    <Router>
      <div>
        {loading ? (
          <Loader />
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
            />

            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <Hero />
                  </>
                }
              />
              <Route
                path="/projects"
                element={
                  <>
                    <Projects />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <About />
                  </>
                }
              />
              <Route
                path="/contact"
                element={
                  <>
                    <Contact />
                  </>
                }
              />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
