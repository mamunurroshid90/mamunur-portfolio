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
        <h3 className=" text-3xl font-bold text-white">John Doe</h3>
        <h4 className=" text-lg font-normal text-gray-400">
          MERN Stack Developer
        </h4>
        <p className=" text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className=" text-base text-gray-400 flex items-center gap-2">
          Phone: <span className=" text-lightText">+968 97859628</span>
        </p>
        <p className=" text-base text-gray-400 flex items-center gap-2">
          Email:
          <span className=" text-lightText">noor.jsdivs@gmail.com</span>
        </p>
      </div>
      <div className=" flex flex-col gap-4">
        <h2 className=" text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className=" flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
