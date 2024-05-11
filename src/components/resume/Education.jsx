import React from "react";
import ResumeCart from "./ResumeCart";

const Education = () => {
  return (
    <div className=" flex justify-between items-center gap-20">
      <div>
        <div className=" py-12 font-titleFont">
          <p className=" text-sm text-designColor tracking-[4px]">
            1998 - 2010
          </p>
          <h2 className=" text-4xl font-bold">Education Quality</h2>
        </div>
        <div className=" mt-14 h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
          <ResumeCart
            title="BSc in Computer Science"
            subTitle="University of DVI (2006 - 2010)"
            result="3.90/4"
            desc="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCart
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            desc="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCart
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            desc="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      <div>
        <div className=" py-12 font-titleFont">
          <p className=" text-sm text-designColor tracking-[4px]">
            2010 - 2022
          </p>
          <h2 className=" text-4xl font-bold">Job Experience</h2>
        </div>
        <div className=" mt-14 h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
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
      </div>
    </div>
  );
};

export default Education;