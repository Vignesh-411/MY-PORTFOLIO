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

//   const checkLaptopLandscape = () => {
//     const isLaptop = window.innerWidth > 1024 && window.innerWidth <= 1440; // Common laptop widths
//     const isLandscape = window.matchMedia("(orientation: landscape)").matches;

//     setShowLandscapeMessage(isLaptop && isLandscape);
//   };

//   useEffect(() => {
//     // Initial check
//     checkLaptopLandscape();

//     // Listen for orientation or resize changes
//     window.addEventListener("resize", checkLaptopLandscape);
//     window.addEventListener("orientationchange", checkLaptopLandscape);

//     // Cleanup listeners on component unmount
//     return () => {
//       window.removeEventListener("resize", checkLaptopLandscape);
//       window.removeEventListener("orientationchange", checkLaptopLandscape);
//     };
//   }, []);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false); // After 3 seconds, hide the loader
//     }, 0);
//   }, []);

//   if (showLandscapeMessage) {
//     // Render error page for laptop landscape mode
//     return (
//       <div className="error-page">
//         <h1>Please switch to portrait mode for the best experience on laptops.</h1>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Router>
//         <div>
//           {loading ? (
//             <Loader /> // Show loader while loading
//           ) : (
//             <>
//               <Navbar
//                 toggleSidebar={toggleSidebar}
//                 navLinks={[
//                   { to: "/", text: "Home" },
//                   { to: "/projects", text: "Projects" },
//                   { to: "/about", text: "About" },
//                   { to: "/contact", text: "Contact" },
//                 ]}
//                 navLinkClicked={navLinkClicked}
//               />

//               <Routes>
//                 <Route
//                   exact
//                   path="/"
//                   element={
//                     <>
//                       <Hero />
//                       <Sidebar isOpen={isOpen} />
//                     </>
//                   }
//                 />
//                 <Route
//                   path="/projects"
//                   element={
//                     <>
//                       <Projects toggleSidebar={toggleSidebar} />
//                       <Sidebar isOpen={isOpen} />
//                     </>
//                   }
//                 />
//                 <Route
//                   path="/about"
//                   element={
//                     <>
//                       <About toggleSidebar={toggleSidebar} />
//                       <Sidebar isOpen={isOpen} />
//                     </>
//                   }
//                 />
//                 <Route
//                   path="/contact"
//                   element={
//                     <>
//                       <Contact toggleSidebar={toggleSidebar} />
//                       <Sidebar isOpen={isOpen} />
//                     </>
//                   }
//                 />
//               </Routes>
//             </>
//           )}
//         </div>
//       </Router>
//     </>
//   );
// };

// export default App;


// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Projects from "./components/Projects";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Sidebar from "./components/Sidebar";
// import Loader from "./components/SkeletonLoader";
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

//   // Function to check if the device is a tablet
//   const isTablet = () => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     const aspectRatio = width / height;

//     // Detect common tablet dimensions
//     return (
//       (width >= 600 && width <= 1280) || // Common tablet screen widths
//       (height >= 600 && height <= 1280) || // Common tablet screen heights
//       (aspectRatio >= 0.7 && aspectRatio <= 1.6) // Typical tablet aspect ratios
//     );
//   };

//   const checkTabletLandscape = () => {
//     const isLandscape = window.matchMedia("(orientation: landscape)").matches;

//     // Show message if the device is a tablet and in landscape mode
//     setShowLandscapeMessage(isTablet() && isLandscape);
//   };

//   useEffect(() => {
//     // Initial check
//     checkTabletLandscape();

//     // Listen for orientation or resize changes
//     window.addEventListener("resize", checkTabletLandscape);
//     window.addEventListener("orientationchange", checkTabletLandscape);

//     // Cleanup listeners on component unmount
//     return () => {
//       window.removeEventListener("resize", checkTabletLandscape);
//       window.removeEventListener("orientationchange", checkTabletLandscape);
//     };
//   }, []);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false); // After 3 seconds, hide the loader
//     }, 0);
//   }, []);

//   if (showLandscapeMessage) {
//     // Render error page for tablets in landscape mode
//     return (
//       <div className="error-page">
//         <h1>Please switch to portrait mode for the best experience on tablets.</h1>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Router>
//         <div>
//           {loading ? (
//             <Loader /> // Show loader while loading
//           ) : (
//             <>
//               <Navbar
//                 toggleSidebar={toggleSidebar}
//                 navLinks={[
//                   { to: "/", text: "Home" },
//                   { to: "/projects", text: "Projects" },
//                   { to: "/about", text: "About" },
//                   { to: "/contact", text: "Contact" },
//                 ]}
//                 navLinkClicked={navLinkClicked}
//               />

//               <Routes>
//                 <Route
//                   exact
//                   path="/"
//                   element={
//                     <>
//                       <Hero />
//                       <Sidebar isOpen={isOpen} />
//                     </>
//                   }
//                 />
//                 <Route
//                   path="/projects"
//                   element={
//                     <>
//                       <Projects toggleSidebar={toggleSidebar} />
//                       <Sidebar isOpen={isOpen} />
//                     </>
//                   }
//                 />
//                 <Route
//                   path="/about"
//                   element={
//                     <>
//                       <About toggleSidebar={toggleSidebar} />
//                       <Sidebar isOpen={isOpen} />
//                     </>
//                   }
//                 />
//                 <Route
//                   path="/contact"
//                   element={
//                     <>
//                       <Contact toggleSidebar={toggleSidebar} />
//                       <Sidebar isOpen={isOpen} />
//                     </>
//                   }
//                 />
//               </Routes>
//             </>
//           )}
//         </div>
//       </Router>
//     </>
//   );
// };

// export default App;


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

//   // Function to check if the device is a mobile device
//   const isMobile = () => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;

    
//     return width <= 768 && height <= 1024;
//   };

//   const checkMobileLandscape = () => {
//     const isLandscape = window.matchMedia("(orientation: landscape)").matches;

//     // Show message if the device is a mobile device and in landscape mode
//     setShowLandscapeMessage(isMobile() && isLandscape);
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
//     // Render error page for mobile devices in landscape mode
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
  const [navLinkClicked, setNavLinkClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showLandscapeMessage, setShowLandscapeMessage] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setNavLinkClicked(true);
  };

  // Function to check if the device is a mobile or tablet device
  const isMobileOrTablet = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Check for devices with width <= 1023px (excluding laptops)
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
    // Render error page for mobile and tablet devices in landscape mode
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
              navLinkClicked={navLinkClicked}
            />

            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <Hero />
                    <Sidebar isOpen={isOpen} />
                  </>
                }
              />
              <Route
                path="/projects"
                element={
                  <>
                    <Projects toggleSidebar={toggleSidebar} />
                    <Sidebar isOpen={isOpen} />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <About toggleSidebar={toggleSidebar} />
                    <Sidebar isOpen={isOpen} />
                  </>
                }
              />
              <Route
                path="/contact"
                element={
                  <>
                    <Contact toggleSidebar={toggleSidebar} />
                    <Sidebar isOpen={isOpen} />
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
