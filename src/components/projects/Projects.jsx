import React from "react";
import Title from "../layouts/Title";
import ProjectsCart from "../banner/ProjectsCart";
import { projectOne, projectTwo, projectThree } from "../../assets";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" w-full py-20 border-b-[1px] border-b-black"
    >
      <div className=" flex justify-center items-center text-center">
        <Title
          title="visits my portfolio and keep your feedback"
          desc="my projects"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCart
          title="SOCIAL MEDIA CLONE"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCart
          title="E-COMMERCE WEBSITE"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectsCart
          title="CHATTING APP"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCart
          title="SOCIAL MEDIA CLONE"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCart
          title="E-COMMERCE WEBSITE"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectsCart
          title="CHATTING APP"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
