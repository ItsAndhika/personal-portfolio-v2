import HTML from '/assets/svg/html.svg'
import CSS from '/assets/svg/css.svg'
import JavaScript from '/assets/svg/javascript.svg'
import Bootstrap from '/assets/svg/bootstrap.svg'
import Tailwind from '/assets/svg/tailwind.svg'
import Reactjs from '/assets/svg/react.svg'

const FrontEnd = () => {
  return (
    <>
        <div className="skill-card" data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
            <img src={HTML} alt="HTML" className='w-14 mx-auto 2xl:w-20' />
            <p className='text-lg font-semibold my-1'>HTML</p>
            <p className='text-base font-medium'>Advance</p>
        </div>
        <div className="skill-card" data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
            <img src={CSS} alt="CSS" className='w-14 mx-auto 2xl:w-20' />
            <p className='text-lg font-semibold my-1'>CSS</p>
            <p className='text-base font-medium'>Advance</p>
        </div>
        <div className="skill-card" data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
            <img src={JavaScript} alt="JavaScript" className='w-10 mx-auto 2xl:w-16' />
            <p className='text-lg font-semibold my-1'>JavaScript</p>
            <p className='text-base font-medium'>Intermediate</p>
        </div>
        <div className="skill-card" data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
            <img src={Bootstrap} alt="Bootstrap" className='w-10 mx-auto 2xl:w-16' />
            <p className='text-lg font-semibold my-1'>Bootstrap</p>
            <p className='text-base font-medium'>Intermediate</p>
        </div>
        <div className="skill-card" data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
            <img src={Tailwind} alt="Tailwind" className='w-10 mx-auto 2xl:w-16' />
            <p className='text-lg font-semibold my-1'>Tailwind</p>
            <p className='text-base font-medium'>Intermediate</p>
        </div>
        <div className="skill-card" data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
            <img src={Reactjs} alt="React.js" className='w-10 mx-auto 2xl:w-16' />
            <p className='text-lg font-semibold my-1'>React.js</p>
            <p className='text-base font-medium'>Beginner</p>
        </div>
    </>
  )
}

export default FrontEnd
