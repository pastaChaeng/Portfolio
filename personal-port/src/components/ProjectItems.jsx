
const ProjectItems = ({img, title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl 
    shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-slate-300'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10'/>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-gray-600 tracking-wider text-center'> 
            {title}
        </h3>
        <p className='pb-4 pt-2 text-gray-400 text-center '>
           To see the working version click the button below ↓ 
            <a href="https://pastachaeng.github.io/Beshify-AV/">
            <p className='mt-5 text-center p-3 rounded-full bg-white text-gray-700 font-bold cursor-pointer text-lg '> See More</p>
            </a>
        </p>
        
      </div>
    </div>
  )
}

export default ProjectItems
