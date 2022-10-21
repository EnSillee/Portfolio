import React from 'react';
import profileimg from '../assets/profile_img.png';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-white">
      <div className=" flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[620px] md:max-w-[1250px] w-full grid grid-cols-1 gap-8 mt-32 md:mt-20">
          <div className=" nanum font-bold mx-auto mb-6 text-3xl md:text-5xl md:pt-0">
            About Me
          </div>
        </div>

        <div className=" max-w-[620px] md:max-w-[1250px] w-full grid md:grid-cols-2 gap-4 sm:gap-8 px-4">
          
          <div className=" sm:text-right text-4xl my-auto">
            <span className='mt-4'>
              <img
                src={profileimg}
                alt="profile"
                className=" mx-auto w-[12rem] sm:w-[15rem] md:w-[18rem] lg:w-[20rem] "
              />
            </span>
          </div>

          <div className='nanum mx-6 xs:mx-10 md:mr-20 lg:mr-12 xl:mr-8'>
            <p className=' mt-4 pb-3 md:pt-0 md:mt-8 text-xs sm:text-sm lg:text-xl'>
              Javascript 기반 풀 스택 부트캠프를 수료하고 2개의 팀 프로젝트를
              진행하면서 한 번은 프론트엔드, 한 번은 백엔드로 React, Redux,
              Node.js, AWS, Github를 이용해 <strong>설계부터 배포까지 해본 경험</strong>이
              있습니다.
            </p>
            <p className=' pb-3 text-xs sm:text-sm lg:text-xl '>
             <strong>매일 회고 블로깅</strong>을 통해 더 나은 개발 프로세스와 성능개선에 대해 고민을 하고 성장 과정을 기록합니다.
            </p>
            <p className=' pb-3  text-xs sm:text-sm lg:text-xl '>
            소대장 복무 경험을 통해  <strong>주도적이고 책임감 있게 주어진 업무를 해결</strong>합니다.
            </p>
            <p className=' mb-16 text-xs sm:text-sm lg:text-xl md:mb-0'>
            파이널 프로젝트에서 부트캠프 과정 중 집중적으로 학습했던 MySQL이 아닌 MongoDB를 도입하는 등 <strong>새로운 기술을 도입에 적극적</strong>입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
