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
          <div classname="set1-container">
            <div className="html-container">
              <img
                src="https://wallpaperaccess.com/full/9147315.png"
                className="html-image"
                alt="html"
              />
              <p>
                lorem ipsum dolor sit amet, consect id elit, sed diam nonum et
                justo ut aliquet et justo e shallow et aliquetlorem ipsum dolor
                sit amet, consect id elit, sed diam nonum et justo ut aliquet et
                justo e shallow et aliquetlorem ipsum dolor sit amet, consect id
                elit, sed diam nonum et justo ut aliquet et justo e shallow et
                aliquetlorem ipsum dolor sit amet, consect id elit, sed diam
                nonum et justo ut aliquet et justo e shallow et aliquetlorem
                ipsum dolor sit amet, consect id elit, sed diam nonum et justo
                ut aliquet et justo e shallow et aliquet
              </p>
            </div>
            <div className="tailwindcss-container">
              <div className="tailwindcss">
                <img
                  src="https://balticanebula.com/content/images/2023/06/plus-tailwind.jpg"
                  className="tailwindcssimg"
                  alt="tailwindcss"
                />
                <p>
                  lorem ipsum dolor sit amet, consect id elit, sed diam nonum et
                  justo ut aliquet et justo e shallow et aliquetlorem ipsum
                  dolor sit amet, consect id elit, sed diam nonum et justo ut
                  aliquet et justo e shallow et aliquetlorem ipsum dolor sit
                  amet, consect id elit, sed diam nonum et justo ut aliquet et
                  justo e shallow et aliquetlorem ipsum dolor sit amet, consect
                  id elit, sed diam nonum et justo ut aliquet et justo e shallow
                  et aliquetlorem ipsum dolor sit amet, consect id elit, sed
                  diam nonum et justo ut aliquet et justo e shallow et aliquet
                </p>
              </div>
            </div>
            <div className="react-container">
              <div className="react">
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/294/834/442/reactjs-facebook-javascript-minimalism-wallpaper-preview.jpg"
                  className="reactimg"
                  alt="reactimg"
                />
                <p>
                  lorem ipsum dolor sit amet, consect id elit, sed diam nonum et
                  justo ut aliquet et justo e shallow et aliquetlorem ipsum
                  dolor sit amet, consect id elit, sed diam nonum et justo ut
                  aliquet et justo e shallow et aliquetlorem ipsum dolor sit
                  amet, consect id elit, sed diam nonum et justo ut aliquet et
                  justo e shallow et aliquetlorem ipsum dolor sit amet, consect
                  id elit, sed diam nonum et justo ut aliquet et justo e shallow
                  et aliquetlorem ipsum dolor sit amet, consect id elit, sed
                  diam nonum et justo ut aliquet et justo e shallow et aliquet
                </p>
              </div>
            </div>
          </div>
          <div classname="set2-container">
            <div className="js-container">
              <div className="js">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  className="jsimg"
                  alt="jsimg"
                />
                <p>
                  lorem ipsum dolor sit amet, consect id elit, sed diam nonum et
                  justo ut aliquet et justo e shallow et aliquetlorem ipsum
                  dolor sit amet, consect id elit, sed diam nonum et justo ut
                  aliquet et justo e shallow et aliquetlorem ipsum dolor sit
                  amet, consect id elit, sed diam nonum et justo ut aliquet et
                  justo e shallow et aliquetlorem ipsum dolor sit amet, consect
                  id elit, sed diam nonum et justo ut aliquet et justo e shallow
                  et aliquetlorem ipsum dolor sit amet, consect id elit, sed
                  diam nonum et justo ut aliquet et justo e shallow et aliquet
                </p>
              </div>
            </div>
            <div className="js-container">
              <div className="js">
                <img
                  src="https://www.finoit.com/wp-content/uploads/2022/10/top-java-use-cases.jpg"
                  className="jsimg"
                  alt="jsimg"
                />
                <p>
                  lorem ipsum dolor sit amet, consect id elit, sed diam nonum et
                  justo ut aliquet et justo e shallow et aliquetlorem ipsum
                  dolor sit amet, consect id elit, sed diam nonum et justo ut
                  aliquet et justo e shallow et aliquetlorem ipsum dolor sit
                  amet, consect id elit, sed diam nonum et justo ut aliquet et
                  justo e shallow et aliquetlorem ipsum dolor sit amet, consect
                  id elit, sed diam nonum et justo ut aliquet et justo e shallow
                  et aliquetlorem ipsum dolor sit amet, consect id elit, sed
                  diam nonum et justo ut aliquet et justo e shallow et aliquet
                </p>
              </div>
            </div>
            <div className="sql-container">
              <div className="sql">
                <img
                  src="https://cdn.vectorstock.com/i/500p/61/88/sql-line-icon-isolated-on-white-background-vector-53346188.jpg"
                  className="sqlimg"
                  alt="sqlimg"
                />
                <p>
                  lorem ipsum dolor sit amet, consect id elit, sed diam nonum et
                  justo ut aliquet et justo e shallow et aliquetlorem ipsum
                  dolor sit amet, consect id elit, sed diam nonum et justo ut
                  aliquet et justo e shallow et aliquetlorem ipsum dolor sit
                  amet, consect id elit, sed diam nonum et justo ut aliquet et
                  justo e shallow et aliquetlorem ipsum dolor sit amet, consect
                  id elit, sed diam nonum et justo ut aliquet et justo e shallow
                  et aliquetlorem ipsum dolor sit amet, consect id elit, sed
                  diam nonum et justo ut aliquet et justo e shallow et aliquet
                </p>
              </div>
            </div>
            <div className="springboot-container">
              <div className="springboot">
                <img
                  src="https://i0.wp.com/theboreddev.com/wp-content/uploads/2022/11/spring.png?resize=588%2C500&ssl=1"
                  className="springbootimg"
                  alt="springbootimg"
                />
                <p>
                  lorem ipsum dolor sit amet, consect id elit, sed diam nonum et
                  justo ut aliquet et justo e shallow et aliquetlorem ipsum
                  dolor sit amet, consect id elit, sed diam nonum et justo ut
                  aliquet et justo e shallow et aliquetlorem ipsum dolor sit
                  amet, consect id elit, sed diam nonum et justo ut aliquet et
                  justo e shallow et aliquetlorem ipsum dolor sit amet, consect
                  id elit, sed diam nonum et justo ut aliquet et justo e shallow
                  et aliquetlorem ipsum dolor sit amet, consect id elit, sed
                  diam nonum et justo ut aliquet et justo e shallow et aliquet
                </p>
              </div>
            </div>
            <div className="codepen-container">
              <div className="codepen">
                <img
                  src="https://i0.wp.com/theboreddev.com/wp-content/uploads/2022/11/spring.png?resize=588%2C500&ssl=1"
                  className="codepen-image"
                  alt="codepen-image"
                />
                <p>
                  lorem ipsum dolor sit amet, consect id elit, sed diam nonum et
                  justo ut aliquet et justo e shallow et aliquetlorem ipsum
                  dolor sit amet, consect id elit, sed diam nonum et justo ut
                  aliquet et justo e shallow et aliquetlorem ipsum dolor sit
                  amet, consect id elit, sed diam nonum et justo ut aliquet et
                  justo e shallow et aliquetlorem ipsum dolor sit amet, consect
                  id elit, sed diam nonum et justo ut aliquet et justo e shallow
                  et aliquetlorem ipsum dolor sit amet, consect id elit, sed
                  diam nonum et justo ut aliquet et justo e shallow et aliquet
                </p>
              </div>
            </div>
            <div className="github-container">
              <div className="github">
                <img
                  src="https://i0.wp.com/theboreddev.com/wp-content/uploads/2022/11/spring.png?resize=588%2C500&ssl=1"
                  className="github-image"
                  alt="github-image"
                />
                <p>
                  lorem ipsum dolor sit amet, consect id elit, sed diam nonum et
                  justo ut aliquet et justo e shallow et aliquetlorem ipsum
                  dolor sit amet, consect id elit, sed diam nonum et justo ut
                  aliquet et justo e shallow et aliquetlorem ipsum dolor sit
                  amet, consect id elit, sed diam nonum et justo ut aliquet et
                  justo e shallow et aliquetlorem ipsum dolor sit amet, consect
                  id elit, sed diam nonum et justo ut aliquet et justo e shallow
                  et aliquetlorem ipsum dolor sit amet, consect id elit, sed
                  diam nonum et justo ut aliquet et justo e shallow et aliquet
                </p>
              </div>
            </div>

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
