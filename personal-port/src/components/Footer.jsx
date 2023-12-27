import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa"

const Contact = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    if (scrollPosition > 300) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  return (
    <div className='bg-black/100'>
      <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-10 bg-black/100'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'>
            <img
              src='https://i.pinimg.com/736x/e7/c4/e8/e7c4e8cb0e491874d914629fcef9e3b7.jpg'
              className='h-10'
              alt='Arlene Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              rlene Joy Nacion
            </span>
          </a>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 dark:text-gray-400'>
          © 2023 <a className='hover:underline'>AJN </a>| All Rights Reserved.
        </span>
      </div>
      {showButton && (
        <div>
          <button
            onClick={scrollToTop}
            className='fixed bottom-4 right-4 p-4 bg-gray-800 text-white rounded-full text-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-600 transition duration-300'
          >
            <FaArrowUp size={15} />
          </button>
        </div>
      )}
    </div>
  )
}

export default Contact
