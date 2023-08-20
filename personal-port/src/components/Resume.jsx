import React from 'react'
import Pic from '../assets/resume.png'
const Resume = () => {
  return (
    <div className='bg-black/100'>
    <div id="resume" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-black/100'>
        <h1 className='text-4xl font-bold text-center text-gray-400'>Resume</h1>
        <p className='text-center py-8 text-lg font-semibold text-white/70'> Explore my qualifications and experience by checking out my resume:</p>
       
    </div>
    <div className='flex flex-col justify-center items-center'>
    <img className='h-80 w-80 hover:scale-110 ease-in duration-200' src={Pic}></img>
    <a className='items-center flex flex-col py-8 text-lg font-semibold text-white/70 hover:text-orange-400' href='https://www.canva.com/design/DAFr5qx_1zo/view'>Click to view my Resume</a>
    </div>
    </div>
  )
}

export default Resume
