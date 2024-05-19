import React from "react";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaFacebookF, FaFigma, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "FIGMA Designer.", "Frontend Developer."],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className=" w-full lgl:w-1/2">
      <div className=" flex flex-col gap-3 pb-20">
        <h4 className=" text-lg font-normal capitalize">welcome to my world</h4>
        <h1 className=" text-3xl  md:text-4xl mdl:text-5xl font-bold text-white">
          hi, i am{" "}
          <span className=" text-designColor capitalize"> mamunur roshid</span>
        </h1>
        <h2 className=" text-2xl mdl:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className=" text-sm md:text-base">
          I'm a Bangladeshi based web designer & front-end developer focused on
          crafting clean & user-friendly experiences, I am passionate about
          building excellent software that improves the lives of those around
          me.
        </p>
      </div>
      <div className=" flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className=" text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className=" flex gap-4">
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
