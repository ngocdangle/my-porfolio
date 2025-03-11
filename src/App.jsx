import React, { useState } from 'react'
import './App.css'
import { Loading } from './components/Loading'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/section/Home'
import './index.css'
import { About } from './components/section/About'
import Hero from './components/section/Hero'
import { Project } from './components/section/Project'
import { Contact } from './components/section/Contac'
import Footer from './components/section/Footer'

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <Loading onComplete={() => setIsLoaded(true)}/>}{""}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home/>
          <About/>
          <Project/>
          <Contact/>
          <Footer/>
        </div>
    </>
  )
}

export default App
