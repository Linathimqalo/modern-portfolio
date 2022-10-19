import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "40%", "50%", "80%", "20%"]
    }}
    transition={{
        duration: 2.5,
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#830000] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#f59210] opacity-20 rounded-full h-[420px] w-[420px] mt-52 animate-ping '/>
        <div className='absolute border border-[#F7AB0A] opacity-30 rounded-full h-[570px] w-[570px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#a70c0c] opacity-50 rounded-full h-[700px] w-[700px] mt-52 animate-pulse'/>
    </motion.div>
  )
}

export default BackgroundCircles