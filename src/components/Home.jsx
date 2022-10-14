import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#ffffff]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-blue-300">EnSillee</p>
        <h1 className=" text-4xl sm:text-7xl font-bold text-[#3e5ec6]">
          이 정 윤
        </h1>
        <h2 className=" text-4xl sm:text-7xl font-bold text-[#aecf52]">
          Front-End Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a Front-End developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button>
            <Link
              to="projects"
              smooth={true} duration={500}
              className=" duration-300 group text-black border-2 px-6 py-3 my-2 flex items-center hover:bg-[#aecf52] shadow-lg"
            >
              View Projects
              <span className=" group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
