import { React, useState, useEffect } from 'react'

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if(isActive) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isActive])
  return (
    <>
    <header className='w-full fixed left-0 top-0 py-5 px-[16px] z-10 bg-transparent backdrop-blur-md md:py-10'>
        <div className="container flex justify-between items-center sm:px-5 xl:px-16">
            <a href="#" className="text-xl font-bold font-montserrat text-primary">PA</a>
            <nav>
                <ul className='hidden text-3xl md:flex'>
                    <li className='nav-link'><a href="#">Home</a></li>
                    <li className='nav-link'><a href="#about">About</a></li>
                    <li className='nav-link'><a href="#skills">Skills</a></li>
                    <li className='nav-link'><a href="#contact">Contact</a></li>
                </ul>
                <div className={`${isActive ? 'nav-active' : ''} group w-6 h-4 flex flex-col justify-between items-center cursor-pointer md:hidden`} onClick={() => setIsActive(prev => !prev)}>
                    <span className='bg-white w-2/3 h-[2px] origin-right transition duration-300 ease-in-out group-hover:bg-primary'></span>
                    <span className='bg-white w-full h-[2px] origin-right transition duration-300 ease-in-out group-hover:bg-primary'></span>
                    <span className='bg-white w-1/2 h-[2px] origin-right transition duration-300 ease-in-out group-hover:bg-primary'></span>
                </div>
                <div className={`${isActive ? '-translate-x-0' : 'translate-x-[700px]'} fixed top-0 right-0 flex flex-col w-3/4 h-screen bg-black z-40 transition duration-500 ease-in-out p-10 md:hidden`}>
                    <div className='group w-6 h-4 flex flex-col justify-between items-center cursor-pointer self-end mb-10 md:hidden' onClick={() => setIsActive(prev => !prev)}>
                        <span className='w-full h-[2px] bg-white transition duration-300 ease-in-out origin-left -translate-y-0.5 rotate-45 group-hover:bg-primary'></span>
                        <span className='w-full h-[2px] bg-white transition duration-300 ease-in-out origin-left -rotate-45 group-hover:bg-primary'></span>
                    </div>
                    <ul className='h-3/4 flex flex-col justify-around items-center mx-auto'>
                        <li className='text-xl transition duration-500 ease-in-out hover:text-primary hover:text-gold-glow' onClick={() => setIsActive(prev => !prev)}><a href="#">Home</a></li>
                        <li className='text-xl transition duration-500 ease-in-out hover:text-primary hover:text-gold-glow' onClick={() => setIsActive(prev => !prev)}><a href="#about">About</a></li>
                        <li className='text-xl transition duration-500 ease-in-out hover:text-primary hover:text-gold-glow' onClick={() => setIsActive(prev => !prev)}><a href="#skills">Skills</a></li>
                        <li className='text-xl transition duration-500 ease-in-out hover:text-primary hover:text-gold-glow' onClick={() => setIsActive(prev => !prev)}><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className={`${isActive ? 'block' : 'hidden'} top-0 left-0 z-20 fixed w-full h-screen bg-transparent`} onClick={() => setIsActive(prev => !prev)}></div>
            </nav>
        </div>
    </header>
    
    </>
  )
}

export default Header
