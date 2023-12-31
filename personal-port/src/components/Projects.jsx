import React from 'react'
import ProjectItems from './ProjectItems'
import MediZoneImg from '../assets/MediZone.jpg'
import Gym from '../assets/Gym.png'
import Beshify from '../assets/project-beshify.png'
import Tlp from '../assets/project-TS.png'

const Projects = () => {
  return (
    <div className='bg-black/100'>
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-black/100'>
        <h1 className='text-4xl font-bold text-center text-gray-400'>Projects</h1>
        <p className='text-center py-8 text-lg font-semibold text-white/70'> Greetings! I'm thrilled to present my diverse collection
         of projects that showcase my passion for web development. </p>
         <div className='text-center mb-20 font-semibold mx-auto md:flex md:flex-row md:justify-center md:gap-4'>
  <a className='p-4 block mb-2 text-gray-300 font-bold py-2 rounded-full border-2 border-sky-950 hover:bg-sky-950 hover:text-zinc-950' href='#'>Web Development</a>
  <a className='p-4 block mb-2 text-gray-300 font-bold py-2 rounded-full border-2 border-sky-950 hover:bg-sky-950 hover:text-zinc-950' href='#'>Mobile Development</a>
  <a className='p-4 block mb-2 text-gray-300 font-bold py-2 rounded-full border-2 border-sky-950 hover:bg-sky-950 hover:text-zinc-950' href='#'>User Interface Designs</a>
</div>




         <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItems img={MediZoneImg} title='MediZone'/>
            <ProjectItems img={Gym} title='Gym'/>
            <ProjectItems img={Beshify} title='Beshify'/>
            <ProjectItems img={Tlp} title='Taylor Listening Party'/>
         </div>
    </div>
    </div>
  )
}

export default Projects
