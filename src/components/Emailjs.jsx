import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Emailjs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_l1lm4uq", "template_8ge1dql", form.current, {
        publicKey: "WmAf4xpExppRdxjj5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("message send");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 underline">
            Contact Form
          </h1>
          <p className="text-gray-600">Please leave your message here...</p>
        </div>

        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4"
        >
          <input
            name="user_name"
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            name="user_email"
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <textarea
            name="message"
            placeholder="Enter your message"
            className="border border-gray-300 rounded-md p-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
          >
            Let's Talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Emailjs;
