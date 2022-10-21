import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { DiTravis } from 'react-icons/di';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div
      id="contact"
      className=" w-full h-[12rem] md:h-screen flex flex-col justify-center items-center p-4 bg-gray-300"
    >
      <form
        method="POST"
        action="https://getform.io/f/9d49ed3c-bbc2-427e-abab-825789d54ed1"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-2 md:pb-8">
          <p className="md:pb-28"></p>
          <p className="px-1 pb-1 text-center md:text-left text-3xl md:text-4xl font-bold text-white md:text-gray-700">
            Contact
          </p>
          <p className="px-1 pt-2 md:pt-1 text-xs md:text-base text-center md:text-left text-white md:text-black">
            <span className=" hidden md:block ">
              아래 양식으로 제안을 주시거나{' '}
            </span>
            <a
              href="mailto:ensillee22@gmail.com"
              target="_blank"
              rel="noopenner noreferrer"
              className="hidden md:inline text-white md:text-blue-500"
            >
              ensillee22@gmail.com
            </a>
            <span className="hidden md:inline">로 이메일을 보내주세요.</span>
          </p>
        </div>

        <input
          className="hidden md:block bg-white p-0 md:p-2"
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          className="hidden md:block bg-white my-4 p-0 md:p-2"
          name="email"
          type="text"
          placeholder="Email"
        />
        <textarea
          className="hidden md:block bg-white p-0 md:p-2"
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="hidden md:block hover:bg-[#aecf52] shadow-lg rounded-lg border-white border-2 px-4 py-3 my-8 mx-auto items-center">
          Let's Collaborate!
        </button>
      </form>

      <div className=" md:hidden w-full flex justify-center">
        <a
          href="https://github.com/EnSillee"
          target="_blank"
          rel="noopenner noreferrer"
          className="mx-4"
        >
          <FaGithub size={35} className=" text-white hover:text-blue-300" />
        </a>
        <a
          href="https://engelsmile.tistory.com/"
          target="_blank"
          rel="noopenner noreferrer"
          className="mx-4"
        >
          <DiTravis size={35} className=" text-white hover:text-blue-300" />
        </a>
        <a
          href="mailto:ensillee22@gmail.com"
          target="_blank"
          rel="noopenner noreferrer"
          className="mx-4"
        >
          <HiOutlineMail
            size={40}
            className=" text-white hover:text-blue-300"
          />
        </a>
      </div>

      <div className=" w-full flex flex-col items-center mt-4 text-white md:text-gray-500 text-xs">
        <div className="">ⓒ 2022. Ensillee. All right reserved.</div>
        <div className="">
          본 사이트는 개인 포트폴리오 사이트 목적으로 제작되었습니다.
        </div>
      </div>
    </div>
  );
};

export default Contact;
