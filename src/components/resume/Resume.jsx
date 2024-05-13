import React, { useState } from "react";

import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achivement from "./Achivement";
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillSData, setSkillsData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  return (
    <section
      id="resume"
      className=" w-full py-20 border-b-[1px] border-b-black"
    >
      <div className=" flex justify-center items-center text-center">
        <Title title="7+ YEARS OF EXPERIENCE" desc="My Resume" />
      </div>
      <div>
        <ul className=" w-full grid grid-cols-4 text-center">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillsData(false) &
              setAchievementData(false) &
              setExperienceData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : " border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillsData(true) &
              setAchievementData(false) &
              setExperienceData(false)
            }
            className={`${
              skillSData
                ? "border-designColor rounded-lg"
                : " border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillsData(false) &
              setAchievementData(false) &
              setExperienceData(true)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : " border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillsData(false) &
              setAchievementData(true) &
              setExperienceData(false)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : " border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillSData && <Skills />}
      {achievementData && <Achivement />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
