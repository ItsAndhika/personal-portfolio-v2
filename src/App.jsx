import { Header, Hero, About, Skills, Contact, Footer } from './components/index'

const App = () => {
  return (
    <>
      <Header />
      <main className='grid content-center justify-center'>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
