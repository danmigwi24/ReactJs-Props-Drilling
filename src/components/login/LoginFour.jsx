import React from 'react'
import loginbg from '../../assets/cyber-bg.png'

const LoginFour = () => {
    return (
        <div className='w-full h-screen flex'>
            <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-gray-600 shadow-lg sm:max-w-[900px]'>
                <div className='w-full h-[550px] hidden sm:block'>
                    <img src={loginbg} alt="/" />
                </div>

                <div className='p-4 flex flex-col justify-around'>
                    <form action="">
                        <h2 className=''>
                            The Migwi`s
                        </h2>

                        <div>
                            <input type="text" placeholder='Username'/>
                            <input type="text" placeholder='password'/>
                        </div>
                        <button>Sign In</button>

                        <p>
                            Forgot password
                        </p>
                    </form>

                    <p>Sign Up</p>
                </div>
            </div>
        </div>
    )
}

export default LoginFour