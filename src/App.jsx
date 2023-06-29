import { Header, Hero, About } from './components/index'

const App = () => {
  return (
    <>
      <Header />
      <main className='grid content-center justify-center'>
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App
