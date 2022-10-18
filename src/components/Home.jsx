import React from 'react';
import { Link } from 'react-scroll';
// import background from '../assets/growth.png'

const Home = () => {
  return (
    <div name="home" className=" jua w-full h-screen bg-gradient-to-r from-cyan-100 to-blue-200">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <p className=" text-blue-300"></p>
        <h1 className=" text-xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#3e5ec6]">
          <div className='mb-6 mt-12 text-center md:mt-24'>개발 프로세스와 성능개선에 대해</div>
          {/* <div className='mb-6 text-center'>미션과 비전에 대해</div> */}
          <div className=' text-center'>고민하고 성장하는</div>
        </h1>
        <h2 className=" text-xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#aecf52] pt-12">
          프론트엔드 개발자 이정윤 &nbsp;
          <span>

          입니다.
          </span>
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
        </p>
        <div>
          <button>
            <Link
              to="about"
              smooth={true}
              duration={200}
              className=" text-lg xs:text-1xl sm:text-2xl md:text-3xl duration-300 group text-black border-2 border-white px-8 py-4 mt-12 flex items-center hover:bg-white hover:scale-110 shadow-lg"
            >
              About Me
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
