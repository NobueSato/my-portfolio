import headerImg from "../assets/images/contact.png";
import emailjs from "emailjs-com"; // For emailjs-com package
import { useEffect, useState } from "react";
import { Card } from "./Skills";

const Contact = () => {
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target; // Get the form element

    // Generate a random contact number
    form.contact_number.value = (Math.random() * 100000) | 0;

    // Send the form data via EmailJS
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form
      )
      .then((response) => {
        console.log("SUCCESS!", response);
        setShowPopup(true); // Show the popup on successful submission
        console.log(showPopup);
      })
      .catch((error) => {
        console.error("FAILED...", error);
      });
  };

  return (
    <>
      <div className="section-header flex justify-center items-center h-30">
        <img src={headerImg} alt="Contact title" className="object-contain" />
      </div>
      <div className="flex justify-center items-center h-5/6 ml-42">
        <Card title="Contact me">
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            className="flex flex-col gap-1"
          >
            <input
              type="hidden"
              name="contact_number"
              value="contact"
              className="hidden"
            />
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              name="from_name"
              id="user_name"
              placeholder="Name"
              className="border"
            />
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              name="reply_to"
              id="user_email"
              placeholder="Email"
              className="border p-2"
            />
            <label htmlFor="user_message">Message</label>
            <textarea
              name="message"
              id="user_message"
              placeholder="Message"
              className="border p-2"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </Card>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            <p>Your form has been submitted!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
