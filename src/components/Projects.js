import React, { useEffect, useState, useRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "../css/Projects.css"; 
import Image1 from "../Images/Beautiful Space Wallpaper ✨.jpg"; 
import 'font-awesome/css/font-awesome.min.css';


const Projects = () => {
  const [current, setCurrent] = useState(0);
  const slidesRef = useRef([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

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
    const interval = setInterval(gotoNext, 2000);
    return () => clearInterval(interval);
  }, [current]);

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
        if (reason === 'clickaway') return;
        setSnackbarOpen(false);
      };
    
      const handleItemClick = (link) => {
        // Close the Snackbar if it's open before opening it again
        if (snackbarOpen) {
          setSnackbarOpen(false);
        }
    
        setTimeout(() => {
          if (link) {
            window.open(link, "_blank"); // Open if link is valid
            handleSnackbarOpen("Project link opened successfully!", "success");
          } else {
            handleSnackbarOpen("Error: Project link is either not working or unavailable!", "error");
          }
        }, 100); // Wait for the Snackbar to close before opening it again
      };
    

 

  return (
    <div className="Projects">
      <div className="Projects-container">
        <div className="items">
          <div
            className="item"
            onClick={() => handleItemClick("https://www.youtube.com/")}
          >
            <img src="http://via.placeholder.com/500x500" alt="prev-side" />
            <div className="overlay">Project Details for Previous Side</div>
          </div>
          <div
            className="item"
            onClick={() => handleItemClick("https://nonexistent-link.com")}
          >
            <img src="http://via.placeholder.com/500x500" alt="prev" />
            <div className="overlay">Project Details for Previous</div>
          </div>
          <div className="item active" onClick={() => handleItemClick("")}>
            <img src={Image1} alt="active" />
            <div className="overlay">Main Project Details</div>
          </div>
          <div
            className="item"
            onClick={() => handleItemClick("https://www.example.com")}
          >
            <img src="http://via.placeholder.com/500x500" alt="next" />
            <div className="overlay">Project Details for Next</div>
          </div>
          <div className="item" onClick={() => handleItemClick("")}>
            <img src="http://via.placeholder.com/500x500" alt="next-side" />
            <div className="overlay">Project Details for Next Side</div>
          </div>
          <div className="button-container">
            <div className="button" onClick={gotoPrev}>
              <i class="fa-solid fa-angle-left"></i>
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

     

       {/* Snackbar component */}
       <Snackbar
         open={snackbarOpen}
         autoHideDuration={2000}
         onClose={handleSnackbarClose}
         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
     >
         <Alert
           onClose={handleSnackbarClose}
           severity={snackbarSeverity}
           sx={{ display: 'flex', alignItems: 'center' }}
         >
           {snackbarMessage}
         </Alert>
       </Snackbar>
    </div>
  );
};

export default Projects;
