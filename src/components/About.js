import React from "react";
import { useEffect } from "react";
import "../css/About.css";

const About = () => {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeContent = document.querySelector("ul.marquee-content");
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  return (
    <>
      <div className="About">
  <div className="About-Content">
    <div className="About-Container">
      <div className="About-Heading">
        <div className="Head2">
          <h1>Key Technologies I Rely On for High-Quality Web Development</h1>
        </div>
      </div>
    </div>
    <div className="glide">
      <div className="marquee">
        <ul className="marquee-content">
          <li><i className="fab fa-github"></i></li>
          <li><i className="fab fa-codepen"></i></li>
          <li><i className="fa-solid fa-code"></i></li>
          <li><i className="fa-brands fa-java"></i></li>
          <li><i className="fa-brands fa-js"></i></li>
          <li><i className="fa-brands fa-css3"></i></li>
          <li><i className="fa-solid fa-c"></i></li>
          <li><i className="fab fa-node"></i></li>
          <li><i className="fab fa-aws"></i></li>
          <li><i className="fa-solid fa-database"></i></li>
        </ul>
      </div>
    </div>
  </div>
</div>
    
    </>
  );
};

export default About;
