import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
    <img className='w-full h-screen object-cover object-left ' src="https://i.pinimg.com/564x/c4/49/6f/c4496f1147746d13b4c1641682b75912.jpg" alt="pix"></img>
    <div className='w-full h-screen absolute top-0 left-0 bg-black/80'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
           <h1 className='sm:text-5xl text-4xl font-bold text-gray-400'> Arlene Joy Nacion </h1>
           <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-500'> I'm a<TypeAnimation
      sequence={[
        'Lazy Dev',
        1000, 
        'Tech Enthusiast',
        1000,
        'Coder',
        1000,
        'Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
      repeat={Infinity}
    /></h2>
    <div className='flex justify-between pt-6 max-w-[200px] w-full text-gray-600'>
        <a href="https://www.facebook.com/rlenesEy.7"><FaFacebookF className='cursor-pointer' size={20}/></a>
        <a href="https://twitter.com/rlenezy"><FaTwitter className='cursor-pointer' size={20}/></a>
        <a href="https://www.instagram.com/are__lean___/"><FaInstagram className='cursor-pointer' size={20}/></a>
        <a href="https://github.com/pastaChaeng"><FaGithub className='cursor-pointer' size={20}/></a>
        <a href="https://www.linkedin.com/in/nacion-arlene-joy-e-690137276/"><FaLinkedinIn className='cursor-pointer' size={20}/></a>
    </div>
        </div>
         </div>
    </div>
  )
}

export default Main
