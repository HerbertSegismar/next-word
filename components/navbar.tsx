'use client'
import React from 'react'
import AnimatedCircles from './animatedCircles';

const navbar = () => {
  return (
    <div className="flex items-center justify-center text-center top-0 absolute w-full bg-blue-200 h-20 shadow-sm">
      <p className="text-green-500/80 text-3xl font-bold tracking-widest mr-8 ml-15">
        THE <span className="text-blue-500/80">LIVING</span>
      </p>
      <AnimatedCircles />
      <p className="text-green-500/80 text-3xl font-bold tracking-widest ml-8">
        <span className="text-red-500/80">WORD</span> OF GOD
      </p>
    </div>
  );
}

export default navbar