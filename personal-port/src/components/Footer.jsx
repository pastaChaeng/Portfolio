import React from 'react'

const Contact = () => {
  return (
   <div className='bg-black/100'>
   <div id="contact" className='max-w-[1040px] m-auto md:pl-20 p-4 py-10 bg-black/100'>
   <div class="sm:flex sm:items-center sm:justify-between">
   <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="./src/assets/A-logo1.png" className="h-10" alt="Arlene Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">rlene Joy Nacion</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
          </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400">© 2023 <a className="hover:underline">AJN™</a>. All Rights Reserved.</span>
    </div>
    
    </div>
  )
}

export default Contact