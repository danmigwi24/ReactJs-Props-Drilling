import React from 'react'

import loginbg from '../../assets/cyber-bg.png'
const LoginOne = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-screen'>

      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginbg} alt="/" />
      </div>

      <div className='bg-gray-100 flex flex-col justify-center'>
        <form className=" max-w-[400px] w-full mx-auto bg-white p-4 rounded-lg">
          <h2 className='text-4xl font-bold text-center py-6'>The Migwi`s.</h2>

          <div className='flex flex-col py-2'>
            <label htmlFor="username">UserName</label>
            <input className='border-2 py-2' placeholder='User name' type="text" />
          </div>

          <div className='flex flex-col py-2'>
            <label htmlFor="password">Password</label>
            <input className='border-2 py-2' placeholder='Password' type="password" />
          </div>
          <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-white hover:border-blue-900 hover:text-blue-900 text-white'>Sign in</button>

          <div className='flex justify-between'>
            <p className='flex items-center'>
              <input className='mr-4' type="checkbox" />
              Remember me
            </p>
            <p className='hover:border hover:p-3 hover:bg-indigo-900 hover:text-white hover:rounded-xl'>Create Account</p>
          </div>

        </form>
      </div>
    </div>
  )
}

export default LoginOne