import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen border-t-2">
      {/* Container */}
      <div className=" jua max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="pb-20 md:pb-0"></p>
          <p className=" text-3xl md:text-4xl text-center md:text-start px-4 md:px-12 font-bold ">Skills</p>
          <p className=" text-sm md:text-base text-center md:text-start px-4 md:px-12 py-1 md:py-4">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-[70%]  md:w-[90%] xl:w-full  grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto text-center py-2">
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 sm:w-12 md:w-20 mx-auto pt-6" src={HTML} alt="HTML icon" />
            <p className=" text-xs sm:text-sm md:text-base my-[0.35rem] sm:my-2 md:my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 sm:w-12 md:w-20 mx-auto pt-6" src={CSS} alt="HTML icon" />
            <p className=" text-xs sm:text-sm md:text-base my-[0.35rem] sm:my-2 md:my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 sm:w-12 md:w-20 mx-auto pt-6" src={JavaScript} alt="HTML icon" />
            <p className=" text-xs sm:text-sm md:text-base my-[0.35rem] sm:my-2 md:my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 sm:w-12 md:w-20 mx-auto pt-6" src={ReactImg} alt="HTML icon" />
            <p className=" text-xs sm:text-sm md:text-base my-[0.35rem] sm:my-2 md:my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 sm:w-12 md:w-20 mx-auto pt-6" src={Node} alt="HTML icon" />
            <p className=" text-xs sm:text-sm md:text-base my-[0.35rem] sm:my-2 md:my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 sm:w-12 md:w-20 mx-auto pt-6" src={Mongo} alt="HTML icon" />
            <p className=" text-xs sm:text-sm md:text-base my-[0.35rem] sm:my-2 md:my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 sm:w-12 md:w-20 mx-auto pt-6" src={Tailwind} alt="HTML icon" />
            <p className=" text-xs sm:text-sm md:text-base my-[0.35rem] sm:my-2 md:my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 sm:w-12 md:w-20 mx-auto pt-6" src={GitHub} alt="HTML icon" />
            <p className=" text-xs sm:text-sm md:text-base my-[0.35rem] sm:my-2 md:my-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
