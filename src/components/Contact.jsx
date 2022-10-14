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
        <div className="pb-8">
          <p className="pb-28"></p>
          <p className="px-1 text-4xl font-bold text-gray-700">Contact</p>
          <p className='px-1'>
            Submit the form below or shoot me an email - ensillee22@gmail.com
          </p>
        </div>
        <input
          className="bg-white p-2"
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          className="bg-white my-4 p-2"
          name="email"
          type="text"
          placeholder="Email"
        />
        <textarea
          className="bg-white p-2"
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
