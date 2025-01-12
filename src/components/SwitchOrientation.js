import React from "react";
import "../css/SwitchOrientation.css";
import SwitchImage from "../Images/doodle.png";
import Rotate from "../Images/rotatedevice.png";
const SwitchOrientaion = () => {
  return (
    <>
      <div className="set-onew-full h-screen overflow-hidden">
        <div class="context">
          <div className="orientationimage">
            <img
              className="circledoodle"
              src={SwitchImage}
              alt="siwtcherrorimage"
            ></img>
          </div>
          <div className="set-two">
            <div className="designimage">
            <div class="imghead">
              <img className="rotate" src={Rotate} alt="siwtchorientationimage"></img>
              <h1>SWITCH ORIENTATION</h1>
            </div>
            <p>
             Oops! I haven't developed the Landscape mode yet, but I'm Still working on it. So please switch to Portrait orientation for better experience of my portfolio. Thank You :)
            </p>
            </div>
          </div>
        </div>

        <div class="area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SwitchOrientaion;
