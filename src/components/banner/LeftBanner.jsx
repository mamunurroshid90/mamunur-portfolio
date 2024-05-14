import React from "react";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaFacebookF, FaFigma, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Web Designer.", "Front-end Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className=" w-1/2">
      <div className=" flex flex-col gap-3 pb-20">
        <h4 className=" text-lg font-normal capitalize">welcome to my world</h4>
        <h1 className=" text-6xl font-bold text-white">
          hi, i am{" "}
          <span className=" text-designColor capitalize">john doe</span>
        </h1>
        <h2 className=" text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p>
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
      <div className=" flex justify-between">
        <div>
          <h2 className=" text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className=" text-base uppercase font-titleFont mb-4">
            best skill on
          </h2>
          <div className=" flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
