import React from 'react'
import loginbg from '../../assets/cyber-bg.png'

const LoginThree = () => {
    return (
        <div className='w-full h-screen flex'>
            <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-gray-600 shadow-lg sm:max-w-[800px]'>

                <div className='w-full h-[550px] hidden sm:block bg-slate-900 '>
                    <img src={loginbg} alt="/" className='object-cover items-center relative mix-blend-overlay' />
                </div>

                <div className='p-4 flex flex-col justify-around'>
                    <form action="">
                        <h2 className='text-4xl font-bold text-center'>
                            The Migwi`s
                        </h2>

                        <div className='flex flex-col mt-3'>
                            <input className='border p-2' type="text" placeholder='Username' />
                            <input className='border p-2 mt-3' type="text" placeholder='password' />
                        </div>
                        <button className='w-full py-2 my-4 border-green-600 bg-green-600 hover:bg-green-400'>Sign In</button>

                        <p className='text-center'>
                            Forgot password
                        </p>
                    </form>

                    <p className='text-center p-4 hover:border-2 hover:border-indigo-800 hover:text-indigo-900 hover:border-b-indigo-400 rounded-md'>Sign Up</p>
                </div>
            </div>
        </div>
    )
}

export default LoginThree