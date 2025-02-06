import React, { useEffect } from "react";
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
    <div className="About">
      <div className="About-Content">
        <div className="About-Heading">
          <div className="Head2">
            <h1>Key Technologies I Rely On for High-Quality Web Development</h1>
          </div>
        </div>
        <div className="About-Description">
            <div className="html-container">
              <img
                src="https://wallpaperaccess.com/full/9147315.png"
                className="html-image"
                alt="html"
              />
              <p>
                The HyperText Markup Language, or HTML is the standard markup
                language for creating web pages and web applications. I have
                used this programming language to create many different stream
                of web applications in my projects , and also used many
                properties of the HTML for various purposes.
              </p>
            </div>
            <div className="tailwind-container">
              <img
                src="https://marioyonan.com//blog/tailwind-customization/image.jpg"
                className="tailwind-image"
                alt="tailwind"
              />
              <p>
                I use Tailwind CSS for its utility-first approach, enabling me
                to craft responsive, scalable designs with clean code. Its
                pre-built classes and customization options streamline
                development, while features like responsive design, animations,
                and themes help create unique, dynamic user experiences.
                Tailwind ensures my projects are both efficient and visually
                stunning.
              </p>
            </div>
            <div className="sql-container">
              <img
                src="https://cdn.vectorstock.com/i/500p/61/88/sql-line-icon-isolated-on-white-background-vector-53346188.jpg"
                className="sql-image"
                alt="sql"
              />
              <p>
                I use SQL to design and manage relational databases efficiently.
                Its powerful query language allows me to extract and manipulate
                data with precision. By optimizing database structures and
                queries, I ensure that applications remain scalable, secure, and
                deliver high-performance data operations.
              </p>
            </div>
          
          
            <div className="js-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                className="js-image"
                alt="js"
              />
              <p>
                JavaScript is essential for creating interactive and dynamic
                user experiences. Its versatility allows me to build full-stack
                applications, handle asynchronous operations, and develop
                feature-rich web solutions. With its vast ecosystem and
                frameworks, JavaScript enables me to craft highly responsive and
                engaging interfaces.
              </p>
            </div>

            <div className="react-container">
              <img
                src="https://webartdevelopers.com/blog/wp-content/uploads/2020/10/react-logo-pure-css.png"
                className="react-image"
                alt="react"
              />
              <p>
                I use ReactJS for its component-based architecture, enabling me
                to build dynamic and interactive user interfaces efficiently.
                Its virtual DOM and reusable components streamline development
                and enhance performance. React's strong ecosystem and
                flexibility allow me to create scalable, maintainable, and
                high-quality web applications.
              </p>
            </div>
            <div className="java-container">
              <img
                src="https://www.finoit.com/wp-content/uploads/2022/10/top-java-use-cases.jpg"
                className="java-image"
                alt="java"
              />
              <p>
                I rely on Java for its platform independence, strong type
                system, and robust performance in building enterprise-grade
                applications. Its object-oriented approach and extensive
                libraries make it ideal for creating secure and scalable
                solutions, from backend services to Android applications.
              </p>
            </div>

            <div className="springboot-container">
              <img
                src="https://www.javaindia.in/blog/wp-content/uploads/2022/05/spring-boot-features.png"
                className="springboot-image"
                alt="springboot"
              />
              <p>
                Spring Boot is my go-to framework for developing robust and
                production-ready backend applications. Its auto-configuration
                and embedded server simplify setup, while its dependency
                injection and built-in security features help me build scalable
                and secure APIs efficiently. Spring Boot ensures maintainability
                and rapid development.
              </p>
            </div>
            <div className="github-container">
              <img
                src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
                className="github-image"
                alt="github"
              />
              <p>
                I use GitHub to manage and collaborate on code efficiently,
                ensuring version control and streamlined workflows. Its
                integration with CI/CD tools and branch management features
                enhances team productivity. GitHub's collaborative environment
                helps me maintain code quality and deliver robust applications.
              </p>
            </div>
            <div className="codepen-container">
              <img
                src="https://cdn.dribbble.com/users/3139745/screenshots/12521453/codepen-min.png"
                className="codepen-image"
                alt="codepen-image"
              />
              <p>
                I use CodePen as a creative playground to prototype and share
                front-end ideas quickly. Its live preview feature allows me to
                experiment with HTML, CSS, and JavaScript seamlessly. CodePen is
                invaluable for testing animations, building interactive UI
                components, and collaborating on web development concepts
                efficiently.
              </p>
            </div>
        </div>

        <div className="glide">
          <div className="marquee">
            <ul className="marquee-content">
              <li>
                <i className="fab fa-github"></i>
              </li>
              <li>
                <i className="fab fa-codepen"></i>
              </li>
              <li>
                <i className="fa-solid fa-code"></i>
              </li>
              <li>
                <i className="fa-brands fa-java"></i>
              </li>
              <li>
                <i className="fa-brands fa-js"></i>
              </li>
              <li>
                <i className="fa-brands fa-css3"></i>
              </li>
              <li>
                <i className="fa-solid fa-c"></i>
              </li>
              <li>
                <i className="fab fa-node"></i>
              </li>
              <li>
                <i className="fab fa-aws"></i>
              </li>
              <li>
                <i className="fa-solid fa-database"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
