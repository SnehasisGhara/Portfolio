import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Social from './Components/Social'
import About from './Components/About'
import Project from './Components/Project'
import Skill from './Components/Skill'
import Resume from './Components/Resume'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <section id='Home'>
        <Home />
      </section>

      {/* <Social/> */}
      <section id='About'>
        <About />
      </section>

      <section id='Resume'>
        <Resume />
      </section>

      <section id='Project'>
        <Project />
      </section>

      <section id='Skill'>
        <Skill />
      </section>

      <section id='Contact'>
        <Contact />
      </section>







    </>
  )
}

export default App
