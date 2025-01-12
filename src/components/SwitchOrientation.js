// import React from "react";
// import "../css/SwitchOrientation.css";
// import SwitchImage from "../Images/doodle.png";
// import Rotate from "../Images/rotatedevice.png";
// const SwitchOrientaion = () => {
//   return (
//     <>
//       <div className="set-onew-full h-screen overflow-hidden">
//         <div class="context">
//           <div className="orientationimage">
//             <img
//               className="circledoodle"
//               src={SwitchImage}
//               alt="siwtcherrorimage"
//             ></img>
//           </div>
//           <div className="set-two">
//             <div className="designimage">
//             <div class="imghead">
//               <img className="rotate" src={Rotate} alt="siwtchorientationimage"></img>
//               <h1>SWITCH ORIENTATION</h1>
//             </div>
//             <p>
//              Oops! I haven't developed the Landscape mode yet, but I'm Still working on it. So please switch to Portrait orientation for better experience of my portfolio. Thank You :)
//             </p>
//             </div>
//           </div>
//         </div>

//         <div class="area">
//           <ul class="circles">
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SwitchOrientaion;


// import React, { useEffect, useState } from "react";
// import "../css/SwitchOrientation.css";
// import SwitchImage from "../Images/doodle.png";
// import Rotate from "../Images/rotatedevice.png";

// const SwitchOrientation = () => {
//   const [deviceHeight, setDeviceHeight] = useState(window.innerHeight);

//   const updateDeviceHeight = () => {
//     setDeviceHeight(window.innerHeight);
//   };

//   useEffect(() => {
//     // Update height on mount and window resize
//     updateDeviceHeight();

//     window.addEventListener("resize", updateDeviceHeight);
//     window.addEventListener("orientationchange", updateDeviceHeight);

//     // Cleanup event listeners on unmount
//     return () => {
//       window.removeEventListener("resize", updateDeviceHeight);
//       window.removeEventListener("orientationchange", updateDeviceHeight);
//     };
//   }, []);

//   return (
//     <>
//       <div className="set-one w-full overflow-hidden">
//         <div className="context">
//           <div className="orientationimage">
//             <img
//               className="circledoodle"
//               src={SwitchImage}
//               alt="switcherrorimage"
//               style={{ height: `${deviceHeight * 0.6}px` }} 
//             />
//           </div>
//           <div className="set-two">
//             <div className="designimage">
//               <div className="imghead">
//                 <img
//                   className="rotate"
//                   src={Rotate}
//                   alt="switchorientationimage"
//                 />
//                 <h1>SWITCH ORIENTATION</h1>
//               </div>
//               <p>
//                 Oops! I haven't developed the Landscape mode yet, but I'm still
//                 working on it. So please switch to Portrait orientation for a
//                 better experience of my portfolio. Thank You :)
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="area">
//           <ul className="circles">
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SwitchOrientation;


import React, { useEffect, useState } from "react";
import "../css/SwitchOrientation.css";
import SwitchImage from "../Images/doodle.png";
import Rotate from "../Images/rotatedevice.png";

const SwitchOrientation = () => {
  const [deviceHeight, setDeviceHeight] = useState(window.innerHeight);
  const [scaleFactor, setScaleFactor] = useState(0.6); // Default scaling factor

  const updateDeviceHeight = () => {
    const height = window.innerHeight;
    setDeviceHeight(height);

    // Adjust scale factor based on height
    if (height <= 360) {
      setScaleFactor(0.6);
    } else if (height > 361 && height <= 390) {
      setScaleFactor(0.65);
    } else if (height > 391 && height <= 410) {
      setScaleFactor(0.68);
    }
    else if (height > 411) {
      setScaleFactor(0.7);
    }
  };

  useEffect(() => {
    updateDeviceHeight();

    window.addEventListener("resize", updateDeviceHeight);
    window.addEventListener("orientationchange", updateDeviceHeight);

    return () => {
      window.removeEventListener("resize", updateDeviceHeight);
      window.removeEventListener("orientationchange", updateDeviceHeight);
    };
  }, []);

  return (
    <>
      <div className="set-one w-full overflow-hidden">
        <div className="context">
          <div className="orientationimage">
            <img
              className="circledoodle"
              src={SwitchImage}
              alt="switcherrorimage"
              style={{ height: `${deviceHeight * scaleFactor}px` }}
            />
          </div>
          <div className="set-two">
            <div className="designimage">
              <div className="imghead">
                <img
                  className="rotate"
                  src={Rotate}
                  alt="switchorientationimage"
                />
                <h1>SWITCH ORIENTATION</h1>
              </div>
              <p>
                Oops! I haven't developed the Landscape mode yet, but I'm still
                working on it. So please switch to Portrait orientation for a
                better experience of my portfolio. Thank You :)
              </p>
            </div>
          </div>
        </div>

        <div className="area">
          <ul className="circles">
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

export default SwitchOrientation;
