import React, { useState } from 'react'
import ResumeCart from './ResumeCart';
import Experience from './Experience';

function Resume() {

  const [Action, Setaction] = useState("Education");
  return (
    <div className='mx-auto p-4 bg-gradient-to-b from-slate-500 to-slate-500 w-full h-auto '>
      <div className='p-4 mx-auto flex flex-col    bg-gradient-to-br from-gray-600 via-slate-300 to-black shadow-lg rounded-lg      overflow-hidden w-full h-full' >
        <div className='p-4'>
          <h2 className='text-2xl md:text-4xl font-bold border-b-2 border-gray-950 w-fit text-left'>Resume</h2>
          <p className='text-xs font-bold py-4 w-full text-left'>Here my education and experience</p>
        </div>

        <div className='flex justify-center items-center text-center  '>
            <ul className=' w-full grid grid-cols-2 bg-black text-gray-300 rounded-lg ' >
              <li className={`Resume ${Action === 'Education' ? 'font-bold rounded-lg  bg-gradient-to-br from-transparent to-red-700 ' : 'bg-black rounded-lg  '} `}
                onClick={() => Setaction('Education')}>Education
              </li>
              <li className={`Resume ${Action === 'Experience' ? 'font-bold rounded-lg bg-gradient-to-bl from-transparent to-red-700' : 'bg-black rounded-lg '}`}
                onClick={() => Setaction('Experience')}>Experience
              </li>
            </ul>
          </div>

    


        {/* Action Section */}


        <div className='w-full   gap-10 flex flex-col md:flex-row '>

          {Action === 'Education' && (

            <div className='w-full md:w-2/3  '>
              <div className="py-12  ">
                <h2 className=' md:text-2xl  font-bold'>Education Quality</h2>
              </div>


              <div className=' h-[850px] border-l-[6px] border-l-gray-900  flex flex-col gap-5'>
                <ResumeCart
                  title="Netaji Subhash Engineering College"
                  subTitle="B.Tech in Computer Science and Engineering (2020-2023) "
                  result="cgpa:8.83" />
                <ResumeCart
                  title="Kingston Polytechnic College"
                  subTitle="Diploma in Computer Science and Technology (2016-1019) "
                  result="cgpa:6.68" />
                <ResumeCart
                  title="Tamluk Hamilton High School"
                  subTitle="10th Exam"
                  result="cgpa:6.66" />
              </div>
            </div>

          )}



          {Action === 'Experience' && (
            <div className=' h-screen'>
              <div className="py-12   ">
                <h2 className=' md:text-2xl  font-bold'>Experience Quality</h2>
              </div>



              <div className=' h-[70px] border-l-[6px] border-l-gray-900  flex flex-col gap-5'>
                <Experience
                  title="Xenonstack"
                  subTitle="Intern as Associate Software Engineer Trainee (July 2023 – September 2023) "
                  des="
              * Applied theoretical Linux and basic DevOps knowledge in real-world scenarios.
              * Gained insights into the Software Development Life Cycle (SDLC) and agile methodologies.
              *  Acquired hands-on experience in Front-end web development using HTML, CSS, JavaScript , React.
              *  Utilized Git & Github for efficient and streamlined development processes" />

              </div>

            </div>
          )}










        </div>






      </div>

    </div>
  )
}

export default Resume;