import React from 'react'
import CertItems from './CertItems'

const data = [{
    year: '2022',
    title: 'Responsive Web Design ',
    duration: '3 weeks',
    description: 'Completed a successful web design challenge in Free Code Camp',
    link: 'https://www.freecodecamp.org/certification/fcc5a128c75-392c-41d7-9953-0d8c2394c8c4/responsive-web-design',
},

{
    year: '2022',
    title: 'Responsive Web Design',
    duration: '3 weeks',
    description: 'Completed a successful web design challenge in Free Code Camp',
    link: 'https://www.freecodecamp.org/certification/fcc5a128c75-392c-41d7-9953-0d8c2394c8c4/responsive-web-design',
},

{
    year: '2022',
    title: 'Responsive Web Design',
    duration: '3 weeks',
    description: 'Completed a successful web design challenge in Free Code Camp',
    link: 'https://www.freecodecamp.org/certification/fcc5a128c75-392c-41d7-9953-0d8c2394c8c4/responsive-web-design',
},

{
    year: '2022',
    title: 'Responsive Web Design',
    duration: '3 weeks',
    description: 'Completed a successful web design challenge in Free Code Camp',
    link: 'https://www.freecodecamp.org/certification/fcc5a128c75-392c-41d7-9953-0d8c2394c8c4/responsive-web-design',
},

{
    year: '2022',
    title: 'Responsive Web Design',
    duration: '3 weeks',
    description: 'Completed a successful web design challenge in Free Code Camp',
    link: 'https://www.freecodecamp.org/certification/fcc5a128c75-392c-41d7-9953-0d8c2394c8c4/responsive-web-design',
},


]
const Certs = () => {
  return (
    <div className='bg-black/100'>
    <div id='certs' className='max-w-[1040px] m-auto md:pl-20 p-4 py-10 bg-black/100'>
      <h1 className='text-4xl font-bold text-center text-gray-400 py-10'>Certificates</h1>
      {data.map((item, idx) => (
        <CertItems 
        key={idx} 
        year={item.year}
        title={item.title} 
        duration={item.duration} 
        description={item.description}
        link={item.link}
        />
      ))}
    </div>
    </div>
  )
}

export default Certs
