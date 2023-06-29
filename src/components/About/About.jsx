import React from 'react'

const About = () => {
  return (
    <section id="about" className='pt-36 pb-40'>
        <div className="container flex flex-col items-center">
            <h1 className='text-3xl font-bold text-primary 2xl:text-4xl'>About Me</h1>
            <article className='flex flex-col justify-center items-center mx-auto pt-10 px-10 sm:px-5 md:flex-row xl:px-16'>
              <img src="/assets/images/profile.webp" alt="Profile" className='rounded-2xl w-full shadow-gold-glow animate-shadow-pulse sm:w-96 md:w-1/3' />
              <div className="w-full flex flex-col md:w-2/3 md:pl-20 lg:justify-between">
                <p className='text-lg mt-10 font-open-sans max-w-sm md:mt-0 lg:max-w-md lg:text-xl lg:mb-10 xl:max-w-full xl:text-2xl'>Hi, my name is Primananda Andhika, i am from Central Java, Indonesia. Currently i live in Purworejo with my family. I've learned programming since i was at class 8 Junior High School until now i'm 15 years old.</p>
                <p className='text-lg mt-10 font-open-sans max-w-sm md:mt-5 lg:max-w-md lg:text-xl lg:mt-10 xl:max-w-full xl:text-2xl'>First programming language that i learned is JavaScript and i like that language so much. I'm also learning foreign languages like English, Spanish, French, Chinese but i'm still not fluent with those languages yet.</p>
              </div>
            </article>
        </div>
    </section>
  )
}

export default About
