import React from 'react'

import { CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon } from '@heroicons/react/solid'
import bgImag from '../assets/cyber-bg.png'
const Hero = () => {
    return (
        <div className='w-full h-screen bg-zinc-200 flex  flex-col justify-between'>

            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 mt-14'>
                    <p className='text-2xl'>Beginner Tutorial Learning Tailwind.</p>
                    <p className='py-3 text-5xl md:text-7xl font-bold'>Website with Tailwind CSS.</p>
                    <p>Build a React JS Website with Tailwind CSS - Beginner Tutorial Learning Tailwind</p>
                    <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
                </div>

                <div>
                    <img className='w-full' src={bgImag} alt="/" />
                </div>

                <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
                    <p>Data Service</p>
                    <div className=' flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className ="h-6"/> App Security</p>
                        <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className ="h-6"/> DashBoard Design</p>
                        <p className='flex px-4 py-2 text-slate-500'><ServerIcon className ="h-6"/> Cloud Data</p>
                        <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className ="h-6"/> API</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero