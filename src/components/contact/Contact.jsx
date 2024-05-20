import React, { useState } from "react";

import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setError("Username is required");
    } else if (phoneNumber === "") {
      setError("Phone number is required");
    } else if (email === "") {
      setError("Email is required");
    } else if (!emailValidation(email)) {
      setError("Give a valid Email");
    } else if (subject === "") {
      setError("Subject is required");
    } else if (message === "") {
      setError("Message is required");
    } else {
      setSuccess(
        `Thank you dear ${username}, your message has been successfully`
      );
      setError("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section
      id="contacts"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className=" flex justify-center items-center text-center">
        <Title title="CONTACT" desc="Contact With Me" />
      </div>
      <div className=" w-full">
        <div className=" w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className=" w-full lgl:w-[60%] h-full py-10 flex flex-col bg-gradient-to-r from-[#1e2024] to-[#23272b] gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className=" w-full flex flex-col gap-4 lgl:gap-8 py-2 lgl:py-5">
              {error && (
                <p className=" py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {error}
                </p>
              )}
              {success && (
                <p className=" py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {success}
                </p>
              )}
              <div className=" w-full flex flex-col lgl:flex-row gap-10">
                <div className=" w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className=" text-sm text-gray-400 uppercase tracking-wide">
                    your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      error === "Username is required" && "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className=" w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className=" text-sm text-gray-400 uppercase tracking-wide">
                    phone number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      error === "Phone number is required" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-4">
                <p className=" text-sm text-gray-400 uppercase tracking-wide">
                  email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    error === "Email is required" && "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className=" flex flex-col gap-4">
                <p className=" text-sm text-gray-400 uppercase tracking-wide">
                  subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    error === "Subject is required" && "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className=" flex flex-col gap-4">
                <p className=" text-sm text-gray-400 uppercase tracking-wide">
                  message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    error === "Message is required" && "outline-designColor"
                  } contactTextarea`}
                  id=""
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  onClick={handleSend}
                  className=" w-full h-16 mt-3 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  send message
                </button>
              </div>
              {error && (
                <p className=" py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {error}
                </p>
              )}
              {success && (
                <p className=" py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {success}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
