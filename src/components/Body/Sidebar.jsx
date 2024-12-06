import React from 'react'
import { NavLink } from 'react-router-dom'
function Sidebar() {
  return (
    <div className="w-full h-[calc(100%-64px)] p-2 flex flex-col items-center mt-20">
        <h3 className='text-center text-2xl font-semibold'>Categories</h3>
       <ul className='grid gap-3 mt-5'>
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
  )
}

export default Sidebar