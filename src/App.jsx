import React from 'react';
import Navbar from './components/navbar';
export default function App(){
  return(
    <div className="text-zinc-50 absolute inset-0 -z-10 h-full w-full bg-zinc-800 bg-[linear-gradient(to_right,#14140F_1px,transparent_1px),linear-gradient(to_bottom,#14140F_1px,transparent_1px)] bg-[size:7rem_7rem]">
      <Navbar />
    </div>
  )
}