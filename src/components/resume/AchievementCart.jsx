import React from "react";

const AchievementCart = ({ title, src }) => {
  return (
    <div className=" w-full h-auto p-4 xl:px-12 xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className=" w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className=" w-full h-64 object-top group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className=" w-full mt-5">
        <div className=" text-center">
          <h3 className=" text-2xl text-lightText capitalize">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default AchievementCart;
