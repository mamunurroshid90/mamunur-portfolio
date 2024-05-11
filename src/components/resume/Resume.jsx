import React from "react";
import Title from "../layouts/Title";
import ResumeCart from "./ResumeCart";
import Education from "./Education";

const Resume = () => {
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
          <li className="resumeLi">Education</li>
          <li className="resumeLi">Professional Skills</li>
          <li className="resumeLi">Experience</li>
          <li className="resumeLi">Achievements</li>
        </ul>
      </div>
      <Education />
    </section>
  );
};

export default Resume;
