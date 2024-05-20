import React from "react";

import { contactImg } from "../../assets";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className=" w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center">
      <img
        className=" w-full h-64 rounded-lg object-cover"
        src={contactImg}
        alt="contactImg"
      />
      <div className=" flex flex-col gap-4 mt-2">
        <h3 className=" text-3xl font-bold text-white">Mamunur Roshid</h3>
        <h4 className=" text-xl font-normal text-gray-400">
          Junior Frontend Developer
        </h4>
        <p className=" text-base text-gray-400 tracking-wide">
          I'm a Bangladeshi based web designer & front-end developer focused on
          crafting clean & user-friendly experiences, I am passionate about
          building excellent software that improves the lives of those around
          me.
        </p>
        <p className=" text-base text-gray-400 flex items-center gap-2">
          Phone: <span className=" text-lightText">+880 1761700244</span>
        </p>
        <p className=" text-base text-gray-400 flex items-center gap-2">
          Email:
          <span className=" text-lightText">nijummamun7@gmail.com</span>
        </p>
      </div>
      <div className=" flex flex-col gap-4">
        <h2 className=" text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className=" flex gap-6">
          <a
            href="https://www.facebook.com/mamunroshid93"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a
            href="https://x.com/roshidmamun9090"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaTwitter />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/mamunroshid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
