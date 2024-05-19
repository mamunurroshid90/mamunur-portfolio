import React from "react";

import Title from "../layouts/Title";
import Cart from "./Cart";
import { BsFiletypePsd } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaCode } from "react-icons/fa";

const Features = () => {
  return (
    <section
      id="features"
      className=" w-full py-10 lg:py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" desc="What I Do" />
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Cart
          title="Web Development"
          desc="Web development involves designing, coding, and maintaining websites and web applications to ensure functionality, aesthetics, and user experience."
          icon={<FaCode />}
        />
        <Cart
          title="Web Design"
          desc="Web design involves creating visually appealing and user-friendly websites, focusing on layout, color schemes, typography, and responsive functionality."
          icon={<AiOutlineAntDesign />}
        />
        <Cart
          title="FIGMA to HTML"
          desc="Convert Figma designs to HTML code seamlessly, enabling responsive and pixel-perfect web development with automated tools for designers and developers."
          icon={<FiFigma />}
        />
        <Cart
          title="PSD to HTML"
          desc="PSD to HTML conversion transforms Photoshop design files into HTML code, enabling web pages with structured, styled, and interactive content."
          icon={<BsFiletypePsd />}
        />
      </div>
    </section>
  );
};

export default Features;
