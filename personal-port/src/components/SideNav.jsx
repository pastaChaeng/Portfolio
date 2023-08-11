import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlinePhone, AiOutlineFolderOpen, AiOutlineTrophy } from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'

const SideNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[90] md:hidden text-white" />
      { nav ? (
        <div className="fixed w-full h-screen bg-black/90 flex flex-col justify-center items-center z-20">
          <a href="#main" className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-700 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a href="#projects" className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-600 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineFolderOpen size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a href="#certs" className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-500 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineTrophy size={20} />
            <span className="pl-4">Certificates</span>
          </a>
          <a href="#contact" className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-400 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlinePhone size={20} />
            <span className="pl-4">Contact Me</span>
          </a>
        </div>
      ) : (
        ''
      )}
      <div className='md:block hidden fixed top-[30%] z-10'>
        <div className='flex flex-col'>
          <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 bg-gray-700
          ease-in duration-300' name="Home">
            <AiOutlineHome size={20}/>
          </a>
          <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 bg-gray-600
          ease-in duration-300' name="Projects">
            <AiOutlineFolderOpen size={20}/>
          </a>
          <a href="#certs" className='rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 bg-gray-500
          ease-in duration-300' name="Certificates">
            <AiOutlineTrophy size={20}/>
          </a>
          <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 bg-gray-400
          ease-in duration-300' name="Contact">
            <AiOutlinePhone size={20}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
