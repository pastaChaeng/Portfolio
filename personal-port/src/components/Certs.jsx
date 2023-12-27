import React from 'react'
import CertItems from './CertItems'

const data = [{
    year: '2023',
    title: 'What Is Generative AI?',
    duration: '1 day',
    description: 'LinkedIn Learning Certificate of Completion',
    link: 'https://www.linkedin.com/learning/certificates/0b358ba90424ab2f55ed3bdae4a842fa2c5cd7773bf964db20b70d5d32954fec',
},

{
    year: '2023',
    title: 'TypeScript Essential Training',
    duration: '1 day',
    description: 'LinkedIn Learning Certificate of Completion',
    link: 'https://www.linkedin.com/learning/certificates/9bdd4913e43723c69d26a360826d433231d144ab7872e831c15ec30d9e594d7b',
},

{
    year: '2023',
    title: 'React.js Essential Training',
    duration: '1 day',
    description: 'LinkedIn Learning Certificate of Completion',
    link: 'https://www.linkedin.com/learning/certificates/4f343f8baf6e09c42c1a25d3c03ec62f2a77f26c1fc42347f1f9b3b9414ab54a',
},

{
    year: '2023',
    title: 'Programming Foundations: Software Testing/QA',
    duration: '1 day',
    description: 'LinkedIn Learning Certificate of Completion',
    link: 'https://www.linkedin.com/learning/certificates/9923d9e4b9fd426719bc757a8eb5252e6c2f83042532940ae2d39e6b8a9556be',
},

{
  year: '2023',
  title: 'Node.js Essential Training',
  duration: '1 day',
  description: 'LinkedIn Learning Certificate of Completion',
  link: 'https://www.linkedin.com/learning/certificates/9f00ecaf1e24396c0a8904ea7f9ea63085500396edef89c8c2751d9982616575',
},

{
    year: '2022',
    title: 'Responsive Web Design ',
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
