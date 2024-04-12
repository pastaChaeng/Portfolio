import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBackground, setNavBackground] = useState('bg-transparent bg-opacity-90');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground('bg-white dark:bg-gray-900 shadow-md transition-colors duration-300');
      } else {
        setNavBackground('bg-transparent bg-opacity-90 transition-colors duration-300');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${navBackground} fixed w-full z-10`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <a href="/" className="flex items-center">
          <img
            src='https://i.pinimg.com/736x/e7/c4/e8/e7c4e8cb0e491874d914629fcef9e3b7.jpg'
            className='h-8'
            alt='Logo'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-gray-400 px-2'>
            rlene
          </span>
        </a>
        <div className="flex md:order-2">
          <button onClick={toggleMenu} className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M4 6h16M4 12h16m-16 6h16"/>
            </svg>
            <span className="sr-only">Open menu</span>
          </button>
        </div>
        <div className={`md:flex items-center md:w-auto md:order-1 ${isMenuOpen ? 'fixed inset-0 z-20 overflow-y-auto bg-white dark:bg-gray-900' : 'hidden'}`}>
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:bg-transparent">
            <li>
              <button onClick={() => scrollToSection('main')} className="text-base block py-2 px-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="text-base block py-2 px-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('certs')} className="text-base block py-2 px-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700">
                Certificates
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('resume')} className="text-base block py-2 px-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700">
                Resume
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="text-base block py-2 px-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700">
                Contact
              </button>
            </li>
          </ul>
          {isMenuOpen && (
            <button onClick={closeMenu} className="absolute top-4 right-4 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
