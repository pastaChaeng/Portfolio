import ProjectItems from './ProjectItems'
import MediZoneImg from '../assets/MediZone.jpg'
import Gym from '../assets/Gym.png'
import Beshify from '../assets/project-beshify.png'
import Tlp from '../assets/project-TS.png'
import Lesserafim from '../assets/mobile-project-react-native.png'
const Projects = () => {
  return (
    <div className='bg-black/100'>
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-black/100'>
        <h1 className='text-4xl font-bold text-center text-gray-400'>Projects</h1>
        <p className='text-center py-8 text-lg font-semibold text-white/70'> Greetings! I&apos;m thrilled to present my diverse collection
         of projects that showcase my passion for web development. </p>
        

<div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
    <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Web Development</button>
    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Mobile Development</button>
    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">User Interface Designs</button>
</div>
<div className="grid sm:grid-cols-2 gap-12">
    <div>
        <ProjectItems class="h-auto max-w-full rounded-lg" img={MediZoneImg} title='MediZone' alt=""/>
    </div>
    <div>
        <ProjectItems class="h-auto max-w-full rounded-lg" img={Lesserafim} title='Lesserafim' alt="Lesserafim"/>
    </div>
    <div>
        <ProjectItems class="h-auto max-w-full rounded-lg" img={Gym} title='Gym' alt=""/>
    </div>
    <div>
        <ProjectItems class="h-auto max-w-full rounded-lg" img={Beshify} title='Beshify' alt=""/>
    </div>
    <div>
        <ProjectItems class="h-auto max-w-full rounded-lg" img={Tlp} title='Taylor Listening Party' alt=""/>
    </div>
     
</div>
 
    </div>
    </div>
  )
}

export default Projects
