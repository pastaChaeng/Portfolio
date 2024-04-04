import { useState } from 'react';
import ProjectItems from './ProjectItems';
import MediZoneImg from '../assets/MediZone.jpg';
import Gym from '../assets/Gym.png';
import Beshify from '../assets/beshify.png';
import Tlp from '../assets/project-TS.png';
import Lesserafim from '../assets/mobile-project-react-native.png';
import Cornelia from '../assets/cornelia-street.png'
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filterProjects = (category) => {
    setActiveCategory(category);
  };

  const projects = [
    { img: MediZoneImg, title: 'MediZone', category: 'Mobile Development' },
    { img: Lesserafim, title: 'Lesserafim', category: 'Mobile Development' },
    { img: Gym, title: 'Gym', category: 'Web Development' },
    { img: Beshify, title: 'Beshify', category: 'Web Development'},
    { img: Tlp, title: 'Taylor Listening Party', category: 'Web Development' },
    { img: Cornelia, title: 'Cornelia Street Song Lyric', category: 'Web Development' },
  ];

  return (
    <div className='bg-black/100'>
      <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-black/100'>
        <h1 className='text-4xl font-bold text-center text-gray-400'>Projects</h1>
        <p className='text-center py-8 text-lg font-semibold text-white/70'>
          Greetings! I&apos;m thrilled to present my diverse collection of projects that showcase my passion for web development.
        </p>

        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            className={`text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800 ${
              activeCategory === 'All' && 'bg-blue-700 text-white'
            }`}
            onClick={() => filterProjects('All')}
          >
            All categories
          </button>
          <button
            className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${
              activeCategory === 'Web Development' && 'bg-gray-900 text-white'
            }`}
            onClick={() => filterProjects('Web Development')}
          >
            Web Development
          </button>
          <button
            className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${
              activeCategory === 'Mobile Development' && 'bg-gray-900 text-white'
            }`}
            onClick={() => filterProjects('Mobile Development')}
          >
            Mobile Development
          </button>
          <button
            className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${
              activeCategory === 'User Interface Designs' && 'bg-gray-900 text-white'
            }`}
            onClick={() => filterProjects('User Interface Designs')}
          >
            User Interface Designs
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-12">
          {projects.map((project, index) => {
            if (activeCategory === 'All' || project.category === activeCategory) {
              return (
                <div key={index}>
                  <ProjectItems class="h-auto max-w-full rounded-lg" img={project.img} title={project.title} alt={project.title} />
                </div>
              );
            }
            return null;
          })}
        </div>

      </div>
    </div>
  );
};

export default Projects;
