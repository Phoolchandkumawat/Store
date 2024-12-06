import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
function MediaNavbar({istoggle}) {


    useState(()=>{
        const toggle = document.getElementById('toggle')
        window.addEventListener('click',(event)=>{
            // console.log(event.target)
            if(toggle.contains(event.target)){
                console.log('toggle clicked')
                console.log(event.target)

            }else{
                console.log("toggle not clicked")
            }
        })
    },[])

  return (
    <>
     <div id='toggle' className={`fixed z-[999] bottom-0 right-0 ${istoggle ? "right-0" :"-right-3/4 "} sm:hidden transition-all w-[70%] h-[100dvh] bg-black flex flex-col items-center`}>
        <ul className='grid gap-3 mt-20'>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-700 font-semibold cursor-pointer' : 'text-gray-700 font-semibold cursor-pointer hover:text-gray-900'} to="">Home</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-700 font-semibold cursor-pointer' : 'text-gray-700 font-semibold cursor-pointer hover:text-gray-900'} to="/tv">Tv</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-700 font-semibold cursor-pointer' : 'text-gray-700 font-semibold cursor-pointer hover:text-gray-900'} to="/audio">Audio</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-700 font-semibold cursor-pointer' : 'text-gray-700 font-semibold cursor-pointer hover:text-gray-900'} to="/laptop">Laptop</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-700 font-semibold cursor-pointer' : 'text-gray-700 font-semibold cursor-pointer hover:text-gray-900'} to="/mobile">Mobile</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-700 font-semibold cursor-pointer' : 'text-gray-700 font-semibold cursor-pointer hover:text-gray-900'} to="/gaming">Gaming</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-red-700 font-semibold cursor-pointer' : 'text-gray-700 font-semibold cursor-pointer hover:text-gray-900'} to="/appliances">Appliances</NavLink>
            </li> 
        </ul>
     </div>
    </>
  ) 
}

export default MediaNavbar