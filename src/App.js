// /* eslint-disable react-hooks/exhaustive-deps */
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
//   const [loading, setLoading] = useState(true); 
//   const [showLandscapeMessage, setShowLandscapeMessage] = useState(false); 

//   const toggleSidebar = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const isMobileOrTablet = () => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     return (width <= 1023 && height <= 1367) || width <= 768;
//   };

//   const checkMobileLandscape = () => {
//     const isLandscape = window.matchMedia("(orientation: landscape)").matches;
//     setShowLandscapeMessage(isMobileOrTablet() && isLandscape);
//   };

//   useEffect(() => {
//     checkMobileLandscape();

//     window.addEventListener("resize", checkMobileLandscape);
//     window.addEventListener("orientationchange", checkMobileLandscape);

//     return () => {
//       window.removeEventListener("resize", checkMobileLandscape);
//       window.removeEventListener("orientationchange", checkMobileLandscape);
//     };
//   }, []);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
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
//               isOpen={isOpen} // Pass isOpen to Navbar
//               navLinks={[
//                 { to: "/", text: "Home" },
//                 { to: "/projects", text: "Projects" },
//                 { to: "/about", text: "About" },
//                 { to: "/contact", text: "Contact" },
//               ]}
//             />

//             <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

//             <Routes>
//               <Route
//                 exact
//                 path="/"
//                 element={<Hero />}
//               />
//               <Route
//                 path="/projects"
//                 element={<Projects />}
//               />
//               <Route
//                 path="/about"
//                 element={<About />}
//               />
//               <Route
//                 path="/contact"
//                 element={<Contact />}
//               />
//             </Routes>
//           </>
//         )}
//       </div>
//     </Router>
//   );
// };

// export default App;


/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Loader from "./components/SkeletonLoader";
import SwitchOrientation from "./components/SwitchOrientation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar open/close state
  const [loading, setLoading] = useState(true); // Loading state
  const [showLandscapeMessage, setShowLandscapeMessage] = useState(false); // Landscape mode message

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev); // Toggle sidebar state
  };

  const isMobileOrTablet = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return (width <= 1023 && height <= 1367) || width <= 768;
  };

  const checkMobileLandscape = () => {
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;
    setShowLandscapeMessage(isMobileOrTablet() && isLandscape);
  };

  useEffect(() => {
    checkMobileLandscape();
    window.addEventListener("resize", checkMobileLandscape);
    window.addEventListener("orientationchange", checkMobileLandscape);

    return () => {
      window.removeEventListener("resize", checkMobileLandscape);
      window.removeEventListener("orientationchange", checkMobileLandscape);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
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
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              navLinks={[
                { to: "/", text: "Home" },
                { to: "/projects", text: "Projects" },
                { to: "/about", text: "About" },
                { to: "/contact", text: "Contact" },
              ]}
            />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Routes>
              <Route exact path="/" element={<Hero />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
