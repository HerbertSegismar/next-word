'use client'
import React from 'react'
import AnimatedCircles from './animatedCircles';

const navbar = () => {
  return (
    <div className="flex items-center justify-center text-center top-0 absolute w-full bg-blue-200 h-20 shadow-sm">
      <AnimatedCircles />
    </div>
  );
}

export default navbar