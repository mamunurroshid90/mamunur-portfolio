import React from "react";

import { motion } from "framer-motion";
import { certificate_git_gitHub } from "../../assets";
import { certificate_English_lifeTime } from "../../assets";
import { certificate_html_css } from "../../assets";
import { certificate_leaderShip } from "../../assets";
import AchievementCart from "./AchievementCart";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className=" "
    >
      <div>
        <div className=" py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className=" text-sm text-designColor tracking-[4px]">
            2022 - 2024
          </p>
          <h2 className=" text-3xl md:text-4xl font-bold">My Achievements</h2>
        </div>
        <div className=" grid grid-cols-1 mdl:grid-cols-2 gap-10">
          <AchievementCart
            title="This certificate is from Udemy about HTML & CSS"
            src={certificate_html_css}
          />
          <AchievementCart
            title="This certificate is from Udemy about git and gitHub"
            src={certificate_git_gitHub}
          />
          <AchievementCart
            title="This certificate is from English LifeTime"
            src={certificate_English_lifeTime}
          />
          <AchievementCart
            title="This certificate is from Youth skill development institute trust"
            src={certificate_leaderShip}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
