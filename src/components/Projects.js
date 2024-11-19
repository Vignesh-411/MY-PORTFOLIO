import React, { useEffect, useState, useRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "../css/Projects.css";
import "font-awesome/css/font-awesome.min.css";
import  Google from "../Images/ProjectImages/google-calendar.png";
import  Ecommerce from "../Images/ProjectImages/ecommerce.png";
import  Calculator from "../Images/ProjectImages/calculator.png";
import  Weather from "../Images/ProjectImages/weather-app.png";
import  Portfolio from "../Images/ProjectImages/first-portfolio.png";



const Projects = () => {
  const [current, setCurrent] = useState(0);
  const slidesRef = useRef([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    slidesRef.current = document.querySelectorAll(".item");
  }, []);

  const gotoPrev = () => {
    setCurrent((prevCurrent) =>
      prevCurrent > 0 ? prevCurrent - 1 : slidesRef.current.length - 1
    );
  };

  const gotoNext = () => {
    setCurrent((prevCurrent) =>
      prevCurrent < slidesRef.current.length - 1 ? prevCurrent + 1 : 0
    );
  };

  useEffect(() => {
    if (!isHovered) {
      // Only set interval if not hovered
      intervalRef.current = setInterval(gotoNext, 3000);
    } else {
      clearInterval(intervalRef.current); // Clear interval if hovered
    }
    return () => clearInterval(intervalRef.current); // Cleanup on unmount or hover change
  }, [current, isHovered]); // Depend on both current and isHovered

  useEffect(() => {
    const slides = slidesRef.current;
    const prev = current === 0 ? slides.length - 1 : current - 1;
    const next = current === slides.length - 1 ? 0 : current + 1;
    const prevSide = prev === 0 ? slides.length - 1 : prev - 1;
    const nextSide = next === slides.length - 1 ? 0 : next + 1;

    slides.forEach((slide, index) => {
      slide.classList.remove(
        "active",
        "prev",
        "next",
        "prev-side",
        "next-side"
      );
      if (index === current) slide.classList.add("active");
      else if (index === prev) slide.classList.add("prev");
      else if (index === next) slide.classList.add("next");
      else if (index === prevSide) slide.classList.add("prev-side");
      else if (index === nextSide) slide.classList.add("next-side");
    });
  }, [current]);

  const handleSnackbarOpen = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  const handleItemClick = (link) => {
    if (snackbarOpen) {
      setSnackbarOpen(false);
    }

    setTimeout(() => {
      if (link) {
        window.open(link, "_blank");
        handleSnackbarOpen("Project link opened successfully!", "success");
      } else {
        handleSnackbarOpen(
          "Error: Project link is either not working or unavailable!",
          "error"
        );
      }
    }, 100);
  };

  return (
    <div className="Projects">
      <div className="Projects-container">
        <div className="items">
       
          <div
            className="item"
            onClick={() => handleItemClick("https://e-commerce-woad-phi.vercel.app/")}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={Ecommerce} alt="prev" />
            <div className="overlay">
              <h1>E-Commerce</h1>
            </div>
          </div>
          <div
            className="item"
            onClick={() => handleItemClick("https://google-calendar.tiiny.site/")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} 
          >
            <img src={Google} alt="prev-side" />
            <div className="overlay">
              <h1>Google Calendar</h1>
            </div>
          </div>
          <div
            className="item active"
            onClick={() => handleItemClick("https://project-react-lovat-omega.vercel.app/")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={Portfolio} alt="active" />
            <div className="overlay">
              <h1>Fist Portfolio</h1>
            </div>
          </div>
          <div
            className="item"
            onClick={() => handleItemClick("https://weather-application-two-liart.vercel.app/")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={Weather} alt="next" />
            <div className="overlay">
              <h1>Weather Apploicatiion</h1>
            </div>
          </div>
          <div
            className="item"
            onClick={() => handleItemClick("https://calculator-theta-blue.vercel.app/")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={Calculator} alt="next-side" />
            <div className="overlay">
              <h1>Calculator</h1>
            </div>
          </div>
          <div className="button-container">
            <div className="button" onClick={gotoPrev}>
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className="button" onClick={gotoNext}>
              <i className="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="Head">
        <h1>recent project highlights</h1>
      </div>

    
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ display: "flex", alignItems: "center" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Projects;
