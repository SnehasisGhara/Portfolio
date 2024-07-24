import React from 'react'

// frameborder="0" scrolling="no" marginheight="0" marginwidth="0"

function Contact() {
  return (
    <div className='mx-auto p-4 bg-gradient-to-b from-slate-500 to-transparent w-full md:h-screen'>
      <div className='p-4 mx-auto flex flex-col     bg-gradient-to-br from-gray-400  to-black shadow-lg rounded-lg      overflow-hidden w-full h-full   '>
        <div className='p-4'>
          <h2 className='text-2xl md:text-4xl font-bold border-b-2 border-gray-950 w-fit text-left'>Contact</h2>
          <p className='text-xs font-bold py-4 w-full text-left'>Submit the form below to get in touch with me</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full h-full  p-4  gap-3">
          <form action="https://getform.io/f/ayvpyzjb" method='POST' className='flex flex-col md:w-1/2 text-black'>
            <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-black focus:outline-none font-semibold' />
            <input type="text" name='Email' placeholder='Enter your Email' className='p-2 my-4 border-2 bg-transparent rounded-md text-black focus:outline-none font-semibold' />
            <textarea name="message" id="" rows="10" placeholder='Enter your message' className='p-2 border-2 rounded-md text-black bg-transparent focus:outline-none font-semibold'></textarea>
            <button className='text-white bg-gradient-to-b from-cyan-200 to-blue-500 px-6 py-3 my-8 mx-auto rounded-md flex items-center hover:scale-110 duration-300 font-semibold'>Let's talk</button>
          </form>


          <div className=' mx-auto flex flex-col items-center w-full md:w-1/2 h-full bg-'>
            <iframe
              width="100%"
              height="75%" 
              src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=Tamluk,Purba%20Medinipur,West%20bengal+(My%20Portfolio)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"  >
              <a href="https://www.gps.ie/">My Location</a>
              
            </iframe>

          </div>


        </div>

      </div>
    </div>
  )
}

export default Contact