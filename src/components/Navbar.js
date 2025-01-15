import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import Image from "../Images/SidebarImages/briefcase.png";

const Navbar = ({ toggleSidebar }) => {
  const [isActive, setIsActive] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Track active nav link
  const navigate = useNavigate();

  const navLinks = ["/", "/projects", "/about", "/contact"]; // Routes for NavLinks

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const base64File = "";
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `data:application/pdf;base64,${base64File}`;
    link.download = "VIGNESH RESUME.pdf";
    link.click();
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsScrollingDown(currentScrollPos > prevScrollPos);
    setIsScrolling(currentScrollPos > 0);
    setPrevScrollPos(currentScrollPos);
  };

  const handleKeyDown = (event) => {
    if (event.code === "Tab" && event.shiftKey) {
      event.preventDefault(); 
      const nextIndex = (activeIndex + 1) % navLinks.length; 
      setActiveIndex(nextIndex);
      navigate(navLinks[nextIndex]);
    } else if (event.code === "Space" && event.shiftKey) {
      event.preventDefault();
      const prevIndex = (activeIndex - 1 + navLinks.length) % navLinks.length; 
      setActiveIndex(prevIndex);
      navigate(navLinks[prevIndex]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [prevScrollPos, activeIndex]);

  return (
    <div className="Navbar">
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
              />
              <path
                className="linee middle"
                d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
              />
              <path
                className="linee bottom"
                d="m 69.575405,67 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="set-2">
        <h1>VIGNESH</h1>
        <div className="download">
          <span className={`${isScrolling ? "scroll-up" : ""}`}>
            CLICK THIS ICON TO DOWNLOAD THE RESUME
          </span>
          <img
            src={Image}
            alt="Download"
            style={{ cursor: "pointer" }}
            onClick={handleDownload}
          />
        </div>
        <div className="navlinks">
          <span className={`tooltip ${isScrollingDown ? "faded" : ""}`}>
            Use <strong style={{ color: "red" }}>Shift + Tab</strong> to navigate next page  <br/>
            <strong style={{ color: "red" }}>Shift + Space</strong> to navigate previous page
          </span>
          <nav>
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link}
                className={index === activeIndex ? "active" : ""}
                onClick={() => setActiveIndex(index)} // Update activeIndex on click
              >
                {link.replace("/", "").toUpperCase() || "HOME"}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
