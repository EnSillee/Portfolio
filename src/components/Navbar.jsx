import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaFacebook } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {DiTravis} from 'react-icons/di'
import Logo from '../assets/logo2.png';

const Navbar = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleClick = () => setIsToggleOn(!isToggleOn)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#B3A783] text-white">
      <div>
        <img src={Logo} alt="Logo" style={{ width: '65px' }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div 
      onClick={handleClick}
      className="md:hidden z-10">
        {isToggleOn? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul className={isToggleOn? 'absolute top-0 left-0 w-full h-screen bg-[#B3A783] flex flex-col justify-center items-center' : 'hidden'}>
        <li className="py-6 text-4xl ">Home</li>
        <li className="py-6 text-4xl ">About</li>
        <li className="py-6 text-4xl ">Skills</li>
        <li className="py-6 text-4xl ">Projects</li>
        <li className="py-6 text-4xl ">Contact</li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full' href='https://github.com/EnSillee' target="_blank" rel='noopenner noreferrer'>
                    Github <FaGithub size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EB531F]'>
                <a className='flex justify-between items-center w-full'  href='https://engelsmile.tistory.com/' target="_blank" rel='noopenner noreferrer'>
                    Tistory <DiTravis size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a className='flex justify-between items-center w-full'  href='mailto:ensillee22@gmail.com' target="_blank" rel='noopenner noreferrer'>
                    Email <HiOutlineMail size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full'  href='https://engelsmile.tistory.com/' target="_blank" rel='noopenner noreferrer'>
                    Resume <BsFillPersonLinesFill size={30} />
                </a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
