import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-indigo-900 text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className=" sm:text-right pb-8 pl-4">
            <p className=" text-5xl font-bold inline border-b-4 border-green-300">
              About
            </p>
          </div>

          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>반갑습니다. 이정윤입니다.</p>
            <p>여기는 자기 소개 페이지입니다.</p>
          </div>
          <div>
            <p>
              Javascript 기반 풀 스택 부트캠프를 수료하고 2개의 팀 프로젝트를
              진행하면서 한 번은 프론트엔드, 한 번은 백엔드로 React, Redux,
              Node.js, AWS, Github를 이용해 설계부터 배포까지 해본 경험이
              있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
