import React from "react";
import "../css/SwitchOrientation.css";
import SwitchImage from "../Images/switcherror.png";
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
              <h1>Switch Orientation</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fringilla enim non est tempus, a semper ipsum cursus. Morbi vel ex
              vel nunc tempus semper. Aenean in bibendum ligula.
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
