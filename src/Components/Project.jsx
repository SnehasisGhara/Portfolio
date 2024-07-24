import React from 'react'


const projects = [
    {
        title: 'Project 1',
        demoLink: 'https://worksaimated.netlify.app/',
        codeLink: 'https://github.com/SnehasisGhara/Animated-Website'
    },
    {
        title: 'Project 2',
        demoLink: '   https://snehasisghara.github.io/3D-Animated-UI-Website/',
        codeLink: 'https://github.com/SnehasisGhara/3D-Animated-UI-Website'
    },
    {
        title: 'Project 3',
        demoLink: 'https://snehasisghara.github.io/3D--Korean-Website/',
        codeLink: 'https://github.com/SnehasisGhara/3D--Korean-Website'
    }
];



function Project() {
    const handleDemoLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    }
    const handleCodeLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    }
    return (
        <div name="main" className='mx-auto p-4 bg-gradient-to-b from-slate-500 to-slate-500 w-full md:h-screen'>
            <div name="container" className='p-4 mx-auto flex flex-col    bg-gradient-to-br from-gray-600 via-slate-300 to-black shadow-lg rounded-lg overflow-hidden w-full h-full   '>
                <div className=' p-4'>
                    <h2 className='text-2xl md:text-4xl font-bold border-b-2 border-gray-950 w-fit text-left'>Projects</h2>
                    <p className='text-xs font-bold py-4 w-full text-left'>Check out some work here</p>
                </div>


             
                <div className="flex justify-center items-center w-full h-full ">
                    <div name="project_contain " className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  px-4 w-full'>  {/*px-12 sm:px-0*/}
                        {projects.map(({ title, demoLink, codeLink }) => (
                            <div key={title} className=' shadow-md shadow-black rounded-lg mt-2 p-4 h-full flex items-center flex-col duration-200 hover:scale-105 hover:border-b-stone-950 hover:border'>
                                <h3 className='text-xl font-semibold'>{title}</h3>
                                <div className='flex space-x-4 my-10'>
                                    <button onClick={() => handleDemoLink(demoLink)} className='px-4 py-2 bg-gradient-to-br from-sky-400 to-blue-900 text-white rounded shadow-sm'>Demo</button>
                                    <button onClick={() => handleCodeLink(codeLink)} className='px-4 py-2 bg-gradient-to-br from-green-400 to-green-800 text-white rounded shadow-sm'>Code here</button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>


            </div>
        </div>

    )
}

export default Project