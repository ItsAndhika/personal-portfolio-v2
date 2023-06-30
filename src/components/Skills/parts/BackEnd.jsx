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
        <div className="skill-card">
            <img src={PHP} alt="PHP" className='w-14 mx-auto 2xl:w-20' />
            <h4 className='text-lg font-semibold my-1'>PHP</h4>
            <h6 className='text-base font-medium'>Intermediate</h6>
        </div>
        <div className="skill-card">
            <img src={Node} alt="Node" className='w-12 mx-auto 2xl:w-20' />
            <h4 className='text-lg font-semibold my-1'>Node</h4>
            <h6 className='text-base font-medium'>Beginner</h6>
        </div>
        <div className="skill-card">
            <img src={Laravel} alt="Laravel" className='w-12 mx-auto 2xl:w-20' />
            <h4 className='text-lg font-semibold my-1'>Laravel</h4>
            <h6 className='text-base font-medium'>Beginner</h6>
        </div>
        <div className="skill-card">
            <img src={MySQL} alt="MySQL" className='w-16 mx-auto 2xl:w-24' />
            <h4 className='text-lg font-semibold my-1'>MySQL</h4>
            <h6 className='text-base font-medium'>Intermediate</h6>
        </div>
        <div className="skill-card">
            <img src={PostgreSQL} alt="PostgreSQL" className='w-14 mx-auto 2xl:w-20' />
            <h4 className='text-lg font-semibold my-1'>PostgreSQL</h4>
            <h6 className='text-base font-medium'>Beginner</h6>
        </div>
        <div className="skill-card">
            <img src={MongoDB} alt="MongoDB" className='w-16 mx-auto 2xl:w-24' />
            <h4 className='text-lg font-semibold my-1'>MongoDB</h4>
            <h6 className='text-base font-medium'>Beginner</h6>
        </div>
    </>
  )
}

export default BackEnd
