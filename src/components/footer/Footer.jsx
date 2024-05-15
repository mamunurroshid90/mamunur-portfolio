import React from "react";

import { logo } from "../../assets";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full py-20 h-96 border-b-[1px] border-b-black grid grid-cols-4 gap-8">
      <div className=" w-full h-full flex flex-col gap-8">
        <img className=" w-32" src={logo} alt="logo" />
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
      <div className=" w-full h-full">
        <h3 className=" text-xl uppercase text-designColor tracking-wider">
          quick link
        </h3>
        <ul className=" flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group capitalize">
              about
              <span className=" absolute h-[1px] w-full bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group capitalize">
              portfolio
              <span className=" absolute h-[1px] w-full bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group capitalize">
              service
              <span className=" absolute h-[1px] w-full bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group capitalize">
              blog
              <span className=" absolute h-[1px] w-full bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group capitalize">
              contact
              <span className=" absolute h-[1px] w-full bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className=" w-full h-full">
        <h3 className=" text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className=" flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group capitalize">
              Authentication
              <span className=" absolute h-[1px] w-full bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group capitalize">
              System Status
              <span className=" absolute h-[1px] w-full bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group capitalize">
              Terms of Service
              <span className=" absolute h-[1px] w-full bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group capitalize">
              Pricing
              <span className=" absolute h-[1px] w-full bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group capitalize">
              Over Right
              <span className=" absolute h-[1px] w-full bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className=" w-full h-full">
        <h3 className=" text-xl uppercase text-designColor tracking-wider">
          DEVELOPERS
        </h3>
        <ul className=" flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group capitalize">
              Documentation
              <span className=" absolute h-[1px] w-full bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group capitalize">
              Authentication
              <span className=" absolute h-[1px] w-full bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group capitalize">
              API Reference
              <span className=" absolute h-[1px] w-full bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group capitalize">
              Support
              <span className=" absolute h-[1px] w-full bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group capitalize">
              Open Source
              <span className=" absolute h-[1px] w-full bg-designColor inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;