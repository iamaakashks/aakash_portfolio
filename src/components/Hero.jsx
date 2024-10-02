import React from 'react';
import { HERO_CONTENT } from '../constants';
import image from '../assets/AakashDP.png';
export default function Hero(){
    return (
        <div className="h-full flex items-center px-20">
            <div className="w-1/2 flex flex-col">
                <h1 className="mb-2 lg:text-6xl sm:text-2xl font-thin">Aakash Kumar Suman</h1>
                <h4 className="mb-8 font-light bg-gradient-to-r from-pink-400 via-purple-400 bg-clip-text text-4xl text-transparent tracking-tight">Frontend Web Developer</h4>
                <p className="w-[90%] leading-6 text-justify">{HERO_CONTENT}</p>
            </div>
            <div className="w-1/2 p-32">
                <img className="" src={image} alt="" />
            </div>
        </div>
    )
}