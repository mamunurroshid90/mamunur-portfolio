import React from "react";

import ResumeCart from "./ResumeCart";
import { motion } from "framer-motion";
import { certificate_English_lifeTime } from "../../assets";
import { certificate_git_gitHub } from "../../assets";
import { certificate_html_css } from "../../assets";
import { certificate_leaderShip } from "../../assets";
import AchievementCart from "./AchievementCart";

const Achivement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className=" flex flex-col lgl:flex-row justify-between items-center gap-10 lgl:gap-20"
    >
      <div className="">
        <div className=" py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className=" text-sm text-designColor tracking-[4px]">
            1998 - 2010
          </p>
          <h2 className=" text-3xl md:text-4xl font-bold">
            Company Experience
          </h2>
        </div>
        <div className=" mt-6 lgl:mt-14 h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
          <AchievementCart />
        </div>
      </div>
      {/* <div className="">
        <div className=" py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className=" text-sm text-designColor tracking-[4px]">
            2010 - 2022
          </p>
          <h2 className=" text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className=" mt-6 lgl:mt-14 h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
          <ResumeCart
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            desc="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCart
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            desc="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCart
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            desc="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achivement;
