import React from "react";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className=" flex gap-20"
    >
      <div className=" w-1/2 py-12">
        <div className=" font-titleFont flex flex-col gap-4">
          <p className=" text-sm text-designColor tracking-[4px]">FEATURES</p>
          <h2 className=" text-4xl font-bold">Design Skill</h2>
        </div>
        <div className=" mt-14 w-full flex flex-col gap-6">
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">photo shop</p>
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2"
            >
              <span className=" w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className=" absolute -mt-7 right-0">100%</span>
              </span>
            </motion.span>
          </div>
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">photo shop</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -mt-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">photo shop</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -mt-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">photo shop</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -mt-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">photo shop</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -mt-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-1/2 py-12">
        <div className=" font-titleFont flex flex-col gap-4">
          <p className=" text-sm text-designColor tracking-[4px]">FEATURES</p>
          <h2 className=" text-4xl font-bold">Development Skill</h2>
        </div>
        <div className=" mt-14 w-full flex flex-col gap-6">
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">photo shop</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -mt-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">photo shop</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -mt-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">photo shop</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -mt-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">photo shop</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -mt-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className=" uppercase text-sm font-medium">photo shop</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className=" absolute -mt-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
