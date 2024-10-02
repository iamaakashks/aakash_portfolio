import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Navbar(){
    return (
        <>
            <nav className="flex items-center justify-between w-full h-24 px-12">
                <h1 className="text-2xl font-semibold">Aakash</h1>
                <div className="flex gap-4 text-2xl">
                    <FaLinkedin />
                    <FaGithub />
                    <FaInstagram />
                </div>
            </nav>
        </>
    )
}