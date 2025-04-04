import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import React from 'react'

export const Layout = () => {
  return (
    <div className='bg-gradient-to-r from-[#000428a0] to-[#004e92] '>
        <Navbar/>
        <Home/>
        <Projects/>
        <Skills/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  )
}
