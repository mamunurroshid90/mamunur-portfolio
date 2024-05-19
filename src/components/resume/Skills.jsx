import React from "react";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className=" w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className=" w-full lgl:w-1/2 py-12">
        <div className=" font-titleFont flex flex-col gap-4">
          <p className=" text-sm text-designColor tracking-[4px]">FEATURES</p>
          <h2 className=" text-3xl md:text-4xl font-bold">Design Skill</h2>
        </div>
        <div className=" mt-14 w-full flex flex-col gap-6">
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">
              Know the principles of design
            </p>
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className=" w-[60%] h-2 bgOpacity inline-flex rounded-md mt-2"
            >
              <span className=" w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"></span>
            </motion.span>
          </div>
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">Color Theory</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">
              User Interface (UI)
            </p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">Responsive design</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">
              Software for design
            </p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2 py-12">
        <div className=" font-titleFont flex flex-col gap-4">
          <p className=" text-sm text-designColor tracking-[4px]">FEATURES</p>
          <h2 className=" text-3xl md:text-4xl font-bold">Development Skill</h2>
        </div>
        <div className=" mt-14 w-full flex flex-col gap-6">
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">html & css</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">
              tailwind & bootstrap
            </p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">javascript</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">react JS & next JS</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">firebase</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
