import { useState, useEffect } from 'react' 
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import MainItems from './MainItems'
import Arlene from '../assets/leni.png' 

const LoadingScreen = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-black fixed top-0 left-0 z-50'>
     <img className='logo-heartbeat' src='https://i.pinimg.com/736x/e7/c4/e8/e7c4e8cb0e491874d914629fcef9e3b7.jpg' alt='logo' width='150px' height='150px' />
    </div>
  )
}

const Main = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const delay = 1000

    const timer = setTimeout(() => {
      setLoading(false)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div id='main'>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <img
            className='w-full h-screen object-cover object-left'
            src='https://i.pinimg.com/originals/0d/66/d5/0d66d535b703213826a7a14fa14876d9.gif'
            alt='Galaxy'
          />
         <div className='w-full h-screen absolute top-10 left-0  bg-opacity-80  '>
            <div className='max-w-[700px] m-auto h-full w-full mt-8 flex flex-col justify-center lg:items-start items-center'>
              <div className='hover:scale-110 ease-in duration-200 text-gray-300'>
                <MainItems img={Arlene} />
              </div>
              <h1 className='sm:text-5xl text-4xl font-bold text-gray-400'> Arlene Joy Nacion </h1>
              <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-500'> I'm a
                <TypeAnimation
                  sequence={[
                    'UI/UX Designer 🎨',
                    1000,
                    'Tech Enthusiast 💻',
                    1000,
                    'Programmer 💻',
                    1000,
                    'Developer 💻',
                    1000
                  ]}
                  wrapper='span'
                  speed={50}
                  style={{ fontSize: '1em', paddingLeft: '5px' }}
                  repeat={Infinity}
                />
              </h2>
              <div className='flex justify-between pt-6 max-w-[200px] w-full text-gray-600'>
                <a href='https://www.facebook.com/rlenesEy.7'><FaFacebookF className='cursor-pointer hover:text-blue-900 hover:scale-110' size={20} /></a>
                <a href='https://twitter.com/rlenezy'><FaTwitter className='cursor-pointer hover:text-blue-600 hover:scale-110' size={20} /></a>
                <a href='https://www.instagram.com/are__lean___/'><FaInstagram className='cursor-pointer hover:text-pink-600 hover:scale-110' size={20} /></a>
                <a href='https://github.com/pastaChaeng'><FaGithub className='cursor-pointer hover:text-violet-950 hover:scale-110' size={20} /></a>
                <a href='https://www.linkedin.com/in/nacion-arlene-joy-e-690137276/'><FaLinkedinIn className='cursor-pointer hover:text-blue-500 hover:scale-110' size={20} /></a>
              </div>
              <a href='#contact'>
                <button className='border-solid border-2 border-sky-950 text-gray-300 font-bold py-2 px-4 rounded-full hover:bg-sky-950 hover:text-zinc-950 mt-6'>
                  Get in touch
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Main
