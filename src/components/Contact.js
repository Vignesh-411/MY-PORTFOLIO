// import React, { useState, useEffect } from "react";
// import "../css/Contact.css";

// const Contact = () => {
//   const [mapUrl, setMapUrl] = useState(
//     "https://maps.google.com/maps?q=manhattan&t=&z=13&ie=UTF8&iwloc=&output=embed"
//   );
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };
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
//     <div className="Contact">
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

// const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };


import React, { useState, useEffect } from "react";
import "../css/Contact.css";

const Contact = () => {
  const [mapUrl, setMapUrl] = useState(
    "https://maps.google.com/maps?q=manhattan&t=&z=13&ie=UTF8&iwloc=&output=embed"
  );
  const [result, setResult] = useState("");

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

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aaf316d0-e495-4f60-a6ed-220e78170fb8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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

            <form onSubmit={onSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input-field"
                  required
                />
                <input
                  type="text"
                  name="street"
                  placeholder="Street"
                  className="input-field"
                  required
                />
                <div className="input-row">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="input-field"
                    required
                  />
                  <input
                    type="text"
                    name="postcode"
                    placeholder="Postcode"
                    className="input-field"
                    required
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No."
                  className="input-field"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input-field"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Write Message"
                  className="textarea-field"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
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
              <p className="form-result">{result}</p>
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
