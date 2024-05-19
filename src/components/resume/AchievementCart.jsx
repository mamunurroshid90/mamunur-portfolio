import React from "react";

import { certificate_html_css } from "../../assets";
const AchievementCart = () => {
  return (
    <div className=" w-full h-[250px] group flex">
      <div className=" w-10 h-[6px] bgOpacity mt-16 relative">
        <span className=" absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className=" w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className=" w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className=" flex flex-col md:flex-row justify-between lgl:items-center gap-4 lgl:gap-0">
          <div>
            <img src={certificate_html_css} alt="" />
          </div>
        </div>
        {/* <p className=" text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {desc}
        </p> */}
      </div>
    </div>
  );
};

export default AchievementCart;