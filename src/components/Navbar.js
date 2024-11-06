import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import Image from "../Images/briefcase.png";

const Navbar = ({ toggleSidebar,navLinks, navLinkClicked  }) => {
  

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const base64File = ""; // Add your base64 content here
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = base64File;
    link.download = "VIGNESH RESUME.pdf";
    link.click();
  };

  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div
      className="Navbar"
      >
      <div className="set-1">
        <div className="menu icon" onClick={toggleSidebar}>
          <div className="trigger">
            <svg
              className={`bars ${isActive ? "active" : ""}`}
              viewBox="0 0 100 100"
              onClick={handleToggle}
            >
              <path
                className="linee top"
                d="m 29.5,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
              ></path>
              <path
                className="linee middle"
                d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
              ></path>
              <path
                className="linee bottom"
                d="m 69.575405,67 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="set-2">
        <h1>VIGNESH</h1>
        <div className="download">
        <span className={`${isScrolling ? 'scroll-up hide-chevron' : ''}`}>
            CLICK THIS ICON TO DOWNLOAD THE RESUME</span>
          <img
            src={Image}
            alt="Download"
            style={{ cursor: "pointer" }}
            onClick={handleDownload}
          />
        </div>
        <div className="navlinks">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
