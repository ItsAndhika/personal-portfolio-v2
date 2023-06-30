import HTML from '/assets/svg/html.svg'
import CSS from '/assets/svg/css.svg'
import JavaScript from '/assets/svg/javascript.svg'
import Bootstrap from '/assets/svg/bootstrap.svg'
import Tailwind from '/assets/svg/tailwind.svg'
import Reactjs from '/assets/svg/react.svg'

const FrontEnd = () => {
  return (
    <>
        <div className="skill-card">
            <img src={HTML} alt="HTML" className='w-14 mx-auto 2xl:w-20' />
            <h4 className='text-lg font-semibold my-1'>HTML</h4>
            <h6 className='text-base font-medium'>Advance</h6>
        </div>
        <div className="skill-card">
            <img src={CSS} alt="CSS" className='w-14 mx-auto 2xl:w-20' />
            <h4 className='text-lg font-semibold my-1'>CSS</h4>
            <h6 className='text-base font-medium'>Advance</h6>
        </div>
        <div className="skill-card">
            <img src={JavaScript} alt="JavaScript" className='w-10 mx-auto 2xl:w-16' />
            <h4 className='text-lg font-semibold my-1'>JavaScript</h4>
            <h6 className='text-base font-medium'>Intermediate</h6>
        </div>
        <div className="skill-card">
            <img src={Bootstrap} alt="Bootstrap" className='w-10 mx-auto 2xl:w-16' />
            <h4 className='text-lg font-semibold my-1'>Bootstrap</h4>
            <h6 className='text-base font-medium'>Intermediate</h6>
        </div>
        <div className="skill-card">
            <img src={Tailwind} alt="Tailwind" className='w-10 mx-auto 2xl:w-16' />
            <h4 className='text-lg font-semibold my-1'>Tailwind</h4>
            <h6 className='text-base font-medium'>Intermediate</h6>
        </div>
        <div className="skill-card">
            <img src={Reactjs} alt="React.js" className='w-10 mx-auto 2xl:w-16' />
            <h4 className='text-lg font-semibold my-1'>React.js</h4>
            <h6 className='text-base font-medium'>Beginner</h6>
        </div>
    </>
  )
}

export default FrontEnd
