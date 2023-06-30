import { React, useState } from 'react'
import FrontEnd from './parts/FrontEnd'
import BackEnd from './parts/BackEnd'

const Skills = () => {
  const [skillsActive, setSkillsActive] = useState(true)

  return (
    <section id="skills" className='pt-36'>
        <h1 className='text-3xl text-center font-bold text-primary 2xl:text-4xl'>Skills</h1>
        <div className="mx-auto flex justify-evenly items-center mt-10 mb-14">
            <button className='w-max outline-none bg-primary text-slate-900 px-5 py-2 rounded-full transition duration-300 ease-in-out hover:bg-secondary' onClick={() => setSkillsActive(prev => prev = true)}>Front End</button>
            <button className='w-max outline-none bg-primary text-slate-900 px-5 py-2 rounded-full transition duration-300 ease-in-out hover:bg-secondary' onClick={() => setSkillsActive(prev => prev = false)}>Back End</button>
        </div>
        <div className="container grid font-open-sans gap-y-7 md:grid-cols-2 xl:grid-cols-3 sm:px-5 xl:px-16">
            {skillsActive ? <FrontEnd /> : <BackEnd />}
        </div>
    </section>
  )
}

export default Skills
