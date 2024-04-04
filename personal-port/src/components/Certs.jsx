import CertItems from './CertItems'

const data = [
{
  year: '2023',
  title: 'What Is Generative AI?',
  duration: '1 day',
  description: 'LinkedIn Learning Certificate of Completion',
  link: 'https://media.licdn.com/dms/image/D5622AQEPEC9v0x4ZoA/feedshare-shrink_1280/0/1694324883527?e=1715212800&v=beta&t=xsWMEMsPDO4cIgBNaepkF_Mslokc87-qrI7v5DBdekg',
},

{
  year: '2023',
  title: 'TypeScript Essential Training',
  duration: '1 day',
  description: 'LinkedIn Learning Certificate of Completion',
  link: 'https://media.licdn.com/dms/image/D5622AQG0PuwbAoKr7g/feedshare-shrink_1280/0/1694330511755?e=1715212800&v=beta&t=FUxooB0gqsHYzmWdibupSFHb-AvBQ7bZZdOcatpkLE0',
},

{
  year: '2023',
  title: 'React.js Essential Training',
  duration: '1 day',
  description: 'LinkedIn Learning Certificate of Completion',
  link: 'https://media.licdn.com/dms/image/D5622AQEGhnaZ7Ab_lA/feedshare-shrink_1280/0/1693826705647?e=1715212800&v=beta&t=Ksc7dV1zTEXG7HddftaX2NkS5oTQHVb4UlocHD9bJEY',
},

{
  year: '2023',
  title: 'Software Testing/QA',
  duration: '1 day',
  description: 'LinkedIn Learning Certificate of Completion',
  link: 'https://media.licdn.com/dms/image/D5622AQFRr47AvCpGOw/feedshare-shrink_1280/0/1694390241697?e=1715212800&v=beta&t=BucKKkO98pKxWC0Y_NbS9l8peYaV6CSGIeR96EWXvk4',
},

{
  year: '2023',
  title: 'Node.js Essential Training',
  duration: '1 day',
  description: 'LinkedIn Learning Certificate of Completion',
  link: 'https://media.licdn.com/dms/image/D5622AQFB3ir5tRhrSQ/feedshare-shrink_1280/0/1694582948455?e=1715212800&v=beta&t=kQ3b80Hys0VFQ_X5Pghin7uegu-AY3HkPJLEy617-Ao',
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

