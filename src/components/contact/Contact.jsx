import React from "react";

import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  return (
    <section
      id="contacts"
      className=" w-full py-20 border-b-[1px] border-b-black"
    >
      <div className=" flex justify-center items-center text-center">
        <Title title="CONTACT" desc="Contact With Me" />
      </div>
      <div className=" w-full">
        <div className=" w-full h-auto flex justify-between">
          <ContactLeft />
          <div className=" w-[60%] h-full flex flex-col justify-between bg-blue-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
