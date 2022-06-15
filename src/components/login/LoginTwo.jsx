import React from 'react'
import loginbg from '../../assets/support.jpg'
import { AiFillFacebook } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

const LoginTwo = () => {
    return (
        <div className='w-full h-screen relative'>
            <div className='w-full h-full object-cover absolute mix-blend-overlay bg-zinc-900/90'>
                <img className='w-full h-full object-cover absolute mix-blend-overlay' src={loginbg} alt="/" />s
            </div>

            <div className='flex justify-center items-center h-full'>
                <form className=" bg-white border rounded-md mx-auto p-8 max-w-[400px] w-full">
                    <h2 className='text-center font-bold text-4xl py-4'>The Migwi`s</h2>

                    <div className='flex justify-between py-8'>
                        <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center '><AiFillFacebook className='mr-2' /> FaceBock</p>
                        <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center '><FcGoogle className='mr-2' /> Google</p>
                    </div>

                    <div className='flex flex-col mb-4'>
                        <label htmlFor="username">Username</label>
                        <input className='border relative bg-gray-100 p-2'
                            placeholder='Username' type="text" />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="">Password</label>
                        <input className='border relative bg-gray-100 p-2' placeholder='Password' type="password" />
                    </div>

                    <button className='w-full mt-8 relative text-white py-3'>Sign In</button>

                    <p className='flex items-center mt-2'>
                        <input type="checkbox" className='mr-2' />
                        Remember me
                    </p>
                    <p className='text-center mt-8'>
                        Not yet a member
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LoginTwo