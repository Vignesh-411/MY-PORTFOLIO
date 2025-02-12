// import React from "react";
// import "../css/Contact.css";
// import { useState, useEffect } from "react";

// const Contact = () => {
//   const [mapUrl, setMapUrl] = useState(
//     "https://maps.google.com/maps?q=manhattan&t=&z=13&ie=UTF8&iwloc=&output=embed"
//   );
 
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           const newMapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
//           setMapUrl(newMapUrl);
//         },
//         (error) => {
//           console.error("Geolocation error:", error);
//         }
//       );
//     } else {
//       console.error("Geolocation is not supported by this browser.");
//     }
//   }, []);
//   return (
//     <div calssname="Contact">
//       <div className="contact-container">
//         <div className="contact-grid">
//           <div className="contact-form-section">
//             <h2 className="contact-title">
//               Get In <span className="highlight">Touch</span>
//             </h2>
//             <p className="contact-description">
//               Have a specific inquiry or looking to explore new opportunities?
//               Our experienced team is ready to engage with you.
//             </p>

//             <form>
//               <div className="input-group">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="input-field"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Street"
//                   className="input-field"
//                 />
//                 <div className="input-row">
//                   <input
//                     type="text"
//                     placeholder="City"
//                     className="input-field"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Postcode"
//                     className="input-field"
//                   />
//                 </div>
//                 <input
//                   type="number"
//                   placeholder="Phone No."
//                   className="input-field"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="input-field"
//                 />
//                 <textarea
//                   placeholder="Write Message"
//                   className="textarea-field"
//                 ></textarea>
//               </div>

//               <button type="button" className="submit-button">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16px"
//                   height="16px"
//                   fill="currentColor"
//                   className="button-icon"
//                   viewBox="0 0 548.244 548.244"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 Send Message
//               </button>
//             </form>

//             <ul className="contact-info">
//               <li className="info-item">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16px"
//                   height="16px"
//                   fill="currentColor"
//                   viewBox="0 0 479.058 479.058"
//                 >
//                   <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912z" />
//                 </svg>
//                 <span>info@example.com</span>
//               </li>
//               <li className="info-item">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16px"
//                   height="16px"
//                   fill="currentColor"
//                   viewBox="0 0 482.6 482.6"
//                 >
//                   <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3" />
//                 </svg>
//                 <span>+158 996 888</span>
//               </li>
//             </ul>
//           </div>
//           <div className="map-container">
//             <iframe
//               src={mapUrl}
//               className="map-frame"
//               frameBorder="0"
//               allowFullScreen
//               title="Location"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState, useEffect } from "react";
import "../css/Contact.css";

const Contact = () => {
  const [mapUrl, setMapUrl] = useState(
    "https://maps.google.com/maps?q=manhattan&t=&z=13&ie=UTF8&iwloc=&output=embed"
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newMapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
          setMapUrl(newMapUrl);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="Contact">
      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-form-section">
            <h2 className="contact-title">
              Get In <span className="highlight">Touch</span>
            </h2>
            <p className="contact-description">
              Have a specific inquiry or looking to explore new opportunities?
              Our experienced team is ready to engage with you.
            </p>

            <form>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Street"
                  className="input-field"
                />
                <div className="input-row">
                  <input
                    type="text"
                    placeholder="City"
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Postcode"
                    className="input-field"
                  />
                </div>
                <input
                  type="number"
                  placeholder="Phone No."
                  className="input-field"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input-field"
                />
                <textarea
                  placeholder="Write Message"
                  className="textarea-field"
                ></textarea>
              </div>

              <button type="button" className="submit-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  className="button-icon"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fillRule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clipRule="evenodd"
                  />
                </svg>
                Send Message
              </button>
            </form>
          </div>
          <div className="map-container">
            <iframe
              src={mapUrl}
              className="map-frame"
              frameBorder="0"
              allowFullScreen
              title="Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
