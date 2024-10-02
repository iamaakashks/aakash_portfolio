import React from 'react'
import {ABOUT_TEXT} from '../constants/index.js';
import aboutImage from '../assets/AakashAbout.jpg';
const About = () => {
  return (
    <div className="px-20 w-full">
        <h1 className="flex gap-4 items-center justify-center text-4xl mb-24">About<span className="bg-gradient-to-r from-purple-400 via-pink-400 bg-clip-text text-transparent">Me</span></h1>
        <div className="flex gap-52 items-center"> 
            <img className="w-96 rounded-md" src={aboutImage} alt="" />
            <p className='text-justify tracking-tight leading-6 opacity-60 max-w-2xl text-lg'>{ABOUT_TEXT}</p>
        </div>
    </div>
  )
}

export default About;
