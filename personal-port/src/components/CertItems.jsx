import React from 'react'

const CertItems = ({year, title, duration, description, link}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-l border-stone-500 font-bold text-white/50'>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white '/>
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
            <span className='inline-block px-2 py-1 font-semibold text-black bg-white/70 rounded-md'>{year}</span>
            <span className='text-lg font-semibold text-white/70'>{title}</span>
            <span className='my-2 text-base font-normal text-stone-500'>{duration}</span>
        </p>
        <p>{description}</p>
        <p className='cursor-pointer underline'>{link}</p>
      </li>
    </ol>
  )
}

export default CertItems
