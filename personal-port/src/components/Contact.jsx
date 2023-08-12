import React from 'react'

const Contact = () => {
  return (
   <div className='bg-black/100'>
   <div id="contact" className='max-w-[1040px] m-auto md:pl-20 p-4 py-10 bg-black/100'>
       <h1 className='text-4xl font-bold text-center text-gray-400 py-10'>Contact Me</h1>
       <form action='https://getform.io/f/f8a5bac7-d00f-4359-bbb7-c6b5dea5d768' method='POST' encType='multipart/data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2 '>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2 text-gray-400 font-semibold'>Name</label>
                <input className='border-2 rounded-lg p-3 border-gray-300 bg-gray-300' type="text" name='name'/>
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2 text-gray-400 font-semibold'>Phone Number</label>
                <input className='border-2 rounded-lg p-3 border-gray-300 bg-gray-300' type="text" name='phone'/>
            </div>
            </div>
       
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2 text-gray-400 font-semibold'>Email</label>
                <input className='border-2 rounded-lg p-3 border-gray-300 bg-gray-300' type="email" name='email'/>
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2 text-gray-400 font-semibold'>Subject</label>
                <input className='border-2 rounded-lg p-3 border-gray-300 bg-gray-300' type="text" name='subject'/>
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2 text-gray-400 font-semibold'>Message</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300 bg-gray-300' rows='10' name='message'></textarea>
            </div>
            <button className='bg-gray-800 text-white mt-4 w-full p-4 rounded-lg'>Send Message</button>
       </form>
    </div>
    </div>
  )
}

export default Contact
