import React from 'react'
import { FaHtml5 } from "react-icons/fa";
// <FaHtml5 />
import { SiTailwindcss } from "react-icons/si";
// <SiTailwindcss />
import { FaCss3Alt } from "react-icons/fa";
// <FaCss3Alt />
import { IoLogoJavascript } from "react-icons/io";
// <IoLogoJavascript />
import { FaReact } from "react-icons/fa";
// <FaReact />
import { DiPostgresql } from "react-icons/di";
// <DiPostgresql />
import { DiMysql } from "react-icons/di";
// <DiMysql />
import { FaLinux } from "react-icons/fa";
// <FaLinux />
// className='text-orange w-20 mx-auto  bg-yellow-600'


const Skills = [
    {
        id: 1,
        icon: <FaHtml5 />,
        name: "HTML",
        style: "shadow-pink-400"
    },
    {
        id: 2,
        icon: <SiTailwindcss />,
        name: "Tailwind",
        style: "shadow-yellow-500"
    },
    {
        id: 3,
        icon: <FaCss3Alt />,
        name: "CSS",
        style: "shadow-yellow-500"

    },
    {
        id: 4,
        icon: <IoLogoJavascript />,
        name: "Javascript",
        style: "shadow-yellow-500"
    },
    {
        id: 5,
        icon: <FaReact />,
        name: "React",
        style: "shadow-yellow-500"
    },
    {
        id: 6,
        icon: <DiPostgresql />,
        name: "Postgresql",
        style: "shadow-yellow-500"
    },
    {
        id: 7,
        icon: <DiMysql />,
        name: "Mysql",
        style: "shadow-yellow-500"
    },
    {
        id: 8,
        icon: <FaLinux />,
        name: "Linux",
        style: "shadow-yellow-500"
    }
]


function Skill() {
    return (
        <div className='mx-auto p-4 bg-gradient-to-b from-slate-500 to-slate-500 w-full md:h-screen'>
            <div className='p-4 mx-auto flex flex-col    bg-gradient-to-br from-gray-600 via-slate-300 to-black shadow-lg rounded-lg      overflow-hidden w-full h-full   '>
                <div className='p-4'>
                    <h2 className='text-2xl md:text-4xl font-bold border-b-2 border-gray-950 w-fit text-left'>Skill</h2>
                    <p className='text-xs font-bold py-4 w-full text-left'>These are the technologies I've worked with</p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3  gap-8  px-12 py-8  '>
                    {Skills.map(({ id, icon, name }) => (
                        <div key={id} className={`shadow-md shadow-black py-2   rounded-lg  hover:scale-105 duration-500 w-full text-center   `}>
                            <div className="w-20 h-20 flex items-center justify-center  mx-auto text-5xl ">
                                {icon}
                                

                            </div>
                            
                            <p className='mt-4 font-semibold'>{name}</p>
                        </div>

                    ))}

                        </div>


            </div>

            </div>


            )
}

            export default Skill