import React from "react";
import ReactDOM from "react-dom/client";
import emailjs from "emailjs-com"; // For emailjs-com package
import App from "./App";
import "./styles/global.scss"; // Import the global CSS file

// the traditional and actual entry point for all node apps
// in React it hass code of what to render and where to render.

// Before
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));

(function () {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js`;

  script.onload = function () {
    // Initialize EmailJS with the correct public key from your dashboard
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  };

  document.head.appendChild(script); // Append to the <head> section
})();
// After (React18)
// import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
