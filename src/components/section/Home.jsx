import hero_img from '../../assets/zg.png'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { RevealOnScroll } from './RevealOnScroll'

export const Home = () =>{
  return (
    <>
    {/*<section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
          Hi, I'm Ngoc K. Dang Le
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
        I am a student at HSD, studying Media Informatics. 
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#project" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">View Projects</a>
          <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">Contact me</a>
        </div>
      </div>
    </section>*/}
    <section id="home" className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] min-h-screen items-center px-4 mx-auto">
      
      <div className="my-auto w-[300px] lg:w-[400px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full overflow-hidden mx-auto">
        <img src={hero_img} alt="hero imgage" className='mx-3'/>
      </div>

      <div className='col-span-2 px-7'>
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className='bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>
            Hi, I'm a
          </span> <br/>
          <TypeAnimation
            sequence={[
              "Student", 1000,
              "Hobbyartist", 1000,
              "Teamplayer", 1000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className='text-gray-400 sm:text-lg my-6 lg:text-xl '>My name is Ngoc K. Dang Le and I am a student at HSD, studying Media Informatics.</p>

        <div className='my-8 flex justify-start space-x-4'>
          <a href="#project" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">View Projects</a>
          <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">Contact me</a>
        </div>

      </div>
      
    </section>
    </>
  )
}