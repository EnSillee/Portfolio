import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaArrowAltCircleUp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { DiTravis } from 'react-icons/di';
import Logo from '../assets/logo2.png';
import Resume from '../assets/resume.pdf';
import { Link } from 'react-scroll';

const Navbar = ({ isToggleOn, handleClick, currentPage }) => {
  const [currentScrollY, setCurrentScrollY] = useState(0);

  const handleFollow = () => {
    setCurrentScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  }

  // useEffect(() => {
  //   console.log('currentScrollY is ', currentScrollY);
  // }, [currentScrollY]);

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
    };
  });

  return (
    <>
      <div className=" jua fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#4485F5] text-white">
        <Link
          to="home"
          className=" flex items-center cursor-pointer ml-0 lg:ml-32"
          smooth={true}
          duration={300}
        >
          <img src={Logo} alt="Logo" style={{ width: '65px' }} />
          <span className=" text-white text-lg lg:text-2xl">
            E n S i l l e e
          </span>
        </Link>

        {/* menu */}
        <ul className="hidden md:flex lg:mr-32 text-xl">
          <Link
            smooth={true}
            duration={500}
            to="home"
            className=" px-4 lg:text-2xl cursor-pointer"
          >
            Home
          </Link>
          <Link
            smooth={true}
            duration={500}
            to="about"
            className=" px-4 lg:text-2xl cursor-pointer"
          >
            About
          </Link>
          <Link
            smooth={true}
            duration={500}
            to="skills"
            className=" px-4 lg:text-2xl cursor-pointer"
          >
            Skills
          </Link>
          <Link
            smooth={true}
            duration={500}
            to="projects"
            className=" px-4 lg:text-2xl cursor-pointer"
          >
            Projects
          </Link>
          <Link
            smooth={true}
            duration={500}
            to="contact"
            className=" px-4 lg:text-2xl cursor-pointer"
          >
            Contact
          </Link>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {isToggleOn ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            isToggleOn
              ? 'absolute top-0 left-0 w-full h-screen bg-[#4485F5] flex flex-col justify-center items-center'
              : 'hidden'
          }
        >
          <Link
            onClick={handleClick}
            smooth={true}
            duration={500}
            to="home"
            className=" py-6 text-4xl cursor-pointer rounded-xl "
          >
            Home
          </Link>
          <Link
            onClick={handleClick}
            smooth={true}
            duration={500}
            to="about"
            className=" py-6 text-4xl cursor-pointer rounded-xl "
          >
            About
          </Link>
          <Link
            onClick={handleClick}
            smooth={true}
            duration={500}
            to="skills"
            className=" py-6 text-4xl cursor-pointer rounded-xl "
          >
            Skills
          </Link>
          <Link
            onClick={handleClick}
            smooth={true}
            duration={500}
            to="projects"
            className=" py-6 text-4xl cursor-pointer rounded-xl "
          >
            Projects
          </Link>
          <Link
            onClick={handleClick}
            smooth={true}
            duration={500}
            to="contact"
            className=" py-6 text-4xl cursor-pointer rounded-xl "
          >
            Contact
          </Link>
        </ul>

        {/* social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className=" rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full"
                href="https://github.com/EnSillee"
                target="_blank"
                rel="noopenner noreferrer"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-[#EB531F]">
              <a
                className="flex justify-between items-center w-full"
                href="https://engelsmile.tistory.com/"
                target="_blank"
                rel="noopenner noreferrer"
              >
                Tistory <DiTravis size={30} />
              </a>
            </li>
            <li className="rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
              <a
                className="flex justify-between items-center w-full"
                href="mailto:ensillee22@gmail.com"
                target="_blank"
                rel="noopenner noreferrer"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-[#565f69]">
              <a
                className="flex justify-between items-center w-full"
                href={Resume}
                target="_blank"
                rel="noopenner noreferrer"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isToggleOn || currentScrollY < 100 ? null : (
        <div className="fixed bottom-5 xs:bottom-8 md:bottom-12 right-[0.625rem] xs:right-6 sm:right-8 md:right-10 text-black">
          <Link to="home" smooth={true} duration={200}>
            <FaArrowAltCircleUp
              className=" cursor-pointer text-2xl md:text-3xl lg:text-4xl"
              color="gray"
            />
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
