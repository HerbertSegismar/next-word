import React from 'react'
import { motion } from "motion/react";


const animatedCircles = () => {
  return (
    <>
      <motion.div
        animate={{ scale: [1, 0.8, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="bg-red-500/80 size-10 rounded-full shadow-lg"
      />
      <motion.div
        animate={{ opacity: [0, 1, 0], y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="bg-green-500/80 size-10 rounded-full shadow-lg"
      />
      <motion.div
        animate={{ scale: [1, 0.8, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="bg-blue-500/80 size-10 rounded-full shadow-lg"
      />
    </>
  );
}

export default animatedCircles