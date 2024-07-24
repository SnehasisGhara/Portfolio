import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
// <FaBars />
import { FaTimes } from "react-icons/fa";
// <FaTimes />
import { Link } from "react-scroll"

function Navbar() {

  const [nav, Setnav] = useState(false)
  const data = [
    {
      id: 1,
      link: "Home"
    },
    {
      id: 2,
      link: "About"
    },
    {
      id: 3,
      link: "Resume"
    },

    {
      id: 4,
      link: "Project"
    },
    {
      id: 5,
      link: "Skill"
    },
    {
      id: 6,
      link: "Contact"
    }
  ]
  return (
    <nav className=" bg-gradient-to-b from-cyan-900 to-slate-900  flex justify-between items-center w-full h-20 text-white fixed px-4 z-20">

      {/* logo */}
      <div>
        <h1 className='text-3xl md:text-4xl lg:text-5xl ml-2 font-signature'>Portfolio</h1>
      </div>

      {/* Nav items for large display */}
      <ul className='hidden lg:flex '>
        {data.map(({ id, link }) => (
          <li
            key={id}
            className='px-4  text-lg font-serif font-medium text-cyan-600 cursor-pointer hover:scale-105 hover:text-white duration-200 capitalize'>
            <Link to={link} smooth duration={500} offset={-70}>{link}</Link>
          </li>

        ))}
      </ul>

      {/* Nav bar function  */}

      <div onClick={() => { Setnav(!nav) }} className='cursor-pointer text-gray-500  pr-4 z-10 hover:text-gray-200 lg:hidden'>
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/* Nav bar items  */}
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-600
         to-black  '>
          {data.map(({ id, link }) => (
            <li key={id}
              className='px-4 py-5 font-medium text-gray-500 text-2xl cursor-pointer hover:scale-105 hover:text-white duration-200 capitalize'>
               <Link onClick={()=>Setnav(!nav)} 
               to={link} 
               smooth 
               duration={500} 
               offset={-70}>
                {link}
               </Link>
            </li>
          ))}

        </ul>

      )}




    </nav>
  )
}

export default Navbar