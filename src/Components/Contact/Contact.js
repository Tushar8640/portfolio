import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [feedback, setFeedback] = useState("");
  const [alert, setAlert] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ytz79fg",
        "template_u856jah",
        e.target,
        "user_ef0HVLpZpJA3ZXxqOJTZO"
      )
      .then(
        (result) => {
          if (result) {
            setAlert(true);
            setFeedback("Thank you! I will Contact You Soon");
          }
          console.log(result.text);
        },
        (error) => {
          setFeedback(error.text);
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section data-aos="zoom-in-right" id="contact" className="my-12">
      {" "}
      <h2 className="w-full text-center text-3xl font-bold leading-tight">Contact Me</h2>
      <section className="p-6 text-coolGray-800">
        <form
          onSubmit={sendEmail}
          novalidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-coolGray-50 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label for="name" className="block mb-1 ml-1">
              Name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Your name"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-600 bg-coolGray-100"
            />
          </div>
          <div>
            <label for="email" className="block mb-1 ml-1">
              Email
            </label>
            <input
              name="user_email"
              id="email"
              type="email"
              placeholder="Your email"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-600 bg-coolGray-100"
            />
          </div>
          <div>
            <label for="message" className="block mb-1 ml-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              type="text"
              placeholder="Message..."
              className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-600 bg-coolGray-100"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-blue-600 focus:ring-blue-600 hover:ring-blue-600 text-coolGray-50"
            >
              Send
            </button>

            {alert && (
              <div className="flex my-3">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 mt-1 text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="text-sm text-green-600">
                    <p className="text-xl">{feedback}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </section>
    </section>
  );
};

export default Contact;
