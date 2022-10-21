import React from 'react';

import Redux from '../assets/redux.png';
import Git from '../assets/git.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen border-t-2">
      {/* Container */}
      <div className="  max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="pb-20 md:pb-0"></p>
          <p className=" nanum text-3xl md:text-5xl text-center md:text-start px-4 md:px-12 font-bold ">Skills</p>
          <p className=" pt-8 pb-4 w-[90%] mx-auto md:mx-0 text-sm md:text-base text-center md:text-start px-4 md:px-12 py-1 md:py-4">
            프로젝트를 진행하면서 사용해본 경험이 있고 소스코드를 이해할 수 있는 기술 스택입니다.
          </p>
        </div>

        <div className=" jua w-[70%]  md:w-[90%] xl:w-full  grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto text-center py-2">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 sm:w-12 md:w-20 mx-auto pt-6" src={JavaScript} alt="HTML icon" />
            <p className=" text-xs sm:text-sm md:text-base my-[0.35rem] sm:my-2 md:my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 sm:w-12 md:w-20 mx-auto pt-6" src={ReactImg} alt="HTML icon" />
            <p className=" text-xs sm:text-sm md:text-base my-[0.35rem] sm:my-2 md:my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 sm:w-12 md:w-20 mx-auto pt-6" src={Redux} alt="HTML icon" />
            <p className=" text-xs sm:text-sm md:text-base my-[0.35rem] sm:my-2 md:my-4">REDUX</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 sm:w-12 md:w-20 mx-auto pt-6" src={Node} alt="HTML icon" />
            <p className=" text-xs sm:text-sm md:text-base my-[0.35rem] sm:my-2 md:my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 sm:w-12 md:w-20 mx-auto pt-6" src={Tailwind} alt="HTML icon" />
            <p className=" text-xs sm:text-sm md:text-base my-[0.35rem] sm:my-2 md:my-4">TAILWINDCSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-10 sm:w-12 md:w-20 mx-auto pt-6" src={Git} alt="HTML icon" />
            <p className=" text-xs sm:text-sm md:text-base my-[0.35rem] sm:my-2 md:my-4">GIT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
