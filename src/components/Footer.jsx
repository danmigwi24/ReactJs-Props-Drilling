import React from 'react'

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div name='contact' className='w-full mt-24 bg-slate-900 text-gray-300 py-7 px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
        {[...Array(6)].map((x, i) =>
          <div>
            <h6 className='font-bold uppercase pt-2'>Solutions</h6>
            <ul>
              <li className='py-1'>Marketing</li>
              <li className='py-1'>Analytics</li>
              <li className='py-1'>Commerce</li>
              <li className='py-1'>Data</li>
              <li className='py-1'>Cloud</li>
            </ul>
          </div>
        )}

        <div className='col-span-2 pt-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletter</p>
          <p className='py-4'>The latest news,articles, and Lorem ipsum dolor sit amet consectetur.</p>
          <form className='flex flex-col sm:flex-row'>
            <input type="email" placeholder='Enter Email' className='w-full p-2 mr-4 rounded-md mb-4' />
            <button className='p-2 mb-4'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1240px] mx-auto py-4 px-2 justify-between  sm:flex-row text-center text-gray-100'>
        <p className='py-4'>2022 Workflow ,LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl '>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>

    </div>
  )
}

export default Footer