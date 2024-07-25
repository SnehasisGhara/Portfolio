import React from 'react'
import AboutImage from './assets/AboutImage.png'

function About() {

  return (
    <div className=" mx-auto p-4 bg-gradient-to-b from-slate-400 to-slate-800">
      {/* conatain div contain  article and img */}
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-600 via-slate-300 to-transparent shadow-lg rounded-lg overflow-hidden">
        {/* Ariticle */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-4">
            I am Snehasis Ghara, a passionate Web Developer with a strong foundation in Computer Science and Engineering.
          </h1>
          <p className="text-gray-800 mb-4 font-semibold ">
            I excel in front-end development, leveraging my skills in <b className='font-bold text-slate-900'>HTML, CSS, and JavaScript,React </b>to create engaging and user-centric web experiences. Throughout my academic journey at <b><i> Netaji Subhash Engineering College </i></b>and <b><i>Kingston Polytechnic College </i></b> , I have consistently demonstrated a commitment to learning and applying new technologies.
            <br /><br />
            Driven by a curiosity for innovation, I recently interned from <b><i>Xenonstack</i></b>,where I gained practical experience in software development methodologies, Linux environments, and DevOps practices. This internship has equipped me with valuable insights into the Software Development Life Cycle (SDLC) and agile methodologies.
            <br /><br />
            As I continue to evolve in my career, I am eager to contribute my skills and passion for technology to innovative projects that make a meaningful impact.
          </p>
        </div>
        {/* image */}
        <div className="md:w-1/2 p-3 flex justify-center relative  ">
          <div className="relative  hover:-translate-y-1 transition-all  duration-300 ">
            <img
              src={AboutImage}
              alt="Snehasis Ghara"
              className="rounded-full w-48 h-48 md:w-[500px] md:h-[500px] object-cover shadow-xl "
            />
            {/* Gradient shadow */}
            {/* <div className="absolute inset-0 rounded-full z-0 ">
                <div className="absolute inset-0 rounded-full  opacity-50  drop-shadow-xl blur-3xl z-0 "></div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  )



}

export default About