import { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineFolderOpen, AiOutlineTrophy, AiOutlineForm, AiOutlinePhone } from 'react-icons/ai';

const SideNav = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setNav(false)
    }
  };

  return (
    <div>
      
<AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[90] md:hidden text-white cursor-pointer text-3xl" />
      {nav && (
        <div className="fixed w-full h-screen bg-black bg-opacity-90 flex flex-col justify-center items-center z-20">
          <button onClick={() => scrollToSection('main')} className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-700 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineHome size={20} className="mr-2" />
            <span>Home</span>
          </button>
          <button onClick={() => scrollToSection('projects')} className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-600 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineFolderOpen size={20} className="mr-2" />
            <span>Projects</span>
          </button>
          <button onClick={() => scrollToSection('certs')} className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-500 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineTrophy size={20} className="mr-2" />
            <span>Certificates</span>
          </button>
          <button onClick={() => scrollToSection('resume')} className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-400 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineForm size={20} className="mr-2" />
            <span>Resume</span>
          </button>
          <button onClick={() => scrollToSection('contact')} className="w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-300 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlinePhone size={20} className="mr-2" />
            <span>Contact Me</span>
          </button>
        </div>
      )}
     <div className='md:block hidden fixed top-[25%] z-10'>
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
          <a href="#resume" className='rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 bg-gray-400
          ease-in duration-300' name="Resume">
            <AiOutlineForm size={20}/>
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
