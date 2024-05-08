import React from "react";

import Title from "../layouts/Title";
import Cart from "./Cart";
import { FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { FaMobile } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import { AiFillAppstore } from "react-icons/ai";
// import { FaBars } from "react-icons/fa";

const Features = () => {
  return (
    <section
      id="features"
      className=" w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" desc="What I Do" />
      <div className=" grid grid-cols-3 gap-20">
        <Cart
          title="Business Stratagy"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          // icon={<FaBars />}
        />
        <Cart
          title="App Development"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          icon={<AiFillAppstore />}
        />
        <Cart
          title="SEO Optimisation"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          icon={<SiProgress />}
        />
        <Cart
          title="Mobile Development"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          icon={<FaMobile />}
        />
        <Cart
          title="UX Design"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          icon={<SiAntdesign />}
        />
        <Cart
          title="Hosting Websites"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
