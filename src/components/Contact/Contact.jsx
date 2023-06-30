import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className='pt-36'>
        <h1 className='text-3xl text-center font-bold text-primary 2xl:text-4xl' data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>Contact</h1>
        <div id="alert" className='hidden w-1/2 mx-auto mt-10 text-slate-900 text-lg text-center bg-primary rounded-lg px-4 py-2 border border-secondary shadow-gold-glow animate-shadow-pulse md:w-1/3 md:text-xl 2xl:text-2xl 2xl:px-6 2xl:py-4'>Your message has sent!</div>
        <div className="container mt-10 sm:px-5 xl:px-16">
            <form action="" method='post' className='flex flex-col'>
                <label htmlFor="name" className='font-semibold mx-auto text-lg sm:text-xl lg:text-2xl lg:mt-5 lg:block 2xl:text-3xl' data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>Name</label>
                <input type="text" name="name" id="name" className='form-input' placeholder="Your name..." autoComplete='off' required data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000' />
                <label htmlFor="email" className='font-semibold mx-auto text-lg sm:text-xl lg:text-2xl lg:mt-5 lg:block 2xl:text-3xl' data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>Email</label>
                <input type="email" name="email" id="email" className='form-input' placeholder="Your email address..." autoComplete='off' required data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000' />
                <label htmlFor="message" className='font-semibold mx-auto text-lg sm:text-xl lg:text-2xl lg:mt-5 lg:block 2xl:text-3xl' data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>Message</label>
                <textarea type="message" name="message" id="message" className='form-input' placeholder="Your message to me..." autoComplete='off' required data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000' />
                <button type='button' className='w-max mx-auto mt-5 px-5 py-2 bg-primary text-slate-900 rounded-full shadow-gold-glow animate-shadow-pulse transition duration-300 ease-in-out hover:bg-secondary lg:px-6 lg:py-4' data-aos="fade-up"  data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000' onClick={() => {
                  const scriptURL = 'https://script.google.com/macros/s/AKfycbxk5wFU7JdMUY-BoHAQeMZQ9gp3dl0U2-gMl0cdm1AYlC-Pf642oRXti-hwKmThRDs/exec'
                  const form = document.forms['contact-form']
                  const sendButton = document.getElementById('send')
                  const alert = document.getElementById('alert')

                  form.addEventListener('submit', e => {
                    e.preventDefault()
                    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                      .then(response => {
                          alert.classList.toggle('hidden')
                          form.reset()
                          console.log('Success!', response)
                      })
                      .catch(error => console.error('Error!', error.message))
                  })
                }}>Send</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
