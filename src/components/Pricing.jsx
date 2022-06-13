import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'
const Pricing = () => {
  return (
    <div className='w-full text-white my-16'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

        <div className='max-w-[1240px] mx-auto py-12'>

            <div className=' text-center py-8 text-slate-300'>
                <h2 className='text-3xl uppercase'>Pricing</h2>
                <h3 className='text-5xl font-bold text-white py-8'>The right price for your resaerch</h3>
                <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quaerat optio, dolore voluptatem praesentium accusantium? Provident quisquam tenetur dolorem quam!</p>
            </div>

            <div className='grid md:grid-cols-2'>
                {/* Standard*/}
                <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-2 bg-indigo-200 rounded-2xl text-sm'>Standard</span>
                    <div className=''>
                        <p className='text-6xl font-bold py-4 flex '>Kes 4900 <span className=' text-xl text-slate-500 flex flex-col justify-end'>/month</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, nam.</p>
                    <div className='text-2xl'>
                        <p className=' flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className=' flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className=' flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className=' flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className=' flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <button className=' w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
                 {/* Premium*/}
                <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-2 bg-indigo-200 rounded-2xl text-sm'>Premium</span>
                    <div className=''>
                        <p className='text-6xl font-bold py-4 flex '>Kes 6988 <span className=' text-xl text-slate-500 flex flex-col justify-end'>/month</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, nam.</p>
                    <div className='text-2xl'>
                        <p className=' flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className=' flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className=' flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className=' flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className=' flex py-2'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <button className=' w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing