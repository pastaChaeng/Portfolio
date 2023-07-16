import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlinePhone, AiOutlineFolderOpen } from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'



const SideNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[90] md:hidden" />
      { nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a href="#main" className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-pink-300 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a href="#main" className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-pink-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineFolderOpen size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a href="#main" className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-pink-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlinePhone size={20} />
            <span className="pl-4">Contact Me</span>
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default SideNav;
