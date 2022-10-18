import React from 'react';
import { data } from '../dummyData/data.js';

const Projects = ({ isToggleOn }) => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name="projects" className="w-full h-screen bg-white] border-t-[1px]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="pb-20 md:pb-0"></p>
          <p className="px-4  text-4xl font-bold">Projects</p>
          <p className="py-2 px-4">Check out some of my recent Projects</p>
        </div>

        {/* container for projects */}
        <div className="grid  md:grid-cols-2 md:gap-4">
          {/* Gird Item */}
          {isToggleOn
            ? null
            : project.map((item, index) => (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${item.image})` }}
                  className="shadow-lg shadow-[#040c16] group container rounded-md mb-8 md:mb-0
                flex justify-center text-center items-center mx-auto content-div "
                >
                  {/* Hover effect for images */}
                  <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white tracking-wider ">
                      {item.name}
                    </span>
                    <div className="pt-8 text-center ">
                      {/* eslint-disable-next-line */}
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopenner noreferrer"
                      >
                        <button
                          className="text-center rounded-lg px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-lg"
                        >
                          Code
                        </button>
                      </a>
                      {/* eslint-disable-next-line */}
                      <a href={item.live} target="_blank">
                        <button
                          className="text-center rounded-lg px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-lg"
                        >
                          Live
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
