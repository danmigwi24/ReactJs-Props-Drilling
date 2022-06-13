import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'
const AllInOne = () => {
    return (
        <div className='w-full my-16'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <h2 className='text-5xl font-bold text-center'>All-in-one platform</h2>
                <p className='text-2xl py-8 text-gray-500 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat facilis voluptate sed perspiciatis, dolore quae?</p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                {[...Array(16)].map((x, i) =>
                    <div className='flex hover:cursor-pointer hover:border hover:border-indigo-600 hover:rounded-lg mx-2 '>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600 hover:animate-bounce hover:cursor-pointer' />
                        </div>
                        <div>
                            <h3 className=' font-bold text-lg'>Notification</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit dolores laboriosam nihil dolore commodi odio temporibus dignissimos voluptatum fugiat veniam?</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AllInOne