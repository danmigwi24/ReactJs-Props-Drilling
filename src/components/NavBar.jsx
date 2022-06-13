import React, { useState } from 'react'
import { BsPerson } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { FaFacebook ,FaTwitter,FaWhatsapp,FaInstagram,FaPinterest,FaYoutube } from "react-icons/fa"
const NavBar = ({ Menus }) => {

    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav=()=>{
        setNav(!nav)
        setLogo(!logo)
    }
    return (
        <div className='flex justify-between items-center h-[80px]   drop-shadow-lg z-10 px-4 w-screen bg-zinc-200 fixed'>
            <div className="">
                <h1 className={logo ? `hidden` : `text-2xl font-semibold text-black p-2 hover:text-white hover:rounded-md cursor-pointer hover:bg-indigo-500 md:text-3xl block`}> Tailwind CSS</h1>
            </div>
            {/* MENU ITEMS */}
            <ul className='hidden md:flex'>
                {Menus.map((menu, index) => (
                    <li key={index}>{menu.name}</li>
                ))}
            </ul>
            <div className=" m-2 hidden md:flex">
                <BiSearch className='mx-2' />
                <BsPerson />
            </div>
            {/* MENU ICON */}
            <div onClick={()=>handleNav()}className='block md:hidden z-10'>
               {nav ? <AiOutlineClose size={40}/>: <HiOutlineMenuAlt4 size={40} />}
            </div>
            {/* MOBILE VIEW */}
            <div onClick={handleNav} className={nav ? `absolute left-0 top-0 w-full bg-indigo-200/90 px-4 py-7 flex flex-col` : "absolute left-[-100%]"}>
                {/* MENU ITEMS */}
                <ul className='flex flex-col md:hidden'>
                    <h1>Dan</h1>
                    {Menus.map((menu, index) => (
                        <li className='border-b' key={index}>{menu.name}</li>
                    ))}
                    <div className='flex flex-col'>
                        <button className='my-6 mx-2'>Search</button>
                        <button className='my-0 mx-2'>Account</button>
                    </div>
                    <div className='flex justify-between my-3'>
                       <FaFacebook className='icon'/>
                       <FaTwitter className='icon'/>
                       <FaInstagram className='icon'/>
                       <FaWhatsapp className='icon'/>
                       <FaPinterest className='icon'/>
                       <FaYoutube className='icon'/>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default NavBar