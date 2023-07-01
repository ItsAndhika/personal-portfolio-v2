import React from 'react'
import PHP from '/assets/svg/php.svg'
import Node from '/assets/svg/node.svg'
import Laravel from '/assets/svg/laravel.svg'
import MySQL from '/assets/svg/mysql.svg'
import PostgreSQL from '/assets/svg/postgresql.svg'
import MongoDB from '/assets/svg/mongodb.svg'

const BackEnd = () => {
  return (
    <>
        <div className="skill-card" data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
            <img src={PHP} alt="PHP" className='w-14 mx-auto 2xl:w-20' />
            <p className='text-lg font-semibold my-1'>PHP</p>
            <p className='text-base font-medium'>Intermediate</p>
        </div>
        <div className="skill-card" data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
            <img src={Node} alt="Node" className='w-12 mx-auto 2xl:w-20' />
            <p className='text-lg font-semibold my-1'>Node</p>
            <p className='text-base font-medium'>Beginner</p>
        </div>
        <div className="skill-card" data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
            <img src={Laravel} alt="Laravel" className='w-12 mx-auto 2xl:w-20' />
            <p className='text-lg font-semibold my-1'>Laravel</p>
            <p className='text-base font-medium'>Beginner</p>
        </div>
        <div className="skill-card" data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
            <img src={MySQL} alt="MySQL" className='w-16 mx-auto 2xl:w-24' />
            <p className='text-lg font-semibold my-1'>MySQL</p>
            <p className='text-base font-medium'>Intermediate</p>
        </div>
        <div className="skill-card" data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
            <img src={PostgreSQL} alt="PostgreSQL" className='w-14 mx-auto 2xl:w-20' />
            <p className='text-lg font-semibold my-1'>PostgreSQL</p>
            <p className='text-base font-medium'>Beginner</p>
        </div>
        <div className="skill-card" data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
            <img src={MongoDB} alt="MongoDB" className='w-16 mx-auto 2xl:w-24' />
            <p className='text-lg font-semibold my-1'>MongoDB</p>
            <p className='text-base font-medium'>Beginner</p>
        </div>
    </>
  )
}

export default BackEnd
