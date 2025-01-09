import React, { useState, useEffect } from "react";
import "../css/Hero.css";
import "aos/dist/aos.css";
import Carousel from '../components/Carousel';
import CodeAnimation from '../components/CodeAnimation';

const Hero = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState(""); 

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        const randomQuoteData = data.quotes[Math.floor(Math.random() * data.quotes.length)];
        setQuote(randomQuoteData.quote);
        setAuthor(randomQuoteData.author); 
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
        setQuote("Believe you can and you're halfway there.");
        setAuthor("Theodore Roosevelt");
      });
  }, []);

  const maxScrollThreshold = 1000;
  const maxScroll = 200;
  const imagePosition = Math.max(-34, -(scrollPos / maxScrollThreshold) * 50);
  const textPosition = Math.max(-34, -(scrollPos / maxScrollThreshold) * -100);
  const fadeOpacity = Math.max(0.2, 1 - scrollPos / (maxScroll * 0.4));

  return (
    <div className="Hero">
      <div className="Hero-container">
        <div className="lines">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="line"></div>
          ))}
        </div>

        <div className="content">
          <h1>VIGNESH</h1> 
          <h2>FULL STACK DEVELOPER</h2>
        </div>

        <div className="contII">
          <div
            className="text"
            style={{
              transform: `translateX(${textPosition}%)`,
              maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) ${fadeOpacity * 100}%, transparent)`,
            }}
          >
            <h1>Hi!</h1>
            <p>
              &nbsp; &nbsp; this is Vignesh, a full stack developer. I am
              passionate about creating innovative and user-friendly web
              applications. I am a quick learner and a team player. I am
              always eager to learn new technologies and expand my knowledge.
              I am a strong believer in the power of technology, which increases
              the potential of network applications. I have built many
              front-end applications to improve my skills in developing
              websites that are easier to understand and quick to navigate.
            </p>
          </div>

          <div
            className="scroll-image"
            style={{
              transform: `translateX(${imagePosition}%)`,
            }}
          ></div>
        </div>

        <div className="middle">
          <p className="mhead">Welcome to my page</p>
          <p className="m-p">
            Here you can find the details about me, <br /> the projects I have worked on, and my skills as <br /> a Full Stack Web Developer.
          </p>

          <div className="carousel">
            <Carousel />
          </div>
        </div>

        <div className="quote">
          <blockquote>
            <em>“{quote}”</em>
          </blockquote>
          <p className="author"> - {author}</p> 
        </div>
        <div>
        <footer id="footer-hero">
  <div className="footer-background"></div>
  <div className="footer-content">
    <div className="footer-left">
      <h2 className="footer-title">Let's Create Something Amazing</h2>
      <p className="footer-subtitle">Ready to take your project to the next level? Get in touch with me and let's bring your ideas to life.</p>
      <a href="/contact" className="footer-cta">CONTACT</a>
      <div className="footer-links">
        <div className="footer-links-column">
          <h4>Profile</h4>
          <a href="/about">About Me</a>
          <a href="/projects">My Projects</a>
        </div>
        <div className="footer-links-column">
          <h4>Services</h4>
          <a href="https://en.wikipedia.org/wiki/Web_design">Web Design</a>
          <a href="https://en.wikipedia.org/wiki/Web_development">Development</a>
        </div>
      </div>
    </div>
    <div className="footer-right">
      <div className="social-icons">
        <a className="gmail" href="mailto:vignesh19.61.23@gmail.com"><i className="fas fa-envelope w-40"></i><span>G-MAIL</span></a>
        <a className="github" href="https://github.com/Vignesh-411"><i className="fab fa-github"></i><span>GITHUB</span></a>
        <a className="linkedin" href="https://www.linkedin.com/in/vignesh-sekar-v/"><i className="fab fa-linkedin"></i><span>LINKEDIN</span></a>
        <a className="hashnode" href="https://vickydomain.hashnode.dev/?source=top_nav_blog_home"><i className="fa-brands fa-hashnode"></i><span>HASHNODE</span></a>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <CodeAnimation/>
  </div>
</footer>

        </div>
      </div>
    </div>
  );
};

export default Hero;