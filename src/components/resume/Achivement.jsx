import React from "react";

import ResumeCart from "./ResumeCart";
import { motion } from "framer-motion";
import { certificate_git_gitHub } from "../../assets";
import { certificate_English_lifeTime } from "../../assets";
import { certificate_html_css } from "../../assets";
import { certificate_leaderShip } from "../../assets";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className=" "
    >
      {/* part one  */}
      <div>
        <div className=" py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className=" text-sm text-designColor tracking-[4px]">
            2011 - 2022
          </p>
          <h2 className=" text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className=" grid grid-cols-1 mdl:grid-cols-2 gap-6 lg:gap-10">
          <div className=" w-full h-[350px] p-6 bg-black rounded-xl group">
            <div className=" w-full h-[250px] overflow-hidden object-cover rounded-lg group-hover:scale-105 duration-300">
              <img
                className=" w-full h-full rounded-2xl object-top"
                src={certificate_html_css}
                alt="certificate_html_css"
              />
            </div>
            <div className=" text-2xl text-lightText text-center pt-2 font-bold">
              <h3>This certificate is from Udemy</h3>
            </div>
          </div>
          <div className=" w-full h-[350px] p-6 bg-black rounded-xl group">
            <div className=" w-full h-[250px] overflow-hidden object-cover rounded-lg group-hover:scale-105 duration-300">
              <img
                className=" w-full h-full rounded-2xl object-top"
                src={certificate_git_gitHub}
                alt="certificate_git_gitHub"
              />
            </div>
            <div className=" text-2xl text-lightText text-center pt-2 font-bold">
              <h3>This certificate is from Udemy</h3>
            </div>
          </div>
          <div className=" w-full h-[350px] p-6 bg-black rounded-xl group">
            <div className=" w-full h-[250px] overflow-hidden object-cover rounded-lg group-hover:scale-105 duration-300">
              <img
                className=" w-full h-full rounded-2xl object-top"
                src={certificate_English_lifeTime}
                alt="certificate_English_lifeTime"
              />
            </div>
            <div className=" text-2xl text-lightText text-center pt-2 font-bold">
              <h3>This certificate is from English LifeTime</h3>
            </div>
          </div>
          <div className=" w-full h-[350px] p-6 bg-black rounded-xl group">
            <div className=" w-full h-[250px] overflow-hidden object-cover rounded-lg group-hover:scale-105 duration-300">
              <img
                className=" w-full h-full rounded-2xl object-top"
                src={certificate_leaderShip}
                alt="certificate_leaderShip"
              />
            </div>
            <div className=" text-2xl text-lightText text-center pt-2 font-bold">
              <h3>This certificate is from YSDI</h3>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
