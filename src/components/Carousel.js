/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "../css/Carousel.css";

const Carousel = () => {
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);
  const [animClass, setAnimClass] = useState("");


 const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('../Images/CarouselImages/', false, /\.(png|jpe?g|svg)$/));


  const color_options = [
    "#B8A1D3", "#D9C2E8", "#C1CAD0", "#E0D9F5",
    "#C9C3E3", "#C9C3E3", "#C9C3E3", "#C9C3E3",
  ];

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.quotes) {
          setQuotes(data.quotes);
        } else {
          setQuotes([
            { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
          ]);
        }
      })
      .catch((error) => {
        console.error("Error fetching quotes:", error);
        setQuotes([
          { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
        ]);
      });
  }, []);

  
  useEffect(() => {
    if (quotes.length > 0) { // Start interval only if quotes are loaded
      const interval = setInterval(() => {
        handleNext();
      }, 3000); // Change 3000 to the desired interval in milliseconds

      return () => clearInterval(interval); // Clean up interval on component unmount
    }
  }, [quotes, index]);

  const handleNext = () => {
    setAnimClass("anim-next");
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      setAnimClass("");
    }, 300);
  };

  const handlePrevious = () => {
    setAnimClass("anim-previous");
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
      setAnimClass("");
    }, 300);
  };

  return (
    <div id="carousel-wrapper" className={`carousel ${animClass}`}>
      <div id="menu" style={{ background: color_options[index % color_options.length] }}>
        <div id="current-option">
          <span id="current-option-text1">
            &nbsp;&nbsp;&nbsp;"{quotes[index]?.quote || "Loading quote..."}"
          </span>
          <span id="current-option-text2">
            - {quotes[index]?.author || "Loading author..."}
          </span>
        </div>
        <button id="previous-option" onClick={handlePrevious}></button>
        <button id="next-option" onClick={handleNext}></button>
        <div
          id="image"
          style={{
            backgroundImage: `url(${images[index % images.length]})`
          }}
        ></div>
      </div>
    </div>
  );
};

export default Carousel;
