import React from 'react';

const Contact = () => {
  return (
    <div
      id="contact"
      className=" w-full h-screen flex justify-center items-center p-4 bg-gray-200"
    >
      <form
        method="POST"
        action="https://getform.io/f/9d49ed3c-bbc2-427e-abab-825789d54ed1"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-4 md:pb-8">
          <p className="pb-28"></p>
          <p className="px-1 pb-1 text-2xl md:text-4xl font-bold text-gray-700">
            Contact
          </p>
          <p className="px-1 pt-1 text-xs md:text-base">
            <span>아래 양식으로 제안을 주시거나 </span>
            <a
              href="mailto:ensillee22@gmail.com"
              target="_blank"
              rel="noopenner noreferrer"
              className=' text-blue-500'
            >
              ensillee22@gmail.com
            </a>
            <span>로 이메일을 보내주세요.</span>
          </p>
        </div>
        <input
          className="bg-white p-0 md:p-2"
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          className="bg-white my-4 p-0 md:p-2"
          name="email"
          type="text"
          placeholder="Email"
        />
        <textarea
          className="bg-white p-0 md:p-2"
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className=" hover:bg-[#aecf52] shadow-lg rounded-lg border-white border-2 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate!
        </button>
      </form>
    </div>
  );
};

export default Contact;
