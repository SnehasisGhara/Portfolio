import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub } from "react-icons/fa";
// <FaGithub />
import { MdOutlineEmail } from "react-icons/md";
{/* <MdOutlineEmail /> */ }
import HeroImage from '../assets/HeroImage.png';


// <IoMdDownload />
// mx-auto
function Home() {
    const Social = [
        {
            id: 1,
            child: (
                <>
                    <MdOutlineEmail size={25} />
                </>
            ),
            href: "https://mail.google.com/mail/u/0/#inbox?compose=new",


        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={25} />
                </>
            ),
            href: "https://github.com/SnehasisGhara"
        },
        {
            id: 3,
            child: (
                <>
                    <FaLinkedin size={25} />
                </>
            ),
            href: "https://www.linkedin.com/in/snehasis-ghara-4baa12281/"
        },
    ]



    const [text] = useTypewriter({
        words: ["Software Engineer", "Front-end developer", "Web Developer"],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 2,
        delaySpeed: 2000
    })

    const handleDownload=()=>{
        const link = document.createElement("a");
        link.href="src/assets/New_Snehasis_Ghara_Resume (2).pdf"
        link.download="New_Snehasis_Ghara_Resume (2).pdf"
        link.click();
    }


    return (
        <div name="home" className='md:h-screen w-full bg-gradient-to-b from-black text to-slate-500 text-white  pt-20 md:pt-0 '>


            <div className='max-w-screen-lg h-full mx-auto px-4 flex flex-col justify-center items-center  md:flex-row   '>


                {/* Article section  */}
                <div className='mt-8 flex  flex-col justify-center md:mr-10 '>
                    <h3 className='text-2xl md:text-3xl  font-bold  '>Hi, Myself &nbsp;<span className='text-green-400'>SNEHASIS GHARA</span>  <br /> <span className='text-2xl text-zinc-50 '>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorColor='white'
                            cursorStyle="|"
                        />
                    </h3>
                    <p className='text-slate-300 py-1 max-w-screen-sm   font-semibold md:mt-4 md:text-lg '>B.Tech Graduate Driven to Make an Impact in Tech. <br />
                        <span>Despite being a fresher, I am eager to immerse myself in a corporate environment where I can continue to grow and develop professionally.
                        </span>
                    </p>

                    <div className='mt-2'>
                        <h3 className='text-xl font-semibold text-gray-300 underline-offset-1'>Find me in :</h3>
                        <div className='flex gap-4 mt-3'>
                            {Social.map(({ id, child, href }) => (
                                <a key={id} href={href} target="_blank" rel="noopener noreferrer">
                                    <div id='social'>
                                        {child}
                                    </div>

                                </a>
                            ))}
                        </div>
                    </div>

                    <div className='mt-2 md:mt-3 '>
                        <button className='group text-white font-semibold w-fit px-4 py-3 my-2 flex items-center bg-gradient-to-r from-slate-500 to-black bg-opacity-25 hover:bg-opacity-40 rounded-3xl cursor-pointer hover:translate-y-1 transition-all duration-300'
                        onClick={handleDownload}>
                            Download Resume
                            <span className="     duration-300">
                                <IoMdDownload size={25}
                                    className='ml-1'
                                />
                            </span>

                        </button>
                    </div>

                </div>



                {/* Image portion  */}
                <div className='mt-2 h-auto md:w-1/2 p-3 flex justify-center relative '>
                    <div className='relative w-full h-full hover:-translate-y-1 transition-all duration-300'>
                        <img className=' w-48 h-48  lg:w-[400px] lg:h-[400px] object-center object-contain rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-gradient-to-t from-slate-950 to-transparent' 
                        src={HeroImage}
                        alt="" />
                    </div>
                </div>

                {/* <div className='absolute buttom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'></div> */}

            </div>
        </div>
    )
}

export default Home