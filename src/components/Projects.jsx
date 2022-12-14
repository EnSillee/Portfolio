import React from 'react';
import { projectData } from '../dummyData/projectData.js';

const Projects = ({ isToggleOn }) => {
  // projects file
  
  //setProject(data);

  return (
    <div name="projects" className="w-full h-screen bg-white] border-t-[1px]">
      <div className="max-w-[1050px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="pb-20 md:pb-0"></p>
          <p className=" nanum px-10 xs:px-14 sm:px-16 md:px-10 text-3xl md:text-5xl font-bold text-center md:text-left">
            Projects
          </p>
          <p className="pt-2 pb-4 md:pb-6 md:py-2 px-10 xs:px-14 sm:px-16 md:px-10 text-sm md:text-base text-center md:text-left">
            목표하는 가치를 실현하기 위해 4인의 팀원들과 개발한 프로젝트들을
            Github Wiki 페이지에 정리했습니다.
          </p>
        </div>

        {/* container for projects */}
        <div className="grid md:grid-cols-2 md:gap-4 md:px-10">
          {/* Gird Item */}
          {isToggleOn
            ? null
            : projectData.map((project) => (
                <div
                  key={project.id}
                  style={{ backgroundImage: `url(${project.image})` }}
                  className=" w-[80%] md:w-full shadow-lg shadow-[#040c16] group container rounded-md mb-4 sm:mb-8 md:mb-12
                flex justify-center text-center items-center mx-auto content-div h-[180px] sm:h-[200px] md:h-[250px]"
                >
                  {/* Hover effect for images */}
                  <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="mt-2 text-2xl font-bold text-white tracking-wider ">
                      {project.name}
                    </span>
                    {/* <span className=' text-white'>{item.value}</span> */}
                    <p className=" mt-2 text-sm font-bold text-white tracking-wider max-w-xs ">
                      {project.content}
                    </p>
                    <div className="pt-4 text-center ">
                      {/* eslint-disable-next-line */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopenner noreferrer"
                      >
                        <button
                          className="text-center rounded-lg px-3 xs:px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-xs xs:text-sm md:text-lg"
                        >
                          코드
                        </button>
                      </a>
                      {/* eslint-disable-next-line */}
                      {project.live === '' ? null : (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopenner noreferrer"
                        >
                          <button
                            className="text-center rounded-lg px-3 xs:px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-xs xs:text-sm md:text-lg"
                          >
                            배포
                          </button>
                        </a>
                      )}
                      {/* eslint-disable-next-line */}
                      <a
                        href={project.wiki}
                        target="_blank"
                        rel="noopenner noreferrer"
                      >
                        <button
                          className="text-center rounded-lg px-3 xs:px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-xs xs:text-sm md:text-lg"
                        >
                          위키
                        </button>
                      </a>
                      {/* eslint-disable-next-line */}
                      <a
                        href={project.dev}
                        target="_blank"
                        rel="noopenner noreferrer"
                      >
                        <button
                          className="text-center rounded-lg px-3 xs:px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-xs xs:text-sm md:text-lg"
                        >
                          회고
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
