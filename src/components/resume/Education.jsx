import React from "react";

import ResumeCart from "./ResumeCart";
import { motion } from "framer-motion";

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
            2011 - 2022
          </p>
          <h2 className=" text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="  grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="mt-3 lgl:mt-14 h-auto border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
            <div className=" flex flex-col gap-6">
              <ResumeCart
                title="Honors of Bangla Department."
                subTitle="Dhaka College (2017 - 22)"
                result="2.50/4"
                desc="The Bangla Department excels in Bengali language, literature, and culture studies, fostering academic excellence, research, and preserving linguistic heritage through innovative teaching and scholarship."
              />
            </div>
            <div className=" flex flex-col gap-10">
              <ResumeCart
                title="Higher Secondary Certificate."
                subTitle="TMKM (2014 - 16)"
                result="4.86/5"
                desc="HSC (Higher School Certificate) is a secondary school qualification in Dhaka, assessing students' academic performance for college entrance and further education opportunities."
              />
            </div>
          </div>
          <div className="mt-3 lgl:mt-14 h-auto border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
            <div className=" flex flex-col gap-10">
              <ResumeCart
                title="Secondary School Certificate."
                subTitle="TIKM (2014)"
                result="5.00/5"
                desc="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
              />
            </div>
            <div className=" flex flex-col gap-10">
              <ResumeCart
                title="Junior Dakhil Certificate."
                subTitle="TIKM (2011)"
                result="5.00/5"
                desc="This is an examination conducted for students in Islamic religious schools (madrasahs) in Bangladesh, typically at the end of grade 8."
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
