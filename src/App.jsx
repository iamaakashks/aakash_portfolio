import React from 'react';
import Navbar from './components/navbar.jsx';
import Hero from './components/Hero.jsx'
import About from './components/About.jsx';
export default function App(){
  return(
    <div className="overflow-x-hidden text-neutral-300 h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-900 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:7rem_7rem]"></div>
      <div className="fixed w-full">
        <Navbar />
      </div>
      <Hero />
      <About />
    </div>
  )
}