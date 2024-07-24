import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
// <FaGithub />
import { MdOutlineEmail } from "react-icons/md";
{/* <MdOutlineEmail /> */ }
import { RxResume } from "react-icons/rx";

function Social() {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Email <MdOutlineEmail size={25} />
                </>
            ),
            href: "https://mail.google.com/mail/u/0/#inbox?compose=new"
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={25} />
                </>
            ),
            href: "https://github.com/SnehasisGhara"
        },
        {
            id: 3,
            child: (
                <>
                    LinkedIn <FaLinkedin size={25} />
                </>
            ),
            href: "https://www.linkedin.com/in/snehasis-ghara-4baa12281/"
        },
        {
            id: 4,
            child: (
                <>
                    Resume <RxResume size={25} />
                </>
            ),
            href: "src/assets/New_Snehasis_Ghara_Resume (2).pdf",
            download: true,
        },
    ]
    return (
        <div className=' md:hidden lg:flex lg:flex-col  fixed top-[53%] lg:top-[15%]  border left-0  rounded-r bg-gradient-to-t from-black to-slate-800  '>
            <ul>

                {links.map(({ id, child, href, download }) => (
                    <li key={id} className='flex justify-evenly items-center w-36   h-12 px-3 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 font-semibold  border-b border-gray-600 hover:border-white'>
                        <a className='flex justify-between items-center w-full pl-2 text-white '
                            href={href}
                            download={download}
                            target='_blank'

                        >
                            <>
                                {child}
                            </>
                        </a>
                    </li>

                ))}




            </ul>
        </div>
    )
}

export default Social